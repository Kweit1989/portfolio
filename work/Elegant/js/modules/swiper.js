// Подключаем Swaiper
import {Swiper} from './swiper_modules/swiper.js';
// import 'swiper/css/bundle';

function conectSwiper(){
    const swiper = new Swiper('.swiper', {
      
        slidesPerView: "auto",
        spaceBetween: 16,
    
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },

        breakpoints: {
          540: {
            slidesPerView: "auto",
            spaceBetween: 24,
          },
        },
    
    });
    
}


export default conectSwiper;