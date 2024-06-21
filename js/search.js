import { allProducts } from "./allProducts.js";

import { Header } from "../components/header/header.js";

window.customElements.define("site-header", Header);

import { Footer } from "../components/footer/footer.js";

window.customElements.define("site-footer", Footer);


//////////////////////////////////////////////////////////////////////////////////////

let pageCategory ;

function findPageCategory (){
  pageCategory = window.location.search.slice(1).split("=")[1];
  let pageCategoryArr = allProducts[pageCategory];
  return(pageCategoryArr)
};  

//generate category filters
function filtersGenerator(array) {
  console.log(array);
  document.querySelector(".filter-type").innerHTML = array.type ;
  if (array.categories) {
      array.categories.forEach((category) => {
      let filtersContainer = document.querySelector(
        ".categories-list__items--categories"
      );
      let filterTemplate = `<label class="categories-list__item">
                           <input name="category" class="categories-list__input" type="radio">
                           ${category} 
                          </label>`;
      filtersContainer.insertAdjacentHTML("beforeend", filterTemplate);
    });
  }

  if (array.publishers) {
    array.publishers.forEach((publisher) => {
      let filtersContainer = document.querySelector(
        ".categories-list__items--publisher"
      );
      let filterTemplate = `<label class="categories-list__item">
                           <input name="publisher" class="categories-list__input" type="radio">
                           ${publisher} 
                          </label>`;
      filtersContainer.insertAdjacentHTML("beforeend", filterTemplate);
    });
  }

  if (array.authors) {
    array.authors.forEach((author) => {
      let filtersContainer = document.querySelector(
        ".categories-list__items--authors"
      );
      let filterTemplate = `<label class="categories-list__item">
                           <input name="author" class="categories-list__input" type="radio">
                           ${author} 
                          </label>`;
      filtersContainer.insertAdjacentHTML("beforeend", filterTemplate);
    });
  } else {
     document.querySelector(".filter--authors").style.display = "none"
  }

  if (array.translators) {
    array.translators.forEach((translator) => {
      let filtersContainer = document.querySelector(
        ".categories-list__items--translators"
      );
      let filterTemplate = `<label class="categories-list__item">
                           <input name="translator" class="categories-list__input" type="radio">
                           ${translator} 
                          </label>`;
      filtersContainer.insertAdjacentHTML("beforeend", filterTemplate);
    });
  }
}

filtersGenerator(findPageCategory())

//////////////////////////////////////////////////////////////////////////////////////

// hiding result filters by clicking on them
let filterHeads = document.querySelectorAll(".categories-list__head");

for (let filterHead of filterHeads) {
    filterHead.addEventListener("click", () => {
    let filterBody = filterHead.nextElementSibling;
    filterBody.classList.toggle("hide");

    if (filterBody.classList.contains("hide")) {
      filterHead.children[1].innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />`;
    } else {
      filterHead.children[1].innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14" />`;
    }
  });
}

////////////////////////////////////////////////////////////////////////////////////

// pagination
let currentPage = 1 ;
let pageProducts_Count = 8 ;
let pageProducts = findPageCategory().products ;
let Products_Count = pageProducts.length ;
let pageCount = Math.ceil(Products_Count / pageProducts_Count) ;

// display pagination when page is loaded
const paginationGenerator = () => {
  let paginationContainer = document.querySelector(".pagination__items");
  paginationContainer.innerHTML = "" ;

    for( let i = 0 ; i < pageCount ; i++ ){
        let paginarionItem = document.createElement("li") ;
        paginarionItem.className = "pagination__item" ;
        paginarionItem.onclick = switchPage ;
        paginarionItem.innerHTML = i + 1 ;

        if( i === currentPage - 1 ){
           paginarionItem.classList.add("page-active")
        }

        paginationContainer.appendChild(paginarionItem);
    }

}
paginationGenerator() ;

// define products array for every page using currentPage number
const pageGenerator = () => {
    let firstIndex = (currentPage - 1) * pageProducts_Count ;
    let lastIndex = firstIndex + pageProducts_Count ;
    let currentPage_Products = pageProducts.slice(firstIndex,lastIndex) ;
    displayProducts(currentPage_Products)
}
pageGenerator()

// display products with a template
function displayProducts(array){

  let productItems = document.querySelector(".products");
  productItems.innerHTML = "" ;

  array.forEach( product => {
    let template ;
    if(product.discount){
      template = `
      <div class="product"> 
       <a href="./singleProduct.html?category=${pageCategory}#${product.id}" class="product__link">
        <div class="product__head">
          <div class="product__cover">
            <img class="product__img" src="${product.cover}" alt="">
          </div>
          <div class="product__discount">%${product.discount}</div>
        </div>
        <div class="product__body">
          <div class="product__content">
            <h4 class="product__title">${product.title}</h4>
            <span class="product__publisher">${product.publisher}</span>
            <div class="product__price">
              <span class="product__primary-price">${numberWithCommas(product.price)} تومان</span>
              <span class="product__off-price">${numberWithCommas(calcOffPreice())} تومان</span>
            </div>
          </div>
        </div>
       </a>
      </div>
      `
    }else{
      template = `
      <div class="product">
       <a href="./singleProduct.html?category=${pageCategory}#${product.id}" class="product__link">
        <div class="product__head">
          <div class="product__cover">
            <img class="product__img" src="${product.cover}" alt="">
          </div>
        </div>
        <div class="product__body">
          <div class="product__content">
            <h4 class="product__title">${product.title}</h4>
            <span class="product__publisher">${product.publisher}</span>
            <div class="product__price">
              <span class="product__primary-price hide"></span>
              <span class="product__off-price">${numberWithCommas(product.price)} تومان</span>
            </div>
          </div>
        </div>
       </a>
      </div>
      `
    }

    function calcOffPreice(){
       return product.price - (product.price * product.discount / 100) ;
    }

    function numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    productItems.insertAdjacentHTML("beforeend",template) ;

  })
}

// an event happens when click on every page numbers
function switchPage(){
   currentPage = event.target.innerHTML ;
   document.querySelector(".page-active").classList.remove("page-active") ;
   event.target.classList.add("page-active") ;
   pageGenerator();
}

// clicking on next icon fixed in pagination cart
let nextIcon = document.querySelector(".pagination__icon");
nextIcon.onclick = () => {
   if(currentPage < pageCount){
      currentPage ++ ;
      paginationGenerator() ;
      pageGenerator() ;
   }
}

/////////////////////////////////////////////////////////////////////////////////////////

// mobile filters collapse
let mobileFilters = document.querySelectorAll(".mobile-filter") ;

const collapsefilters = (mobileFilter) => {

   let className = mobileFilter.dataset.name ;
   document.querySelector(`.${className}`).classList.toggle("show")
}

mobileFilters.forEach( mobileFilter => mobileFilter.onclick = function(){
   collapsefilters(mobileFilter)
})

////////////////////////////////////////////////////////////////////////////////////////

//sort filters event
let sortFilterLinks = document.querySelectorAll(".sort-filters__link") ;

sortFilterLinks.forEach( sortFilterLink => sortFilterLink.onclick = function(){
  if(document.querySelector(".sort-filter__link--active")){
     document.querySelector(".sort-filter__link--active").classList.remove("sort-filter__link--active") ;
  }
  event.target.classList.add("sort-filter__link--active")
})
