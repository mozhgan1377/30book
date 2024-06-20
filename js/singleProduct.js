import { Header } from "../components/header/header.js";

import { Footer } from "../components/footer/footer.js";

import { productBox } from "../components/product/product.js";

import { allProducts } from "./allProducts.js";

window.customElements.define("site-header", Header);

window.customElements.define("site-footer", Footer);

window.customElements.define("product-box", productBox);

//----------------------------------------- find product array based on page location --------------------------

let productID, product, productCategoryArr, productsArr, productCategoryName;

window.onload = () => {
  productCategoryName = location.search.split("=")[1];
  productID = location.hash.slice(1);
  productCategoryArr = allProducts[productCategoryName];
  productsArr = productCategoryArr.products;
  findProduct(productID);
  displaySuggestedProducts(productsArr)
};

function findProduct(productID) {
  for (let child in allProducts) {
    product = productsArr.find((product) => product.id == productID);
    if (product) {
      displayProduct(product);
    }
  }
}

//------------------------------------------ display product bases on its ID -----------------------------------

function displayProduct(product) {
  let productImageElem = document.querySelector(".product__image");
  let productDiscountElem = document.querySelector(".product__discount");
  let productDeletePriceElem = document.querySelector(".product-deleted-price");
  let productFinalPriceElem = document.querySelector(".product-final-price");
  let productTitleElems = document.querySelectorAll(".product__title");
  let productPublisherElem = document.querySelector(".product__publisher");
  let productAutorSection = document.querySelector(
    ".product-author__wrapper--author"
  );
  let productTranslatorSection = document.querySelector(
    ".product-author__wrapper--translator"
  );

  productImageElem.src = product.cover;
  productPublisherElem.innerHTML = product.publisher;

  if (product.discount) {
    productDiscountElem.innerHTML = "%" + product.discount;
    productDeletePriceElem.innerHTML =
      numberWithCommas(product.price) + " تومان ";
    productFinalPriceElem.innerHTML =
      numberWithCommas(offpriceCalc(product.price, product.discount)) +
      " تومان ";
  } else {
    productDiscountElem.classList.add("d-none");
    productDeletePriceElem.classList.add("visibility-hidden");
    productFinalPriceElem.innerHTML =
      numberWithCommas(product.price) + " تومان ";
  }

  // Handling Product Author Section
  if (product.author) {
    let productAuthorElem = document.querySelector(".product__author-name");
    productAuthorElem.innerHTML = product.author;
  } else {
    productAutorSection.classList.add("d-none");
  }

  // Handling Product Translator Section
  if (product.translator) {
    let productTranslatorElem = document.querySelector(
      ".product__translator-name"
    );
    productTranslatorElem.innerHTML = product.translator;
  } else {
    productTranslatorSection.classList.add("d-none");
  }

  // Handling ProductTitle
  productTitleElems.forEach((element) => {
    element.innerHTML = product.title;
  });

  // Handling BreadCrumb
  let breadCrumd_ProductName = document.querySelector(
    ".breadcrumb__link--product-title"
  );
  let breadCrumb_ProductCategory = document.querySelector(
    ".breadcrumb__link--product-category"
  );

  breadCrumb_ProductCategory.innerHTML = productCategoryArr.type;
  breadCrumb_ProductCategory.href = `search.html?category=${productCategoryName}`;
  breadCrumd_ProductName.innerHTML = product.title;

  // Handling Product Details
  let productDetails_AuthorSection = document.querySelector(
    ".product-information__row--author"
  );
  let productDetails_TranslatorSection = document.querySelector(
    ".product-information__row--translator"
  );
  let productDetails_Category = document.querySelector(
    ".product-information__content--category"
  );
  let productDetails_Author = document.querySelector(
    ".product-information__content--author"
  );
  let productDetails_Translator = document.querySelector(
    ".product-information__content--translator"
  );
  let productDetails_Publisher = document.querySelector(
    ".product-information__content--publisher"
  );

  productDetails_Category.innerHTML = productCategoryArr.type;
  productDetails_Publisher.innerHTML = product.publisher;

  if (product.author) {
    productDetails_Author.innerHTML = product.author;
  } else {
    productDetails_AuthorSection.classList.add("d-none");
  }

  if (product.translator) {
    productDetails_Translator.innerHTML = product.translator;
  } else {
    productDetails_TranslatorSection.classList.add("d-none");
  }
}

//----------------------------------- offPriceCalculate ----------------------------------------------------

function offpriceCalc(price, discount) {
  return price - (price * discount) / 100;
}

//---------------------------------------- convert Price With regexp -----------------------------------------

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

//----------------------------------------------- Details Sections Collapse ---------------------------------------------------------

let bookDetailsBtns = document.querySelector(
  ".product-information-section__head"
).children;

let bookDetailsContents = document.querySelectorAll(
  ".product-information-section table"
);

function hideElem() {
  bookDetailsContents.forEach((table) => table.classList.add("d-none"));
}

for (let bookDetailsBtn of bookDetailsBtns) {
  bookDetailsBtn.onclick = () => {
    let sectionID = event.target.dataset.id;
    hideElem();
    document.querySelector(`#${sectionID}`).classList.remove("d-none");
  };
}

//--------------------------------------- Swipper for suggested products ---------------------------------------

const suggestion_product_Swiper = new Swiper(".products--suggestion", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    400: {
      slidesPerView: 2,
    },

    640: {
      slidesPerView: 3,
    },

    992: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 5,
    },
  },
});



function displaySuggestedProducts(productsArr) {
  let SwiperContainer = document.querySelector(".products__wrapper");
  SwiperContainer.innerHTML = productsArr
    .map((product) => {
       if(product.discount){
        return  `
            <div class="product swiper-slide">
               <a class="product__link" href="./search.html?category=${productCategoryName}">
                <div class="product__head">
                 <div class="product__discount">
                 ${product.discount}%
                 </div>
                 <div class="product__cover">
                  <img class="product__img" src="${product.cover}" alt="">
                 </div>
                </div>
                <div class="product__body">
                  <div class="product__content">
                    <h4 class="product__title">${product.title}</h4>
                    <div class="product__price">
                      <span class="product__primary-price">${numberWithCommas(
                        product.price
                      )}</span>
                      <span class="product__off-price">${numberWithCommas(
                        offpriceCalc(product.price, product.discount)
                      )}</span>
                    </div>
                  </div>
                </div>
               </a>
             </div>`;
       }else{
        return  `
            <div class="product swiper-slide">
               <a class="product__link" href="./search.html?category=${productCategoryName}">
                <div class="product__head">
                 <div class="product__cover">
                  <img class="product__img" src="${product.cover}" alt="">
                 </div>
                </div>
                <div class="product__body">
                  <div class="product__content">
                    <h4 class="product__title">${product.title}</h4>
                    <div class="product__price">
                      <span class="product__primary-price unvisible">${product.price}</span>
                      <span class="product__off-price">${numberWithCommas(product.price)}</span>
                    </div>
                  </div>
                </div>
               </a>
             </div>`;
       }
    })
    .join("");
}
