import { Header } from "../components/header/header.js";

window.customElements.define("site-header" , Header)

import { productBox } from "../components/product/product.js";

window.customElements.define("product-box" , productBox)

import { metaDataBox } from "../components/book-MetaData/book-MetaData.js";

window.customElements.define("metadata-box", metaDataBox)

import { Footer } from "../components/footer/footer.js";

customElements.define("site-footer",Footer);



//-------------------------------------------------------------- bannerSlider_Swiper -------------------------------------------------------------------------------


const bannerSlider_swiper = new Swiper('.banner-slider', {
  speed: 400,
  loop : true ,

  autoplay: {
    delay: 3000,
    disableOnInteraction : false ,
  },

  slidesPerView: 1,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});


// ----------------------------------- productSwiper(sale & bestSellers & new & panels have the same swiper but i had to repeat it ...) ----------------------


const sale_product_Swiper = new Swiper('.products--sale', {
  slidesPerView: 1,
  spaceBetween: 30 ,
  loop : true ,

  navigation: {
    nextEl: '.swiper-button-next--sale',
    prevEl: '.swiper-button-prev--sale',
  },

  breakpoints: {
    400: {
      slidesPerView: 2
    },

    640: {
      slidesPerView: 3 
    },

    992: {
      slidesPerView: 4
    },
    1200: {
      slidesPerView: 5
    }
  } 

});

const bestSellers_product_Swiper = new Swiper('.products--best-sellers', {
  slidesPerView: 1,
  spaceBetween: 30 ,
  loop : true ,

  navigation: {
    nextEl: '.swiper-button-next--best-sellers',
    prevEl: '.swiper-button-prev--best-sellers',
  },

  breakpoints: {
    400: {
      slidesPerView: 2
    },

    640: {
      slidesPerView: 3 
    },

    992: {
      slidesPerView: 4
    },
    1200: {
      slidesPerView: 5
    }
  } 

});

const newProducts_product_Swiper = new Swiper('.products--new', {
  slidesPerView: 1,
  spaceBetween: 30 ,
  loop : true ,

  navigation: {
    nextEl: '.swiper-button-next--new-products',
    prevEl: '.swiper-button-prev--new-products',
  },

  breakpoints: {
    400: {
      slidesPerView: 2
    },

    640: {
      slidesPerView: 3 
    },

    992: {
      slidesPerView: 4
    },
    1200: {
      slidesPerView: 5
    }
  } 

});

const panels_product_Swiper = new Swiper('.products--panels', {
  slidesPerView: 1,
  spaceBetween: 30 ,
  loop : true ,

  navigation: {
    nextEl: '.swiper-button-next--panels',
    prevEl: '.swiper-button-prev--panels',
  },

  breakpoints: {
    400: {
      slidesPerView: 2
    },

    640: {
      slidesPerView: 3 
    },

    992: {
      slidesPerView: 4
    },
    1200: {
      slidesPerView: 5
    }
  } 

});



// ------------------------------- book Meta Datas Swiper( author and brands have the same swiper i had to repeat it ...) -----------------------------

const author_Swiper = new Swiper('.book-metadatas--author', {
  slidesPerView: 2,
  loop : true ,

  navigation: {
    nextEl: '.swiper-button-next--author',
    prevEl: '.swiper-button-prev--author',
  },

  breakpoints: {
    480: {
      slidesPerView: 3
    },

    640: {
      slidesPerView: 4 
    },
    
    768: {
      slidesPerView: 5
    },

    1200: {
      slidesPerView: 6
    }
  } 

});

const brands_Swiper = new Swiper('.book-metadatas--brands', {
  slidesPerView: 2,
  loop : true ,

  navigation: {
    nextEl: '.swiper-button-next--brands',
    prevEl: '.swiper-button-prev--brands',
  },

  breakpoints: {
    480: {
      slidesPerView: 3
    },

    640: {
      slidesPerView: 4 
    },
    
    768: {
      slidesPerView: 5
    },

    1200: {
      slidesPerView: 6
    }
  } 

});


