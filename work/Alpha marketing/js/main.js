// Инициализация карты Яндекс и модальных окон
ymaps.ready(function () {
    // Создание карты
    var myMap = new ymaps.Map("map", {
        center: [54.381696, 48.583280],
        zoom: 17
    });

    // Создание метки на карте
    var myPlacemark = new ymaps.Placemark([54.381696, 48.583280], {
        balloonContent: `
        <div class="balloon">
            <div class="balloon_address">г.&nbsp;Ульяновск, б-р&nbsp;Новосондецкий, д.&nbsp;18</div>
            <div class="balloon__contacts">
                <a href="tel:+788124095222">+78 812 409-52-22</a>
            </div>
        </div>
     `
    }, {
        iconLayout: 'default#image',
        iconImageHref: './img/favicon.png',
        iconImageSize: [20, 20],
        iconImageOffset: [10, -42]
    });

    // Удаление ненужных контролов с карты
    myMap.controls.remove('geolocationControl');
    myMap.controls.remove('searchControl');
    myMap.controls.remove('trafficControl');
    myMap.controls.remove('typeSelector');
    myMap.controls.remove('fullscreenControl');
    myMap.controls.remove('zoomControl');
    myMap.controls.remove('rulerControl');

    // Добавление метки на карту
    myMap.geoObjects.add(myPlacemark);

    // Получаем элементы для модальных окон
    const modalQuestion = document.getElementById('modal-question');
    const btnQuestion = document.querySelector('.header__button-question');
    const closeQuestion = document.querySelector('.modal-question__close');

    const buttons = document.querySelectorAll('.price-crm__card__btn');
    const modalOverlay = document.getElementById('modal-price');
    const closeModalButton = document.querySelector('.modal-price__close');
    const modalPriceOk = document.getElementById('modal-price__ok');
    const modalPriceCloseOk = document.querySelector('.modal-price__close__ok');
    const modalForm = document.querySelector('.modal-price__content');

    // Открытие модального окна "Вопрос"
    btnQuestion.onclick = function () {
        modalQuestion.style.display = 'block';
    }

    // Закрытие модального окна "Вопрос"
    closeQuestion.onclick = function () {
        modalQuestion.style.display = 'none';
    }

    // Закрытие модального окна "Вопрос" при клике на фон
    window.onclick = function (event) {
        if (event.target === modalQuestion) {
            modalQuestion.style.display = 'none';
        }

        // Закрытие модального окна "Стоимость подключения" при клике за его пределами
        if (event.target === modalOverlay) {
            modalOverlay.style.display = 'none';
        }
    }

    // Открытие модального окна "Стоимость подключения"
    buttons.forEach(button => {
        button.addEventListener('click', function () {
            modalOverlay.style.display = 'block';
        });
    });

    // Закрытие модального окна "Стоимость подключения"
    closeModalButton.addEventListener('click', function () {
        modalOverlay.style.display = 'none';
    });

    // Обработка отправки формы "Стоимость подключения"
    modalForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Предотвращаем перезагрузку страницы

        // Скрываем модальное окно с формой
        modalOverlay.style.display = 'none';
        // Показываем модальное окно с подтверждением
        modalPriceOk.style.display = 'block';
    });

    // Закрытие модального окна с подтверждением отправки формы
    modalPriceCloseOk.addEventListener('click', function () {
        modalPriceOk.style.display = 'none';
    });
});


window.addEventListener('scroll', function() {
    const nav = document.querySelector('.nav');
    if (window.scrollY > 0) {
        nav.style.padding = '5px 20px';
        nav.style.background = 'rgba(29, 1, 65, 0.800)';
    } else {
        nav.style.padding = '16px 20px';
        nav.style.background = 'transparent';
    }
});


document.addEventListener('DOMContentLoaded', function() {
    // Получаем все элементы с выпадающими списками
    const navItems = document.querySelectorAll('.nav__nav-item');

    navItems.forEach(item => {
        const submenu = item.querySelector('ul');

        // Добавляем событие для наведения на пункт меню
        item.addEventListener('mouseover', () => {
            if (submenu) {
                submenu.style.display = 'block';
            }
        });

        // Добавляем событие для ухода с пункта меню
        item.addEventListener('mouseout', () => {
            if (submenu) {
                submenu.style.display = 'none';
            }
        });
    });
});



// Функция для бургера
// Находим элемент с классом "mobile-nav-button" (кнопка мобильной навигации)
const mobileNavButton = document.querySelector('.mobile-nav-button');
// Находим элемент с классом "mobile-nav-button-icon" (иконка мобильной навигации)
const mobileNavIcon = document.querySelector('.mobile-nav-button-icon');
// Находим элемент с классом "header-form-mobile" (форма мобильной навигации)
const mobileNavForm = document.querySelector('.nav__nav-list-mobile');

// Добавляем обработчик события "click" на кнопку мобильной навигации
mobileNavButton.addEventListener('click', function() {
    // Переключаем класс "active" на иконке мобильной навигации
    mobileNavIcon.classList.toggle('active');
    // Переключаем класс "active" на форме мобильной навигации
    mobileNavForm.classList.toggle('active');
});


