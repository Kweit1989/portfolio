// Получаем все кнопки с классом .project-card__btn
const buttons = document.querySelectorAll('.project-card__btn');
const colorThief = new ColorThief();

buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
        const projectCard = button.closest('.project-card');
        const imgWrapper = projectCard.querySelector('.project-card__img');
        const img = imgWrapper.querySelector('img');

        // Определяем основной цвет изображения
        if (img.complete) {
            applyShadow(img, imgWrapper);
        } else {
            img.addEventListener('load', () => {
                applyShadow(img, imgWrapper);
            });
        }

        // Масштабирование изображения
        img.style.transform = 'scale(1.1)';
        projectCard.classList.add('hovered');
    });

    button.addEventListener('mouseleave', () => {
        const projectCard = button.closest('.project-card');
        const imgWrapper = projectCard.querySelector('.project-card__img');
        const img = imgWrapper.querySelector('img');

        // Убираем тень с изображения
        imgWrapper.classList.remove('project-card__img-shadow');
        imgWrapper.style.boxShadow = ''; // Убираем inline-стили

        // Возвращаем изображение в исходное состояние
        img.style.transform = 'scale(1)';
        projectCard.classList.remove('hovered');
    });
});

function applyShadow(img, imgWrapper) {
    // Получаем основной цвет изображения
    const color = colorThief.getColor(img);
    const shadowColor = `rgba(${color[0]}, ${color[1]}, ${color[2]}, 0.5)`;

    // Устанавливаем тень с цветом на основе изображения
    imgWrapper.style.boxShadow = `0px 0px 100px 15px ${shadowColor}`;
    imgWrapper.classList.add('project-card__img-shadow');
}



document.addEventListener('DOMContentLoaded', function() {
    const modalShadow = document.querySelector('.modal-content');
const inputBlack = document.querySelectorAll('.modal-content > input');
const textareaBlack = document.querySelector('.modal-content > textarea');
const closeBtn = document.querySelector('.modal-close > svg');
const toggle = document.querySelector('.toggle');
const body = document.body
const connectPhone = document.querySelector('.connect__phone > a')
const toggleCircle = document.querySelector('.toggle-circle');
const formInputElements = document.querySelectorAll('.connect__form > input');
const formMessage = document.querySelector('.connect__form-message');
const navigationBar = document.querySelector('.navigation-bar');
const navigationSvgColor = document.querySelectorAll('.navigation-bar__row > a > svg');
const span = document.querySelectorAll('.span');
const headerContactForm = document.querySelector('a.header__contact-form');
const headerContactFormSpan = document.querySelector('.header__contact-form > span');
const projectCardBtn = document.querySelectorAll('a.project-card__btn');
const projectCardBtnSpan = document.querySelectorAll('a.project-card__btn > span');
const connectFormSubmit = document.querySelector('.connect__form-submit');
const swiperPaginationBullet = document.querySelectorAll('.projects-container > .swiper-pagination > .swiper-pagination-bullet');
const projectCardShadow = this.documentElement.querySelectorAll('.swiper-slide > .project-card');


toggle.addEventListener('click', function () {
    modalShadow.classList.toggle('modal-content-black');
    toggleCircle.classList.toggle('active');
    body.classList.toggle('body-black');
    connectPhone.classList.toggle('connect__phone-black');
    formMessage.classList.toggle('message-black');
    navigationBar.classList.toggle('navigation-bar-black');
    toggle.classList.toggle('toggle-black');
    textareaBlack.classList.toggle('input-black');
    closeBtn.classList.toggle('modal-close-black');
    headerContactForm.classList.toggle('header__contact-form-black');
    headerContactFormSpan.classList.toggle('header__contact-form-span');
    connectFormSubmit.classList.toggle('connect__form-submit-black');

    formInputElements.forEach(input => {
        input.classList.toggle('input-black');
    })
    navigationSvgColor.forEach(color =>{
        color.classList.toggle('svg-black');
    })
    span.forEach(span => {
        span.classList.toggle('span-black');
    })
    inputBlack.forEach(input =>{
        input.classList.toggle('input-black');
    })
    projectCardBtn.forEach(btn => {
        btn.classList.toggle('project-card__btn-black');
    })
    projectCardBtnSpan.forEach(span => {
        span.classList.toggle('project-card__btn-black');
    })
    swiperPaginationBullet.forEach(span => {
        span.classList.toggle('swiper-pagination-bullet-black');
    })
    projectCardShadow.forEach(card => {
        card.classList.toggle('project-card-black');
    })
});
});





// Получаем элементы
const modalOverlay = document.getElementById('modal');
const contactFormButtons = document.querySelectorAll('.header__contact-form, .navigation-bar__form');
const closeModalButton = document.querySelector('.modal-close');

// Функция для открытия модального окна
function openModal() {
    modalOverlay.style.display = 'block';
}

// Функция для закрытия модального окна
function closeModal() {
    modalOverlay.style.display = 'none';
}

// Открытие модального окна при нажатии на кнопку
contactFormButtons.forEach(button => {
    button.addEventListener('click', function (event) {
        event.preventDefault();
        openModal();
    });
});

// Закрытие модального окна при нажатии на крестик
closeModalButton.addEventListener('click', function () {
    closeModal();
});

// Закрытие модального окна при клике вне формы
modalOverlay.addEventListener('click', function (event) {
    if (event.target === modalOverlay) {
        closeModal();
    }
});






function handleFormSubmit(event) {
    event.preventDefault();
    var form = event.target;
    var data = new FormData(form);
    fetch(form.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            window.location.href = 'https://kweit1989.github.io/portfolio/form-ok.html'; // Редирект после успешной отправки
        } else {
            alert('Произошла ошибка пожайлуста попробуйте еще раз');
        }
    });
}

// Привязка обработчиков к формам
document.getElementById('my-form').addEventListener('submit', handleFormSubmit);
document.getElementById('my-form-two').addEventListener('submit', handleFormSubmit);


// Swaiper 
const swiper = new Swiper('.swiper-container', {
    loop: true, // Бесконечный цикл
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    slidesPerView: 1, // По умолчанию 1 слайд для ширины 1290px и выше
    spaceBetween: 10, // Отступы между слайдами

    // Настройки для разных разрешений экрана
    breakpoints: {
        1040: {
            slidesPerView: 2, // 2 слайда при ширине от 1050px до 1290px
            spaceBetween: 10, // Отступы
        },
        1290: {
            slidesPerView: 1, // 1 слайд при ширине 1290px и выше
            spaceBetween: 10, // Отступы
        },
    }
});

