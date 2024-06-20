
const template = document.createElement("template");
template.innerHTML = `
              <link rel="stylesheet" href="./components/product/product.css">
              <div class="product">
               <a class="product__link" href="">
                <div class="product__head">
                 <div class="product__discount">
                 </div>
                 <div class="product__cover">
                  <img class="product__img" src="" alt="">
                 </div>
                </div>
                <div class="product__body">
                  <div class="product__content">
                    <h4 class="product__title"></h4>
                    <div class="product__price">
                      <span class="product__primary-price"></span>
                      <span class="product__off-price"></span>
                    </div>
                  </div>
                </div>
               </a>
             </div>`

class productBox extends HTMLElement{

    constructor(){
        super() ;
        
        this.attachShadow({mode : 'open'}) ;
        this.shadowRoot.appendChild(template.content.cloneNode(true)) ;
    }

    connectedCallback(){
      let primaryPrice = this.getAttribute("price");
      let discount = this.getAttribute("discount") ;
      let category = this.getAttribute("category") ;

      if(discount){
        this.shadowRoot.querySelector(".product__discount").innerHTML = `%${discount}`;
        this.shadowRoot.querySelector(".product__off-price").innerHTML =  numberWithCommas(calc_productOffPrice()) + " تومان" ;
      }else{
        this.shadowRoot.querySelector(".product__discount").style.visibility = "hidden" ;
        this.shadowRoot.querySelector(".product__off-price").style.visibility = "hidden" ;
        this.shadowRoot.querySelector(".product__primary-price").classList.add("none-discount");
      }

      this.shadowRoot.querySelector(".product__img").src = this.getAttribute("cover") ;
      this.shadowRoot.querySelector(".product__title").innerHTML = this.getAttribute("title") ;
      this.shadowRoot.querySelector(".product__primary-price").innerHTML = numberWithCommas(primaryPrice) + " تومان" ;
      this.shadowRoot.querySelector(".product__link").href = `./singleProduct.html?category=${category}#${this.id}`

      function calc_productOffPrice(){
        let offPrice = primaryPrice - (primaryPrice * discount / 100) ;
        return offPrice ;
      }  

      function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      }

  

    }


}



export{ productBox }

