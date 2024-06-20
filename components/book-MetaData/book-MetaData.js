const template = document.createElement("template");
template.innerHTML = `
              <link rel="stylesheet" href="./components/book-MetaData/book-MetaData.css">
              <div class="book-metadata">
               <a href="#" class="book-metadata__link">
                 <div class="book-metadata__head">
                  <div class="book-metadata__cover">
                   <img class="book-metadata__img" src="" alt="">
                  </div>
                 </div>
                 <div class="book-metadata__body">
                  <span class="book-metadata__name">
                  </span>
                 </div>
               </a>
              </div>
`


class metaDataBox extends HTMLElement{

    constructor(){
        super() ;
        
        this.attachShadow({mode : 'open'}) ;
        this.shadowRoot.appendChild(template.content.cloneNode(true)) ;
    }

    connectedCallback(){
        this.shadowRoot.querySelector(".book-metadata__img").src = this.getAttribute("cover") ;
        this.shadowRoot.querySelector(".book-metadata__name").innerHTML = this.getAttribute("name") ;
    }


}



export{ metaDataBox }