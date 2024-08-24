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


const modalShadow = document.querySelector('.modal-content');
const inputBlack = document.querySelectorAll('.modal-content > input')
const textareaBlack = document.querySelector('.modal-content > textarea')
const closeBtn = document.querySelector('.modal-close > svg');
const toggle = document.querySelector('.toggle');
const body = document.body
const toggleCircle = document.querySelector('.toggle-circle');
const formInputElements = document.querySelectorAll('.connect__form > input');
const formMessage = document.querySelector('.connect__form-message');
const navigationBar = document.querySelector('.navigation-bar');
const navigationSvgColor = document.querySelectorAll('.navigation-bar__row > a > svg');
const span = document.querySelectorAll('.span')


toggle.addEventListener('click', function () {
    modalShadow.classList.toggle('modal-content-black');
    toggleCircle.classList.toggle('active');
    body.classList.toggle('body-black');
    formMessage.classList.toggle('message-black');
    navigationBar.classList.toggle('navigation-bar-black');
    toggle.classList.toggle('toggle-black');
    textareaBlack.classList.toggle('input-black');
    closeBtn.classList.toggle('modal-close-black')

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
        input.classList.toggle('input-black')
    })
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
            window.location.href = 'http://127.0.0.1:5500/form-ok.html'; // Редирект после успешной отправки
        } else {
            alert('Произошла ошибка пожайлуста попробуйте еще раз');
        }
    });
}

// Привязка обработчиков к формам
document.getElementById('my-form').addEventListener('submit', handleFormSubmit);
document.getElementById('my-form-two').addEventListener('submit', handleFormSubmit);

