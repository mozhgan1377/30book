
let template = document.createElement("template") ;
template.innerHTML = 
`<link rel="stylesheet" href="./components/header/header.css">
<div class="sticky-banner">
<div class="container">
   <a class="sticky-banner__link" href="#">
       <img src="./pictures/110.jpg" alt="coverImage" class="sticky-banner__img">
   </a>
</div>
</div>
<header class="header">
<div class="container">
   <nav class="nav">
       <div class="nav-top">
         <div class="mobile-menu__container">
           <button class="mobile-menu__open-btn">
             <svg class="mobile-menu__open-icon" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
               <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
             </svg>                               
           </button>
           <div class="mobile-menu">
             <button class="mobile-menu__close-btn">
               <svg class="mobile-menu__close-icon" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fff">
                 <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
               </svg>                                                     
             </button>
             <div class="mobile-menu__category-container--first">
               <ul class="mobile-menu__category-items">
                 <li class="mobile-menu__category-item one">
                   <a href="#" class="mobile-menu__category-link">
                     کتاب عمومی
                     <svg class="mobile-menu__category-icon" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                       <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                     </svg> 
                   </a>
                   <div class="mobile-menu__category-container--second one">
                     <ul class="mobile-menu__category-items">
                       <li class="mobile-menu__category-item two">
                         <a href="#" class="mobile-menu__category-link">
                           ادبیات
                           <svg class="mobile-menu__category-icon" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                             <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                           </svg> 
                         </a>
                         <div class="mobile-menu__category-container--third two">
                           <ul class="mobile-menu__category-items">
                             <li class="mobile-menu__category-item">
                               <a href="../search.html?category=generalBook" class="mobile-menu__category-link">آموزش نقد و نظریه</a>
                             </li>
                             <li class="mobile-menu__category-item">
                               <a href="../search.html?category=generalBook" class="mobile-menu__category-link">داستان ایرانی کوتاه</a>
                             </li>
                             <li class="mobile-menu__category-item">
                               <a href="../search.html?category=generalBook" class="mobile-menu__category-link">داستان خارجی کوتاه</a>
                             </li>
                             <li class="mobile-menu__category-item">
                               <a href="../search.html?category=generalBook" class="mobile-menu__category-link">رمان ایرانی</a>
                             </li>
                             <li class="mobile-menu__category-item">
                               <a href="../search.html?category=generalBook" class="mobile-menu__category-link">رمان خارجی</a>
                             </li>
                             <li class="mobile-menu__category-item">
                               <a href="../search.html?category=generalBook" class="mobile-menu__category-link">جستار و ناداستان</a>
                             </li>
                             <li class="mobile-menu__category-item">
                               <a href="../search.html?category=generalBook" class="mobile-menu__category-link">تاریخ ادبیات</a>
                             </li>
                           </ul>
                         </div>
                       </li>
                       <li class="mobile-menu__category-item two">
                         <a href="#" class="mobile-menu__category-link">
                           سیاست
                           <svg class="mobile-menu__category-icon" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                             <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                           </svg> 
                         </a>
                         <div class="mobile-menu__category-container--third two">
                           <ul class="mobile-menu__category-items">
                             <li class="mobile-menu__category-item">
                               <a class="mobile-menu__category-link" href="../search.html?category=generalBook">دولت</a>
                             </li>
                             <li class="mobile-menu__category-item">
                               <a class="mobile-menu__category-link" href="../search.html?category=generalBook">جنگ</a>
                             </li>
                             <li class="mobile-menu__category-item">
                               <a class="mobile-menu__category-link" href="../search.html?category=generalBook">جهانی شدن</a>
                             </li>
                             <li class="mobile-menu__category-item">
                               <a class="mobile-menu__category-link" href="../search.html?category=generalBook">آزادی و امنیت</a>
                             </li>
                             <li class="mobile-menu__category-item">
                               <a class="mobile-menu__category-link" href="../search.html?category=generalBook">ارتباطات سیاسی</a>
                             </li>
                           </ul>
                         </div>
                       </li>
                       <li class="mobile-menu__category-item two">
                         <a href="#" class="mobile-menu__category-link">
                           حقوق
                           <svg class="mobile-menu__category-icon" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                             <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                           </svg> 
                         </a>
                         <div class="mobile-menu__category-container--third two">
                           <ul class="mobile-menu__category-items">
                             <li class="mobile-menu__category-item">
                               <a class="mobile-menu__category-link" href="../search.html?category=generalBook">جرم و جزا</a>
                             </li>
                             <li class="mobile-menu__category-item">
                               <a class="mobile-menu__category-link" href="../search.html?category=generalBook">حقوق مدنی</a>
                             </li>
                             <li class="mobile-menu__category-item">
                               <a class="mobile-menu__category-link" href="../search.html?category=generalBook">حقوق بین الملل</a>
                             </li>
                             <li class="mobile-menu__category-item">
                               <a class="mobile-menu__category-link" href="../search.html?category=generalBook">حقوق بشر</a>
                             </li>
                             <li class="mobile-menu__category-item">
                               <a class="mobile-menu__category-link" href="../search.html?category=generalBook">منبع و مرجع</a>
                             </li>
                           </ul>
                         </div>
                       </li>
                       <li class="mobile-menu__category-item">
                         <a class="mobile-menu__category-link" href="#">
                           فلسفه
                           <svg class="mobile-menu__category-icon" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                             <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                           </svg> 
                         </a>
                       </li>
                       <li class="mobile-menu__category-item">
                         <a class="mobile-menu__category-link" href="#">
                           روانشناسی
                           <svg class="mobile-menu__category-icon" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                             <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                           </svg> 
                         </a>
                       </li>
                       <li class="mobile-menu__category-item">
                         <a class="mobile-menu__category-link" href="#">
                           تاریخ
                           <svg class="mobile-menu__category-icon" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                             <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                           </svg> 
                         </a>
                       </li>
                       <li class="mobile-menu__category-item">
                         <a class="mobile-menu__category-link" href="#">
                           تجارت
                           <svg class="mobile-menu__category-icon" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                             <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                           </svg> 
                         </a>
                       </li>
                       <li class="mobile-menu__category-item">
                         <a class="mobile-menu__category-link" href="#">
                           شعر
                           <svg class="mobile-menu__category-icon" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                             <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                           </svg> 
                         </a>
                       </li>
                       <li class="mobile-menu__category-item">
                         <a class="mobile-menu__category-link" href="#">
                           اقتصاد
                           <svg class="mobile-menu__category-icon" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                             <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                           </svg> 
                         </a>
                       </li>
                     </ul>
                   </div>
                 </li>
                 <li class="mobile-menu__category-item one">
                   <a href="#" class="mobile-menu__category-link">
                     کتاب کمک درسی
                     <svg class="mobile-menu__category-icon" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                       <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                     </svg> 
                   </a>
                   <div class="mobile-menu__category-container--second one">
                     <ul class="mobile-menu__category-items">
                       <li class="mobile-menu__category-item">
                         <a href="#" class="mobile-menu__category-link">  
                           کنکوری
                           <svg class="mobile-menu__category-icon" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                             <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                           </svg> 
                         </a>
                         <div class="mobile-menu__category-container--third">
                           <ul class="mobile-menu__category-items">
                             <li class="mobile-menu__category-item">
                               <a href="../search.html?category=textBook" class="mobile-menu__category-link">کنکور کارشناسی</a>
                             </li>
                             <li class="mobile-menu__category-item">
                               <a class="mobile-menu__category-link" href="../search.html?category=textBook">کنکور کارشناسی ارشد</a>
                             </li>
                             <li class="mobile-menu__category-item">
                               <a class="mobile-menu__category-link" href="../search.html?category=textBook">کنکور دکتری</a>
                             </li>
                             <li class="mobile-menu__category-item">
                               <a class="mobile-menu__category-link" href="../search.html?category=textBook">علوم پایه</a>
                             </li>
                             <li class="mobile-menu__category-item">
                               <a class="mobile-menu__category-link" href="../search.html?category=textBook">هنر</a>
                             </li>
                           </ul>
                         </div>
                       </li>
                       <li class="mobile-menu__category-item">
                         <a href="../search.html?category=textBook" class="mobile-menu__category-link">
                           سوالات امتحانی
                           <svg class="mobile-menu__category-icon" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                             <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                           </svg> 
                       </a>
                       </li>
                       <li class="mobile-menu__category-item">
                         <a href="../search.html?category=textBook" class="mobile-menu__category-link">
                           ریاضی
                           <svg class="mobile-menu__category-icon" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                             <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                           </svg> 
                         </a>
                       </li>
                       <li class="mobile-menu__category-item">
                         <a href="../search.html?category=textBook" class="mobile-menu__category-link">
                           تربیت بدنی
                           <svg class="mobile-menu__category-icon" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                             <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                           </svg> 
                         </a>
                       </li>
                     </ul>
                   </div>
                 </li>
                 <li class="mobile-menu__category-item">
                   <a href="#" class="mobile-menu__category-link">
                     کتاب زبان خارجی
                     <svg class="mobile-menu__category-icon" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                       <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                     </svg> 
                   </a>
                 </li>
                 <li class="mobile-menu__category-item">
                   <a href="#" class="mobile-menu__category-link">
                     کتاب کودک و نوجوان
                     <svg class="mobile-menu__category-icon" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                       <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                     </svg> 
                   </a>
                 </li>
                 <li class="mobile-menu__category-item">
                   <a href="#" class="mobile-menu__category-link">
                     کالای فرهنگی
                     <svg class="mobile-menu__category-icon" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                       <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                     </svg> 
                   </a>
                 </li>
                 <li class="mobile-menu__category-item">
                   <a href="#" class="mobile-menu__category-link">
                     وسایل سرگرمی
                     <svg class="mobile-menu__category-icon" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                       <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                     </svg> 
                   </a>
                 </li>
                 <li class="mobile-menu__category-item">
                   <a href="#" class="mobile-menu__category-link">
                     کتاب درسی
                     <svg class="mobile-menu__category-icon" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                       <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                     </svg> 
                   </a>
                 </li>
                 <li class="mobile-menu__category-item">
                   <a href="#" class="mobile-menu__category-link">
                     وسایل فانتزی
                     <svg class="mobile-menu__category-icon" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                       <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                     </svg> 
                   </a>
                 </li>
                 <li class="mobile-menu__category-item">
                   <a href="#" class="mobile-menu__category-link">
                     لوازم التحریر
                     <svg class="mobile-menu__category-icon" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                       <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                     </svg> 
                   </a>                       
                 </li>
                 <li class="mobile-menu__category-item">
                   <a href="#" class="mobile-menu__category-link mobile-menu__category-link--discount">
                     <svg class="mobile-menu__category-icon" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                       <path stroke-linecap="round" stroke-linejoin="round" d="m9 14.25 6-6m4.5-3.493V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0c1.1.128 1.907 1.077 1.907 2.185ZM9.75 9h.008v.008H9.75V9Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm4.125 4.5h.008v.008h-.008V13.5Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                     </svg> 
                     تخفیفات شگفت انگیز                         
                   </a>
                 </li>
                 <li class="mobile-menu__category-item">
                   <a href="../search.html?category=stationery" class="mobile-menu__category-link"> 
                     لوازم التحریر                        
                   </a>
                 </li>
                 <li class="mobile-menu__category-item">
                   <a href="../search.html?category=generalBook" class="mobile-menu__category-link">
                      کتاب عمومی                        
                   </a>
                 </li>
                 <li class="mobile-menu__category-item">
                   <a href="../search.html?category=textBook" class="mobile-menu__category-link">
                     کمک درسی                        
                   </a>
                 </li>
                 <li class="mobile-menu__category-item">
                   <a href="../search.html?category=foreignBook" class="mobile-menu__category-link">
                     زبان خارجی                        
                   </a>
                 </li>
                 <li class="mobile-menu__category-item">
                   <a href="../search.html?category=childrenBook" class="mobile-menu__category-link"> 
                     کودک و نوجوان                        
                   </a>
                 </li>
                 <li class="mobile-menu__category-item">
                   <a href="../search.html?category=culturalGoods" class="mobile-menu__category-link">
                     کالای فرهنگی                       
                   </a>
                 </li>
                 <li class="mobile-menu__category-item">
                   <a href="#" class="magazine-link">
                     <img src="./pictures/logo_mag.png" alt="logo" class="magazine-link__img">
                     <span class="magazine-link__text">مجله 30بوک</span>
                   </a>
                 </li>
               </ul>
             </div> 
           </div>
         </div>
         <div class="app-logo">
           <a class="app-logo__link" href="./index.html">
              <img src="./pictures/logo.png" alt="appLogo" class="app-logo__img">
           </a>
         </div>
         <div class="search-box">
           <input type="search" name="search" class="search-box__input" placeholder="عنوان مورد نظرتان را جستجو کنید...">
           <button class="search-box__btn">
               <svg class="search-box__icon" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
               </svg>                    
           </button> 
         </div>
         <div class="nav-top__btns">
           <button class="login-btn">
               <svg class="login-btn__icon" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                   <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
               </svg>
               <span class="login-btn__text">ورود</span>                     
           </button>
           <div class="login-dropDown__section">
             <ul class="login-dropDown__list">
               <li class="login-dropDown__list-item login-dropDown__login-btn">
                 <a href="#" class="login-dropDown__link">
                   <svg class="login-dropDown__icon" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                     <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75" />
                   </svg>
                   وارد شوید
                 </a>
               </li>
               <li class="login-dropDown__list-item login-dropDown__register-btn">
                 <a href="#" class="login-dropDown__link">
                  عضویت و ثبت نام                     
                 </a>
               </li>
               <li class="login-dropDown__list-item">
                 <a href="#" class="login-dropDown__link">
                   <svg class="login-dropDown__icon" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                     <path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
                     <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                   </svg>             
                   مدیریت حساب کاربری                               
                 </a>
               </li>
               <li class="login-dropDown__list-item">
                 <a href="#" class="login-dropDown__link">
                   <svg class="login-dropDown__icon" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                     <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                   </svg>        
                   سفارشات من                                    
                 </a>
               </li>
               <li class="login-dropDown__list-item">
                 <a href="#" class="login-dropDown__link">
                   <svg class="login-dropDown__icon" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                     <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                   </svg>     
                   فعالیت های 30بوکی                                      
                 </a>
               </li>
             </ul>
           </div>
           <div class="cart-btn">
              <a href="#" class="cart-btn__link">
                <svg class="cart-btn__icon" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                   <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </svg>                  
              </a>
           </div>
         </div>  
       </div>
       <div class="nav-bottom">
         <div class="nav-bottom__menus">
           <div class="mega-menu__container">
             <button class="mega-menu__btn">
               <svg class="mega-menu__btn-icon" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                 <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
               </svg> 
               <span>همه دسته بندی ها</span> 
             </button> 
             <div class="mega-menu">
               <div class="mega-menu__category-container--first">
                 <ul class="mega-menu__category-items">
                   <li class="mega-menu__category-item">
                     <a class="mega-menu__category-link" href="#">
                       کتاب عمومی
                       <svg class="mega-menu__icon" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                         <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                       </svg> 
                     </a>
                     <div class="mega-menu__category-container--second">
                       <ul class="mega-menu__category-items">
                         <li class="mega-menu__category-item">
                           <a class="mega-menu__category-link" href="#">
                             ادبیات
                             <svg class="mega-menu__icon" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                               <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                             </svg> 
                           </a>
                           <div class="mega-menu__category-container--third">
                             <h3 class="mega-menu__category-title">
                               <span>کتاب عمومی</span>
                               <svg class="mega-menu__icon" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                 <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                               </svg>
                               <span>ادبیات</span>
                             </h3>
                             <div class="mega-menu__category-container--fourth">
                               <div class="mega-menu__category-container--fifth">
                                 <ul class="">
                                   <li class="mega-menu__category-item">
                                     <a class="mega-menu__category-link" href="../search.html?category=generalBook">آموزش نقد و نظریه</a>
                                   </li>
                                   <li class="mega-menu__category-item">
                                     <a class="mega-menu__category-link" href="../search.html?category=generalBook">تاریخ و ادبیات</a>
                                   </li>
                                   <li class="mega-menu__category-item">
                                     <a class="mega-menu__category-link" href="../search.html?category=generalBook">جستار و ناداستان</a>
                                   </li>
                                   <li class="mega-menu__category-item">
                                     <a class="mega-menu__category-link" href="../search.html?category=generalBook">جملات قصار</a>
                                   </li>
                                   <li class="mega-menu__category-item">
                                     <a class="mega-menu__category-link" href="../search.html?category=generalBook">داستان کوتاه ایرانی</a>
                                   </li>
                                   <li class="mega-menu__category-item">
                                     <a class="mega-menu__category-link" href="../search.html?category=generalBook">داستان موتاه خارجی</a>
                                   </li>
                                   <li class="mega-menu__category-item">
                                     <a class="mega-menu__category-link" href="../search.html?category=generalBook">رمان ایرانی</a>
                                   </li>
                                   <li class="mega-menu__category-item">
                                     <a class="mega-menu__category-link" href="../search.html?category=generalBook">رمان خارجی</a>
                                   </li>
                                   <li class="mega-menu__category-item">
                                     <a class="mega-menu__category-link" href="../search.html?category=generalBook"></a>
                                   </li>
                                 </ul>
                               </div>
                               <div class="mega-menu__category-container--fifth">
                                 <ul class="">
                                   <li class="mega-menu__category-item">
                                     <a class="mega-menu__category-link" href="../search.html?category=generalBook">آموزش نقد و نظریه</a>
                                   </li>
                                   <li class="mega-menu__category-item">
                                     <a class="mega-menu__category-link" href="../search.html?category=generalBook">تاریخ و ادبیات</a>
                                   </li>
                                   <li class="mega-menu__category-item">
                                     <a class="mega-menu__category-link" href="../search.html?category=generalBook">جستار و ناداستان</a>
                                   </li>
                                   <li class="mega-menu__category-item">
                                     <a class="mega-menu__category-link" href="../search.html?category=generalBook">جملات قصار</a>
                                   </li>
                                   <li class="mega-menu__category-item">
                                     <a class="mega-menu__category-link" href="../search.html?category=generalBook">داستان کوتاه ایرانی</a>
                                   </li>
                                 </ul>
                               </div>
                             </div>
                           </div>
                         </li>
                         <li class="mega-menu__category-item">
                           <a class="mega-menu__category-link" href="#">
                            اقتصاد
                             <svg class="mega-menu__icon" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                               <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                             </svg>
                           </a>
                           <div class="mega-menu__category-container--third">
                             <h3 class="mega-menu__category-title">
                               <span>کتاب عمومی</span>
                               <svg class="mega-menu__icon" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                 <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                               </svg>
                               <span>اقتصاد</span>
                             </h3>
                             <div class="mega-menu__category-container--fourth">
                               <div class="mega-menu__category-container--fifth">
                                 <ul class="mega-menu__category-items">
                                   <li class="mega-menu__category-item">
                                     <a class="mega-menu__category-link" href="../search.html?category=generalBook">بورس</a>
                                   </li>
                                   <li class="mega-menu__category-item">
                                     <a class="mega-menu__category-link" href="../search.html?category=generalBook">عمومی</a>
                                   </li>
                                   <li class="mega-menu__category-item">
                                     <a class="mega-menu__category-link" href="../search.html?category=generalBook">مرجع</a>
                                   </li>
                                   <li class="mega-menu__category-item">
                                     <a class="mega-menu__category-link" href="../search.html?category=generalBook">نظریه و نقد</a>
                                   </li>
                                 </ul>
                               </div>
                             </div>
                           </div>
                         </li>
                         <li class="mega-menu__category-item">
                           <a class="mega-menu__category-link" href="#">
                            تاریخ
                             <svg class="mega-menu__icon" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                               <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                             </svg>
                           </a>
                           <div class="mega-menu__category-container--third">
                             <h3 class="mega-menu__category-title">
                               <span>کتاب عمومی</span>
                               <svg class="mega-menu__icon" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                 <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                               </svg>
                               <span>تاریخ</span>
                             </h3>
                             <div class="mega-menu__category-container--fourth">
                               <div class="mega-menu__category-container--fifth">
                                 <ul class="">
                                   <li class="mega-menu__category-item">
                                     <a class="mega-menu__category-link" href="../search.html?category=generalBook">آسیا</a>
                                   </li>
                                   <li class="mega-menu__category-item">
                                     <a class="mega-menu__category-link" href="../search.html?category=generalBook">آفریقا</a>
                                   </li>
                                   <li class="mega-menu__category-item">
                                     <a class="mega-menu__category-link" href="../search.html?category=generalBook">آمریکا</a>
                                   </li>
                                   <li class="mega-menu__category-item">
                                     <a class="mega-menu__category-link" href="../search.html?category=generalBook">اروپا</a>
                                   </li>
                                   <li class="mega-menu__category-item">
                                     <a class="mega-menu__category-link" href="../search.html?category=generalBook">ادیان</a>
                                   </li>
                                   <li class="mega-menu__category-item">
                                     <a class="mega-menu__category-link" href="../search.html?category=generalBook">اسلام</a>
                                   </li>
                                 </ul>
                               </div>
                             </div>
                           </div>
                         </li>
                         <li class="mega-menu__category-item">
                           <a class="mega-menu__category-link" href="#">
                            فلسفه
                             <svg class="mega-menu__icon" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                               <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                             </svg>
                           </a>
                           <div>
                           </div>
                         </li>
                         <li class="mega-menu__category-item">
                           <a class="mega-menu__category-link" href="#">
                            حقوق
                             <svg class="mega-menu__icon" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                               <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                             </svg>
                           </a>
                           <div>
                           </div>
                         </li>
                         <li class="mega-menu__category-item">
                           <a class="mega-menu__category-link" href="#">
                             روانشناسی
                             <svg class="mega-menu__icon" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                               <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                             </svg> 
                           </a>
                           <div class="">
                           </div>
                         </li>
                         <li class="mega-menu__category-item">
                           <a class="mega-menu__category-link" href="#">
                            سیاست
                             <svg class="mega-menu__icon" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                               <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                             </svg>
                           </a>
                           <div>
                           </div>
                         </li>
                         <li class="mega-menu__category-item">
                           <a class="mega-menu__category-link" href="#">
                            سینما و تئاتر
                             <svg class="mega-menu__icon" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                               <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                             </svg>
                           </a>
                           <div>
                           </div>
                         </li>
                         <li class="mega-menu__category-item">
                           <a class="mega-menu__category-link" href="#">
                            شعر نو
                             <svg class="mega-menu__icon" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                               <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                             </svg>
                           </a>
                           <div>
                           </div>
                         </li>
                         <li class="mega-menu__category-item">
                           <a class="mega-menu__category-link" href="#">
                            متون کهن
                             <svg class="mega-menu__icon" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                               <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                             </svg>
                           </a>
                           <div>
                           </div>
                         </li>
                         <li class="mega-menu__category-item">
                           <a class="mega-menu__category-link" href="#">
                             رسانه
                             <svg class="mega-menu__icon" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                               <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                             </svg> 
                           </a>
                           <div class="">
                             
                           </div>
                         </li>
                         <li class="mega-menu__category-item">
                           <a class="mega-menu__category-link" href="#">
                            زندگینامه
                             <svg class="mega-menu__icon" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                               <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                             </svg>
                           </a>
                           <div>
                           </div>
                         </li>
                         <li class="mega-menu__category-item">
                           <a class="mega-menu__category-link" href="#">
                            سبک زندگی
                             <svg class="mega-menu__icon" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                               <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                             </svg>
                           </a>
                           <div>
                           </div>
                         </li>
                         <li class="mega-menu__category-item">
                           <a class="mega-menu__category-link" href="#">
                            طنز
                             <svg class="mega-menu__icon" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                               <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                             </svg>
                           </a>
                           <div>
                           </div>
                         </li>
                         <li class="mega-menu__category-item">
                           <a class="mega-menu__category-link" href="#">
                            علمی
                             <svg class="mega-menu__icon" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                               <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                             </svg>
                           </a>
                           <div>
                           </div>
                         </li>
                         <li class="mega-menu__category-item">
                           <a class="mega-menu__category-link" href="#">
                             علوم اجتماعی
                             <svg class="mega-menu__icon" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                               <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                             </svg> 
                           </a>
                           <div class="">
                           </div>
                         </li>
                         <li class="mega-menu__category-item">
                           <a class="mega-menu__category-link" href="#">
                            فرهنگ
                             <svg class="mega-menu__icon" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                               <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                             </svg>
                           </a>
                           <div>
                           </div>
                         </li>
                         <li class="mega-menu__category-item">
                           <a class="mega-menu__category-link" href="#">
                            کامپیوتر
                             <svg class="mega-menu__icon" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                               <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                             </svg>
                           </a>
                           <div>
                           </div>
                         </li>
                         <li class="mega-menu__category-item">
                           <a class="mega-menu__category-link" href="#">
                            تجارت
                             <svg class="mega-menu__icon" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                               <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                             </svg>
                           </a>
                           <div>
                           </div>
                         </li>
                         <li class="mega-menu__category-item">
                           <a class="mega-menu__category-link" href="#">
                            مذهبی
                             <svg class="mega-menu__icon" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                               <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                             </svg>
                           </a>
                           <div>
                           </div>
                         </li>
                         <li class="mega-menu__category-item">
                           <a class="mega-menu__category-link" href="#">
                            هنر
                             <svg class="mega-menu__icon" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                               <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                             </svg>
                           </a>
                           <div>
                           </div>
                         </li>
                         <li class="mega-menu__category-item">
                           <a class="mega-menu__category-link" href="#">
                            ورزش
                             <svg class="mega-menu__icon" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                               <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                             </svg>
                           </a>
                           <div>
                           </div>
                         </li>
                       </ul>
                     </div> 
                   </li>                          
                   <li class="mega-menu__category-item">
                     <a href="#" class="mega-menu__category-link">
                       کتاب کمک درسی
                       <svg class="mega-menu__icon" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                         <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                       </svg>
                     </a>
                     <div class="mega-menu__category-container--second">
                       <ul class="mega-menu__category-items">
                         <li class="mega-menu__category-item">
                           <a class="mega-menu__category-link" href="#">
                             کمک درسی
                             <svg class="mega-menu__icon" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                               <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                             </svg> 
                           </a>
                           <div class="mega-menu__category-container--third">
                             <h3 class="mega-menu__category-title">
                               <span>کتاب کمک درسی</span>
                               <svg class="mega-menu__icon" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                 <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                               </svg>
                               <span>کمک درسی</span>
                             </h3>
                             <div class="mega-menu__category-container--fourth">
                               <div class="mega-menu__category-container--fifth">
                                 <ul class="">
                                   <li class="mega-menu__category-item">
                                     <a class="mega-menu__category-link" href="#">آموزش نقد و نظریه</a>
                                   </li>
                                   <li class="mega-menu__category-item">
                                     <a class="mega-menu__category-link" href="#">تاریخ و ادبیات</a>
                                   </li>
                                   <li class="mega-menu__category-item">
                                     <a class="mega-menu__category-link" href="#">جستار و ناداستان</a>
                                   </li>
                                   <li class="mega-menu__category-item">
                                     <a class="mega-menu__category-link" href="#">جملات قصار</a>
                                   </li>
                                   <li class="mega-menu__category-item">
                                     <a class="mega-menu__category-link" href="#">داستان کوتاه ایرانی</a>
                                   </li>
                                   <li class="mega-menu__category-item">
                                     <a class="mega-menu__category-link" href="#">داستان موتاه خارجی</a>
                                   </li>
                                   <li class="mega-menu__category-item">
                                     <a class="mega-menu__category-link" href="#">رمان ایرانی</a>
                                   </li>
                                   <li class="mega-menu__category-item">
                                     <a class="mega-menu__category-link" href="#">رمان خارجی</a>
                                   </li>
                                   <li class="mega-menu__category-item">
                                     <a class="mega-menu__category-link" href="#"></a>
                                   </li>
                                 </ul>
                               </div>
                               <div class="mega-menu__category-container--fifth">
                                 <ul class="">
                                   <li class="mega-menu__category-item">
                                     <a class="mega-menu__category-link" href="#">آموزش نقد و نظریه</a>
                                   </li>
                                   <li class="mega-menu__category-item">
                                     <a class="mega-menu__category-link" href="#">تاریخ و ادبیات</a>
                                   </li>
                                   <li class="mega-menu__category-item">
                                     <a class="mega-menu__category-link" href="#">جستار و ناداستان</a>
                                   </li>
                                   <li class="mega-menu__category-item">
                                     <a class="mega-menu__category-link" href="#">جملات قصار</a>
                                   </li>
                                   <li class="mega-menu__category-item">
                                     <a class="mega-menu__category-link" href="#">داستان کوتاه ایرانی</a>
                                   </li>
                                 </ul>
                               </div>
                             </div>
                           </div>
                         </li>
                         <li class="mega-menu__category-item">
                           <a class="mega-menu__category-link" href="#">
                            کنکور
                             <svg class="mega-menu__icon" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                               <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                             </svg>
                           </a>
                           <div class="mega-menu__category-container--third">
                             <h3 class="mega-menu__category-title">
                               <span>کتاب کمک درسی</span>
                               <svg class="mega-menu__icon" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                 <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                               </svg>
                               <span>کنکور</span>
                             </h3>
                             <div class="mega-menu__category-container--fourth">
                               <div class="mega-menu__category-container--fifth">
                                 <ul>
                                   <li class="mega-menu__category-item">
                                     <a class="mega-menu__category-link" href="#">آموزش نقد و نظریه</a>
                                   </li>
                                   <li class="mega-menu__category-item">
                                     <a class="mega-menu__category-link" href="#">تاریخ و ادبیات</a>
                                   </li>
                                   <li class="mega-menu__category-item">
                                     <a class="mega-menu__category-link" href="#">جستار و ناداستان</a>
                                   </li>
                                   <li class="mega-menu__category-item">
                                     <a class="mega-menu__category-link" href="#">جملات قصار</a>
                                   </li>
                                   <li class="mega-menu__category-item">
                                     <a class="mega-menu__category-link" href="#">داستان کوتاه ایرانی</a>
                                   </li>
                                   <li class="mega-menu__category-item">
                                     <a class="mega-menu__category-link" href="#">داستان موتاه خارجی</a>
                                   </li>
                                   <li class="mega-menu__category-item">
                                     <a class="mega-menu__category-link" href="#">رمان ایرانی</a>
                                   </li>
                                   <li class="mega-menu__category-item">
                                     <a class="mega-menu__category-link" href="#">رمان خارجی</a>
                                   </li>
                                   <li class="mega-menu__category-item">
                                     <a class="mega-menu__category-link" href="#"></a>
                                   </li>
                                 </ul>
                               </div>
                               <div class="mega-menu__category-container--fifth">
                                 <ul class="mega-menu__category-item">
                                   <li class="mega-menu__category-item">
                                     <a class="mega-menu__category-link" href="#">آموزش نقد و نظریه</a>
                                   </li>
                                   <li class="mega-menu__category-item">
                                     <a class="mega-menu__category-link" href="#">تاریخ و ادبیات</a>
                                   </li>
                                   <li class="mega-menu__category-item">
                                     <a class="mega-menu__category-link" href="#">جستار و ناداستان</a>
                                   </li>
                                   <li class="mega-menu__category-item">
                                     <a class="mega-menu__category-link" href="#">جملات قصار</a>
                                   </li>
                                   <li class="mega-menu__category-item">
                                     <a class="mega-menu__category-link" href="#">داستان کوتاه ایرانی</a>
                                   </li>
                                 </ul>
                               </div>
                             </div>
                           </div>
                           <div>
                           </div>
                         </li>
                       </ul>
                     </div>
                   </li>
                   <li class="mega-menu__category-item">
                     <a href="#" class="mega-menu__category-link">
                       کتاب زبان خارجی
                       <svg class="mega-menu__icon" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                         <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                       </svg>
                     </a>
                   </li>
                   <li class="mega-menu__category-item">
                     <a href="#" class="mega-menu__category-link">
                       کتاب کودک و نوجوان
                       <svg class="mega-menu__icon" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                         <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                       </svg>
                     </a>
                   </li>
                   <li class="mega-menu__category-item">
                     <a href="#" class="mega-menu__category-link">
                       کالای فرهنگی
                       <svg class="mega-menu__icon" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                         <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                       </svg>
                     </a>
                   </li>
                   <li class="mega-menu__category-item">
                     <a href="#" class="mega-menu__category-link">
                       وسایل سرگرمی
                       <svg class="mega-menu__icon" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                         <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                       </svg>
                     </a>
                   </li>
                   <li class="mega-menu__category-item">
                     <a href="#" class="mega-menu__category-link">
                       کتاب درسی
                       <svg class="mega-menu__icon" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                         <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                       </svg>
                     </a>
                   </li>
                   <li class="mega-menu__category-item">
                     <a href="#" class="mega-menu__category-link">
                       وسایل فانتزی
                       <svg class="mega-menu__icon" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                         <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                       </svg>
                     </a>
                   </li>
                   <li class="mega-menu__category-item">
                     <a href="#" class="mega-menu__category-link">
                       لوازم التحریر
                       <svg class="mega-menu__icon" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                         <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                       </svg>
                     </a>
                   </li>
                 </ul>
               </div>
             </div> 
           </div>         
           <div class="main-menu">
             <ul class="main-menu-items">
               <li class="main-menu-item main-menu-item--discounts">
                 <a href="#" class="main-menu-link">
                   <svg class="main-menu-icon main-menu-icon--discounts" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                     <path stroke-linecap="round" stroke-linejoin="round" d="m9 14.25 6-6m4.5-3.493V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0c1.1.128 1.907 1.077 1.907 2.185ZM9.75 9h.008v.008H9.75V9Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm4.125 4.5h.008v.008h-.008V13.5Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                   </svg>  
                   تخفیف های شگفت انگیز                  
                 </a>
               </li>
               <li class="main-menu-item main-menu-item--active">
                 <a href="../30book/search.html?category=stationery" class="main-menu-link">
                   لوازم التحریر
                 </a>
               </li>
               <li class="main-menu-item">
                 <a href="../30book/search.html?category=generalBook" class="main-menu-link">
                   کتاب عمومی
                 </a>
               </li>
               <li class="main-menu-item">
                 <a href="../30book/search.html?category=textBook" class="main-menu-link">
                   کمک درسی
                 </a>
               </li>
               <li class="main-menu-item">
                 <a href="../30book/search.html?category=foreignBook" class="main-menu-link">
                   زبان خارجی
                 </a>
               </li>
               <li class="main-menu-item">
                 <a href="../30book/search.html?category=childrenBook" class="main-menu-link">
                   کودک و نوجوان
                 </a>
               </li>
               <li class="main-menu-item">
                 <a href="../30book/search.html?category=culturalGoods" class="main-menu-link">
                   کالای فرهنگی
                 </a>
               </li>
             </ul>
           </div>
         </div>
         <a href="#" class="magazine-link">
           <img src="./pictures/logo_mag.png" alt="logo" class="magazine-link__img">
           <span class="magazine-link__text">مجله 30بوک</span>
         </a>
       </div>
   </nav> 
</div>
</header> 
`


class Header extends HTMLElement{
  constructor (){
     super() 
     this.attachShadow({mode : 'open'}) ;
     this.shadowRoot.appendChild(template.content.cloneNode(true)) ;
  }

  connectedCallback (){

  // mega menu
  let megaMenu_Btn = this.shadowRoot.querySelector(".mega-menu__btn") ;
  let megaMenu = this.shadowRoot.querySelector(".mega-menu") ;
  let megaMenuItems = this.shadowRoot.querySelectorAll(".mega-menu__category-item") ;


   const open_Dropdown_Menu = (event) => {
       event.preventDefault() ;
       if(event.target.nextElementSibling){
        let className = event.target.nextElementSibling.className;
        let categoryContainers = this.shadowRoot.querySelectorAll(`.${className}`) ;
        categoryContainers.forEach(categoryContainer => categoryContainer.style.cssText = "visibility: hidden ; opacity: 0") ;
        event.target.nextElementSibling.style.cssText = "visibility: visible ; opacity: 1" 
       }
   }

   megaMenu_Btn.onclick = () => {
       megaMenu.classList.toggle('show') ;
       if(!megaMenu.classList.contains("show")){
           this.shadowRoot.querySelector(".mega-menu__category-container--second").style.cssText = "visibility: hidden ; opacity: 0" ;
           this.shadowRoot.querySelector(".mega-menu__category-container--third").style.cssText = "visibility: hidden ; opacity: 0" ;
       }
   }


   megaMenuItems.forEach( megaMenuItem => megaMenuItem.onclick = open_Dropdown_Menu ) ;

  
  //Mobile menu
  let mobilemenu_OpenBtn = this.shadowRoot.querySelector(".mobile-menu__open-btn") ;
  let mobilemenu_closeBtn = this.shadowRoot.querySelector(".mobile-menu__close-btn") ;
  let mobileListItems = this.shadowRoot.querySelectorAll(".mobile-menu__category-link");
  let mobileMenu = this.shadowRoot.querySelector(".mobile-menu") ;


  mobilemenu_OpenBtn.onclick = () => {
     mobileMenu.style.right = "0" ;
  }

  mobilemenu_closeBtn.onclick = () => {
     mobileMenu.style.right = "-27rem" ;
  }

  // I toggle mobileMenu and Changing its icon Finally :))

  let is_firstDropdownMenu_Open = false ;
  function displayDropdown(){
     let menuContainer = this.nextElementSibling ;
     if(menuContainer){
        menuContainer.classList.toggle("show") ;
        if(menuContainer.classList.contains("show")){
           this.children[0].innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14" />`
        }else{
           this.children[0].innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />`
        }
     }
    
  }


  mobileListItems.forEach( mobileListItem => mobileListItem.onclick = displayDropdown ) ;


  //login DropDown

  let loginSection = this.shadowRoot.querySelector(".login-dropDown__section");
  let loginBtn = this.shadowRoot.querySelector(".login-btn");

  loginBtn.addEventListener("click" , (event) => {
    event.preventDefault() ;
    loginSection.classList.toggle("show");
  })

  

  //close mega menu and login section by clicking outside of them :))

  document.onclick = (e) => {
    const target = e.composed ? e.composedPath()[0] : e.target;
    if(megaMenu.classList.contains("show") && !megaMenu.contains(target) && !megaMenu_Btn.contains(target)){
        megaMenu.classList.remove("show") ;
     }
    if(loginSection.classList.contains("show") && !loginSection.contains(target) && !loginBtn.contains(target)){
        loginSection.classList.remove("show")
     }  
  }


  // active MainMenuItems By clicking on them

  let mainMenualinks = this.shadowRoot.querySelectorAll(".main-menu-link") ; 
  let productsCategory = window.location.search.split("=")[1];

  if(productsCategory){
     activeMainMenuLink()
  }
  
  function activeMainMenuLink() {
    for( let mainMenualink of mainMenualinks ){
         if(mainMenualink.href.includes(productsCategory)){
            mainMenualink.style.fontWeight = "bold"
         }else{
            mainMenualink.style.fontWeight = "400"
         }
    }
  }





  }

}






export { Header }
