// Обработчик для мобильного меню
const mobileNavButton = document.querySelector('.mobile-nav-button')
const mobileNavButtonIcon = document.querySelector('.mobile-nav-button-icon')
const headerLogNav = document.querySelector('.header__log-nav')

mobileNavButton.addEventListener('click', function() {
    mobileNavButtonIcon.classList.toggle('icon-active')
    headerLogNav.classList.toggle('header__log-nav-active')
    document.body.classList.toggle('no-scroll')
})

// Маска для номера телефона
mask('.cta__form-number')

// Удаляем + если больше ничего не введено, чтобы показать placeholder
document.addEventListener('DOMContentLoaded', () => {
    const phoneInputs = document.querySelectorAll('.cta__form-number');

    phoneInputs.forEach((input) => {
        input.addEventListener('input', () => {
            if (input.value === '+') input.value = '';
        });

        input.addEventListener('blur', () => {
            if (input.value === '+') input.value = '';
        });
    });
});

// Видео с автозапуском при клике
document.addEventListener('DOMContentLoaded', function() {
    const videoContainer = document.querySelector('.video__video');
    const youtubeIframe = document.getElementById('youtubeVideo');

    videoContainer.addEventListener('click', function() {
        youtubeIframe.classList.add('video__youtub--visible');
        youtubeIframe.src += "&autoplay=1"; // Добавляем параметр autoplay
    });
});

// Инициализация карты Яндекс
ymaps.ready(init);
function init(){
    // Создание карты.
    var myMap = new ymaps.Map("map", {
        // Координаты центра карты.
        center: [54.383143, 48.578744],
        // Уровень масштабирования.
        zoom: 16
    });

    // Создание метки на карте.
    var myPlacemark = new ymaps.Placemark([54.383143, 48.578744], {
        balloonContent: `
        <div class="balloon">
            <div class="balloon_address">пр-т Авиастроителей-21</div>
            <div class="balloon__contacts">
                <a href="tel:+79603604732">+7 (960) 360-47-32</a>
            </div>
        </div>
     `
    }, {
        iconLayout: 'default#image',
        iconImageHref: './img/icon/favicon.png',
        iconImageSize: [24, 24],
        iconImageOffset: [10, -42]
    });

     myMap.controls.remove('geolocationControl'); // удаляем геолокацию
	 myMap.controls.remove('searchControl'); // удаляем поиск
	 myMap.controls.remove('trafficControl'); // удаляем контроль трафика (Пробки на дороге)
	 myMap.controls.remove('typeSelector'); // удаляем тип

     myMap.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
	// // map.controls.remove('zoomControl'); // удаляем контрол зуммирования
	 myMap.controls.remove('rulerControl'); // удаляем контрол правил
	// myMap.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)

    //Добавление метки на карту.
    myMap.geoObjects.add(myPlacemark); 
}
