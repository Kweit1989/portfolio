// Мобильная навигация
import mobileNav from './modules/mobile-nav.js';

// Скидки - закрытие
import tagline from './modules/tagline.js';

// Выподающие меню
import menudown from './modules/nav.js';

// Swiper - слайд
import conectSwiper from './modules/swiper.js'

// Таймер в Promotion
import updateTimer from './modules/promotion_time.js'

document.addEventListener('DOMContentLoaded', () => { 
	mobileNav()
	tagline();
	menudown();
	conectSwiper();
	updateTimer();
})



