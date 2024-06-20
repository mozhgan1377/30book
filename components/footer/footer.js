const template = document.createElement("template");
template.innerHTML = `
  <link rel="stylesheet" href="./components/footer/footer.css">
  <footer class="footer">
    <div class="footer-top">
      <div class="footer__wrapper">
        <div class="purchase-facilities">
          <div class="Purchase-facilities__wrapper">
            <div class="Purchase-facility">
              <svg class="purchase-facility__icon" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
              </svg>
              <span class="purchase-facility__text">
                ضمانت ارسال
              </span>
            </div>
            <div class="Purchase-facility">
              <svg class="purchase-facility__icon" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
              </svg>
              <span class="purchase-facility__text">
                خرید از طریق شتاب
              </span>
            </div>
            <div class="Purchase-facility">
              <svg class="purchase-facility__icon" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
              </svg>
              <span class="purchase-facility__text">
                روش های ارسال
              </span>
            </div>
          </div>
        </div>
        <div class="contact">
          <div class="contact-right">
            <svg class="contact__icon" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
            </svg>
            <span>همراه شما هستیم | با ما تماس بگیرید </span>
          </div>
          <div class="contact-left">
            <div class="contact__method">
              <svg class="contact__icon" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
              </svg>
              <span>تلفن تماس : </span>
              <span> 021-6337900</span>
            </div>
            <div class="contact__method">
              <svg class="contact__icon" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </svg>
              <span>ایمیل : </span>
              <span>info@30book.com</span>
            </div>
          </div>
        </div>
        <div class="description">
          <div class="expandable-description">
            <h1 class="description__title">خرید کتاب آنلاین با تخفیف ویژه </h1>
            <p> 
              با خرید کتاب آنلاین از سی بوک ( 30بوک)  کتاب‌هایتان را ارزان‌تر بخرید . با دنبال کردن ایسنتاگرام سی بوک از کدهای تخفیف مطلع شوید و با شرکت در نظرسنجی ، قرعه‌کشی و چالش‌های ما تخفیف‌های بیشتری بگیرید . فروشگاه آنلاین سی بوک به عنوان قدیمی‌ترین و بزرگترین سایت خرید کتاب در ایران ، سابقه‌ی درخشانی در سرویس‌دهی به مشتریان خود دارد . تو سی بوک ، جای هیچ کتابی خالی نیست! 
            </p>
            <h2 class="description__title">تخفیف ها</h2>
            <p>
               کدهای تخفیف کتاب 30بوک رتبه‌ی یک رو تو ایران داره، در 30بوک هر کتاب با توافق ناشرش دارای درصد قابل توجهی از تخفیف می‌باشد . اما اگر می‌خواهید تخفیف بیشتری بگیرید با عضویت در اینستاگرام و سایت ما از اطلاع‌رسانی‌های منظم ( مانند پیامک ، ایمیل و صفحه‌ی اینستاگرام ) کدهای تخفیف بیشتری با خبر شوید .  
            </p>
            <h3 class="description__title">معرفی و تحلیل کتاب</h3>
            <p> 
              تو سایت سی بوک ( 30بوک) هر کتاب دارای یک صفحه اختصاصی است که می‌توانید با مراجعه به قسمت نقد و بررسی آن اطلاعات خوبی در مورد کتاب بدست بیارید .تلاش می‌کنیم همیشه این قسمت را به‌روز کنیم. همچنین بخش تلویزیون سی بوک در آینده نزدیک راه اندازی می‌شود که با مراجعه به آن می‌توانید با کتاب‌های جدیدی با موضوعات  مختلف آشنا شوید. 
            </p>
            <h4 class="description__title">سخن آخر</h4>
            <p>
              مرسی که کتاب می خونید :)
            </p>
          </div>
          <div class="more-description__btn">
            <span>
              نمایش بیشتر
            </span>
            <svg class="more-description__icon" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-main">
      <div class="footer__wrapper">
        <div class="bottom-menu">
          <div class="bottom-menu__col">
            <ul class="bottom-menu__list">
              <li class="bottom-menu__list-item">
                <h3 class="bottom-menu__title">
                  همراه 30 بوک
                </h3>
              </li>
              <li class="bottom-menu__list-item">
                <a class="bottom-menu__link" href="#">درباره 30بوک</a>
              </li>
              <li class="bottom-menu__list-item">
                <a class="bottom-menu__link" href="#">فرصت های شغلی</a>
              </li>
              <li class="bottom-menu__list-item">
                <a class="bottom-menu__link" href="#">فروشگاه</a>
              </li>
            </ul>
          </div>
          <div class="bottom-menu__col">
            <ul class="bottom-menu__list">
              <li class="bottom-menu__list-item">
                <h3 class="bottom-menu__title">
                  خدمات مشتری
                </h3>
              </li>
              <li class="bottom-menu__list-item">
                <a class="bottom-menu__link" href="#"> تماس با ما </a>
              </li>
              <li class="bottom-menu__list-item">
                <a class="bottom-menu__link" href="#"> خرید عمده </a>
              </li>
              <li class="bottom-menu__list-item">
                <a class="bottom-menu__link" href="#"> انتقادات و پیشنهادات </a>
              </li>
              <li class="bottom-menu__list-item">
                <a class="bottom-menu__link" href="#"> کدهای تخففیف  </a>
              </li>
            </ul>
          </div>
          <div class="bottom-menu__col">
            <ul class="bottom-menu__list">
              <li class="bottom-menu__list-item">
                <h3 class="bottom-menu__title">
                  خدمات مشتری
                </h3>
              </li>
              <li class="bottom-menu__list-item">
                <a class="bottom-menu__link" href="#"> پیوندهای مفید </a>
              </li>
              <li class="bottom-menu__list-item">
                <a class="bottom-menu__link" href="#">  راهنمای خرید </a>
              </li>
              <li class="bottom-menu__list-item">
                <a class="bottom-menu__link" href="#"> قوانین و مقررات </a>
              </li>
              <li class="bottom-menu__list-item">
                <a class="bottom-menu__link" href="#"> سوالات متداول </a>
              </li>
              <li class="bottom-menu__list-item">
                <a class="bottom-menu__link" href="#"> سیاست حفظ حریم خصوصی </a>
              </li>
            </ul>
          </div>
          <div class="bottom-menu__col">
            <h3 class="bottom-menu__title">
              شبکه های اجتماعی | با ما همراه باشید
            </h3>
            <div class="social-medias">
              <div class="social-media">
                <a class="social-media__link" href="#">
                  <svg class="social-media__icon" width="42" height="42" fill="none"><path fill="url(#a)" d="M34.5 0h-27A7.5 7.5 0 0 0 0 7.5v27A7.5 7.5 0 0 0 7.5 42h27a7.5 7.5 0 0 0 7.5-7.5v-27A7.5 7.5 0 0 0 34.5 0Z"/>
                    <path fill="#fff" d="M20.995 11.556c3.082 0 3.445 0 4.658.071a6.198 6.198 0 0 1 2.134.39 3.834 3.834 0 0 1 2.188 2.187c.251.678.386 1.393.398 2.116.053 1.222.062 1.585.062 4.658 0 3.073 0 3.436-.062 4.65a6.395 6.395 0 0 1-.398 2.204c-.195.5-.498.95-.886 1.32a3.479 3.479 0 0 1-1.328.885 6.332 6.332 0 0 1-2.134.398c-1.213.053-1.576.071-4.658.071-3.082 0-3.436 0-4.65-.07a6.277 6.277 0 0 1-2.133-.4 3.48 3.48 0 0 1-1.329-.885 3.544 3.544 0 0 1-.85-1.319 6.394 6.394 0 0 1-.398-2.143c-.053-1.213-.07-1.576-.07-4.649s0-3.436.07-4.658c.005-.744.14-1.48.398-2.178a3.48 3.48 0 0 1 .886-1.32c.371-.39.825-.693 1.328-.885a6.117 6.117 0 0 1 2.134-.39c1.213-.062 1.576-.07 4.65-.07m0-2.073c-3.127 0-3.543 0-4.747.062a8.572 8.572 0 0 0-2.79.54c-.77.29-1.467.743-2.045 1.329a5.774 5.774 0 0 0-1.328 2.037 8.431 8.431 0 0 0-.532 2.798c-.053 1.222-.07 1.62-.07 4.746 0 3.126 0 3.542.07 4.746.018.956.198 1.903.532 2.799.293.765.746 1.46 1.328 2.036a5.686 5.686 0 0 0 2.046 1.329 8.37 8.37 0 0 0 2.789.531c1.23.062 1.62.07 4.746.07 3.126 0 3.542 0 4.747-.07a8.43 8.43 0 0 0 2.798-.531 5.897 5.897 0 0 0 3.365-3.365 8.686 8.686 0 0 0 .54-2.799c.053-1.23.07-1.62.07-4.746 0-3.126 0-3.542-.07-4.746a8.632 8.632 0 0 0-.54-2.798 5.896 5.896 0 0 0-3.365-3.365 8.633 8.633 0 0 0-2.798-.54c-1.222-.054-1.62-.063-4.747-.063Z"/>
                    <path fill="#fff" d="M20.996 15.079a5.915 5.915 0 1 0 0 11.83 5.915 5.915 0 0 0 0-11.83Zm0 9.74a3.843 3.843 0 1 1 3.843-3.834 3.833 3.833 0 0 1-3.843 3.834ZM28.522 14.85a1.382 1.382 0 1 1-2.764 0 1.382 1.382 0 0 1 2.764 0Z"/><defs><radialGradient id="a" cx="0" cy="0" r="1" gradientTransform="translate(-1.054 42.133) scale(77.6509)" gradientUnits="userSpaceOnUse"><stop stop-color="#F5EC53"/>
                      <stop offset=".24" stop-color="#E48244"/><stop offset=".4" stop-color="#D15767"/><stop offset=".49" stop-color="#C84278"/><stop offset="1" stop-color="#192CFA"/>
                       </radialGradient></defs>
                  </svg>
                </a>
              </div>
              <div class="social-media">
                <a class="social-media__link" href="#">
                  <svg class="social-media__icon" width="42" height="42" fill="none">
                    <path fill="#33A6E1" d="M21 42c11.598 0 21-9.402 21-21S32.598 0 21 0 0 9.402 0 21s9.402 21 21 21Z"/>
                    <path fill="#fff" d="m13.91 24.022-5.057-1.75s-.614-.26-.412-.85c.04-.122.123-.226.362-.405 1.121-.828 20.743-8.315 20.743-8.315a1.59 1.59 0 0 1 .881-.068.49.49 0 0 1 .212.143.533.533 0 0 1 .117.235c.034.155.049.314.043.473 0 .14-.018.267-.03.466-.12 2.046-3.685 17.326-3.685 17.326s-.215.893-.983.923a1.325 1.325 0 0 1-.55-.098 1.39 1.39 0 0 1-.472-.32c-1.505-1.375-6.706-5.084-7.854-5.899a.259.259 0 0 1-.095-.166c0-.085.074-.192.074-.192s9.054-8.543 9.293-9.452c.019-.072-.052-.105-.147-.075-.599.234-11.025 7.222-12.177 7.995a.514.514 0 0 1-.264.03Z"/>
                  </svg>
                </a>
              </div>
              <div class="social-media">
                <a class="social-media__link" href="#">
                  <svg class="social-media__icon" width="42" height="42" fill="none">
                    <path fill="#C3271A" d="M34.5 0h-27A7.5 7.5 0 0 0 0 7.5v27A7.5 7.5 0 0 0 7.5 42h27a7.5 7.5 0 0 0 7.5-7.5v-27A7.5 7.5 0 0 0 34.5 0Z"/>
                    <path fill="#fff" d="M37.102 12.867a4.251 4.251 0 0 0-2.975-2.993c-2.656-.708-13.132-.708-13.132-.708s-10.511 0-13.132.708a4.25 4.25 0 0 0-2.976 2.993c-.7 2.657-.7 8.147-.7 8.147s0 5.499.7 8.138a4.25 4.25 0 0 0 2.976 2.993c2.656.708 13.132.708 13.132.708s10.511 0 13.132-.708a4.251 4.251 0 0 0 2.975-2.993c.7-2.657.7-8.138.7-8.138s.018-5.49-.7-8.147Z"/>
                    <path fill="#C3271A" d="M17.56 25.999v-9.997l8.784 5.003-8.785 4.994Z"/>
                  </svg>
                </a>
              </div>
              <div class="social-media">
                <a class="social-media__link" href="#">
                  <svg class="social-media__icon" width="30" height="30" fill="none"><g clip-path="url(#a)">
                    <path fill="#231F20" d="m12.948.877-2.762-.72A4.645 4.645 0 0 0 4.5 3.454l-.689 2.603a14.225 14.225 0 0 1 9.137-5.18ZM.834 17.266l-.676 2.55a4.645 4.645 0 0 0 3.297 5.682l2.634.702a14.23 14.23 0 0 1-5.255-8.934ZM26.545 4.497 23.59 3.71a14.225 14.225 0 0 1 5.444 9.527l.812-3.073a4.645 4.645 0 0 0-3.301-5.668ZM16.986 29.091l2.832.764a4.645 4.645 0 0 0 5.681-3.297l.8-3.003c-2.253 3-5.6 4.99-9.313 5.536Z"/>
                    <path fill="#ED145B" d="M15.002 1.992a13.009 13.009 0 1 0-.009 26.018 13.009 13.009 0 0 0 .01-26.018Zm-7.367 6.49a3.714 3.714 0 1 1 7.294 1.406 3.714 3.714 0 0 1-7.294-1.407ZM13.04 19.72a3.714 3.714 0 1 1-7.293-1.417 3.714 3.714 0 0 1 7.293 1.417Zm1.576-3.008a1.65 1.65 0 1 1 .627-3.241 1.65 1.65 0 0 1-.627 3.241Zm7.749 4.8a3.714 3.714 0 1 1-7.294-1.407 3.714 3.714 0 0 1 7.294 1.406Zm-2.459-6.885a3.714 3.714 0 1 1 3.806-1.602 3.714 3.714 0 0 1-3.806 1.606v-.004Z"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h30v30H0z"/></clipPath></defs></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="footer-about">
          <div class="footer-about__right">
              <h3 class="footer-about__title">فروشگاه آنلاین کتاب 30بوک</h3>
              <p class="footer-about__description">
                اواسط سال 1393 بود که چند تا جوان، صمیمی، پرانرژی و لبریز از ایده، به‌عنوان یک دارودسته‌ی تبعیدیِ کرمِکتاب دور هم جمع شدیم تا به رویای معرفی و فرستادن کتاب به دوردست‌ترین کتاب‌خوارهای ایران برسیم. ما نه عینک گرد می‌زنیم، نه سبیل بلند داریم (به جز یک مورد) و نه زیاد اهل کافه رفتنیم.
              <br />           
              <br />           
                ما تیم بچه‌معمولی‌های 30‌بوک هستیم: ذله‌کننده‌ی سرمایه‌گذارهای دست‌به‌عصا، حامیان تمام‌عیار احمقانه‌ترین و جسورانه‌ترین ایده‌ها، و کَنه‌ی حل غیرممکن‌ترین مسئله‌ها. اگر جوانید (دل‌تان را می‌گوییم!)، یک جای خالی هم برای شما توی بوفه کنار گذاشته‌ایم. به دنیای 30بوک خوش آمدید!
              </p>
          </div>
          <div class="footer-about__left">
            <div class="footer-licenses">
              <div class="footer-license">
                <img class="footer-license__img" src="./pictures/footer-banner1.svg" alt=""> 
              </div>
              <div class="footer-license">
               <img class="footer-license__img" src="./pictures/footer-banner3.webp" alt="">
              </div>
            </div>   
          </div>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="footer__wrapper">
       <p class="copyWrite-text"> © 1393-1403 | تمامی حقوق این سایت متعلق به فروشگاه اینترنتی کتاب و محصولات فرهنگی 30بوک می باشد. 
       </p>
       <p class="update-info"> آخرین به روزرسانی نرم افزاری در تاریخ 19 اردیبهشت ماه 1403 ساعت 04:30 </p>
      </div>
    </div>
   </footer>
`


class Footer extends HTMLElement{
    constructor(){
        super()
        this.attachShadow({mode:"open"}) ;
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback(){
       let showMore_Btn = this.shadowRoot.querySelector(".more-description__btn") ;
       let description_Section = this.shadowRoot.querySelector(".expandable-description") ;
       let isDescription_Expand = false ;

       showMore_Btn.onclick = function(){
         if(isDescription_Expand){

           description_Section.style.maxHeight = "4rem" ;
           isDescription_Expand = false ;
           showMore_Btn.innerHTML = `
                  <span>
                    نمایش بیشتر
                  </span>
                  <svg class="more-description__icon" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                  </svg>
                   `
         }else{
           description_Section.style.maxHeight = "max-content" ;
           isDescription_Expand = true ;
           showMore_Btn.innerHTML = `
                  <span>
                    نمایش کمتر
                  </span>
                  <svg class="more-description__icon" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                   <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                  </svg>
                   `
    
         }
       }

    }


}



export {Footer}