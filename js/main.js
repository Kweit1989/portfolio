// Получаем все кнопки с классом .project-card__btn
const buttons = document.querySelectorAll(".project-card__btn");
const colorThief = new ColorThief();

buttons.forEach((button) => {
  button.addEventListener("mouseenter", () => {
    const projectCard = button.closest(".project-card");
    const imgWrapper = projectCard.querySelector(".project-card__img");
    const img = imgWrapper.querySelector("img");

    // Определяем основной цвет изображения
    if (img.complete) {
      applyShadow(img, imgWrapper);
    } else {
      img.addEventListener("load", () => {
        applyShadow(img, imgWrapper);
      });
    }

    // Масштабирование изображения
    img.style.transform = "scale(1.1)";
    projectCard.classList.add("hovered");
  });

  button.addEventListener("mouseleave", () => {
    const projectCard = button.closest(".project-card");
    const imgWrapper = projectCard.querySelector(".project-card__img");
    const img = imgWrapper.querySelector("img");

    // Убираем тень с изображения
    imgWrapper.classList.remove("project-card__img-shadow");
    imgWrapper.style.boxShadow = ""; // Убираем inline-стили

    // Возвращаем изображение в исходное состояние
    img.style.transform = "scale(1)";
    projectCard.classList.remove("hovered");
  });
});

function applyShadow(img, imgWrapper) {
  // Получаем основной цвет изображения
  const color = colorThief.getColor(img);
  const shadowColor = `rgba(${color[0]}, ${color[1]}, ${color[2]}, 0.5)`;

  // Устанавливаем тень с цветом на основе изображения
  imgWrapper.style.boxShadow = `0px 0px 100px 15px ${shadowColor}`;
  imgWrapper.classList.add("project-card__img-shadow");
}

document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.querySelector(".toggle");
  const body = document.body;

  const singleElements = [
    { element: document.querySelector(".modal-content"), className: "modal-content-black" },
    { element: document.querySelector(".modal-content > textarea"), className: "input-black" },
    { element: document.querySelector(".modal-close > svg"), className: "modal-close-black" },
    { element: document.querySelector(".connect__phone > a"), className: "connect__phone-black" },
    { element: document.querySelector(".connect__form-message"), className: "message-black" },
    { element: document.querySelector(".navigation-bar"), className: "navigation-bar-black" },
    { element: document.querySelector("a.header__contact-form"), className: "header__contact-form-black" },
    { element: document.querySelector(".header__contact-form > span"), className: "header__contact-form-span" },
    { element: document.querySelector(".connect__form-submit"), className: "connect__form-submit-black" },
    { element: document.querySelector(".toggle-circle"), className: "active" },
    { element: toggle, className: "toggle-black" },
  ];

  const multipleElements = [
    { elements: document.querySelectorAll(".modal-content > input"), className: "input-black" },
    { elements: document.querySelectorAll(".connect__form > input"), className: "input-black" },
    { elements: document.querySelectorAll(".navigation-bar__row > a > svg"), className: "svg-black" },
    { elements: document.querySelectorAll(".span"), className: "span-black" },
    { elements: document.querySelectorAll("a.project-card__btn"), className: "project-card__btn-black" },
    { elements: document.querySelectorAll("a.project-card__btn > span"), className: "project-card__btn-black" },
    { elements: document.querySelectorAll(".projects-container > .swiper-pagination > .swiper-pagination-bullet"), className: "swiper-pagination-bullet-black" },
    { elements: document.querySelectorAll(".swiper-slide > .project-card"), className: "project-card-black" },
    { elements: document.querySelectorAll(".commercial-description"), className: "commercial-description-black" },
    { elements: document.querySelectorAll(".commercial-description-svg"), className: "commercial-description-svg-black" },
    { elements: document.querySelectorAll(".commercial-slide"), className: "commercial-slide-black" },
    { elements: document.querySelectorAll(".commercial-link"), className: "commercial-link-black" },
    { elements: document.querySelectorAll(".commercial-arrow > svg"), className: "commercial-arrow-black" },
  ];

  toggle.addEventListener("click", function () {
    body.classList.toggle("body-black");

    // Обработка одиночных элементов
    singleElements.forEach(({ element, className }) => {
      if (element) element.classList.toggle(className);
    });

    // Обработка множественных элементов
    multipleElements.forEach(({ elements, className }) => {
      elements.forEach((el) => el.classList.toggle(className));
    });
  });
});


// Получаем элементы
const modalOverlay = document.getElementById("modal");
const contactFormButtons = document.querySelectorAll(
  ".header__contact-form, .navigation-bar__form"
);
const closeModalButton = document.querySelector(".modal-close");

// Функция для открытия модального окна
function openModal() {
  modalOverlay.style.display = "block";
}

// Функция для закрытия модального окна
function closeModal() {
  modalOverlay.style.display = "none";
}

// Открытие модального окна при нажатии на кнопку
contactFormButtons.forEach((button) => {
  button.addEventListener("click", function (event) {
    event.preventDefault();
    openModal();
  });
});

// Закрытие модального окна при нажатии на крестик
closeModalButton.addEventListener("click", function () {
  closeModal();
});

// Закрытие модального окна при клике вне формы
modalOverlay.addEventListener("click", function (event) {
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
      Accept: "application/json",
    },
  }).then((response) => {
    if (response.ok) {
      window.location.href =
        "https://kweit1989.github.io/portfolio/form-ok.html"; // Редирект после успешной отправки
    } else {
      alert("Произошла ошибка пожайлуста попробуйте еще раз");
    }
  });
}

// Привязка обработчиков к формам
document.getElementById("my-form").addEventListener("submit", handleFormSubmit);
document
  .getElementById("my-form-two")
  .addEventListener("submit", handleFormSubmit);

// Swaiper main menu
new Swiper(".swiper-container-menu", {
  loop: false, // Бесконечный цикл
  slidesPerView: 1, // По умолчанию 1 слайд для ширины 1290px и выше
  spaceBetween: 10, // Отступы между слайдами
});

new Swiper(".swiper-container", {
  loop: true, // Бесконечный цикл
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
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
  },
});



const link = document.querySelector('.commercial-link-alpha');

// Функция для чередования ширины псевдоэлементов
function toggleWidth() {
  link.classList.toggle('active');  // Переключаем класс "active" каждые 1 секунду
}

// Запускаем изменение каждую секунду
setInterval(toggleWidth, 1000);



// Swiper commercial projects
new Swiper(".commercial-swiper", {
  slidesPerView: "auto",
  watchSlidesProgress: true,
  breakpoints: {
    1300: {
      allowTouchMove: false, // Отключить свайп после 1300px
    },
  },
});
// Получаем все слайды с классом .commercial-slide - для добовления активного таба
const commercialSlides = document.querySelectorAll('.commercial-slide');

// Добавляем обработчик клика для каждого слайда
commercialSlides.forEach(slide => {
  slide.addEventListener('click', function() {
    // Удаляем класс .commercial-slide-active у всех слайдов
    commercialSlides.forEach(s => s.classList.remove('commercial-slide-active'));

    // Добавляем класс .commercial-slide-active только к текущему слайду
    this.classList.add('commercial-slide-active');
  });
});




const commercialBlocks = document.querySelectorAll('.commercial-window-wrapper');
// Добавляем обработчики событий для каждого блока
commercialBlocks.forEach((block) => {
  const arrow = block.querySelector('.commercial-arrow');
  const description = block.querySelector('.commercial-description');
  const wrapperArrowDescription = block.querySelector(".wrapper-arrow-description");
  const descriptionArrow = block.querySelector(".commercial-arrow > svg");
  const commercialWindow = block.querySelector(".commercial-window");

  if (arrow && description && wrapperArrowDescription && descriptionArrow && commercialWindow) {
    // Добавляем обработчик события для клика на стрелку
    arrow.addEventListener('click', () => {
      // Переключаем класс для отображения или скрытия описания
      wrapperArrowDescription.classList.toggle("wrapper-arrow-description-left");
      descriptionArrow.classList.toggle("commercial-arrow-transform");
      commercialWindow.classList.toggle("commercial-window-noscroll");
    });
  }
});


const mixContainer = mixitup(".commercial-window-container", {
  selectors: {
    target: '.mix', // Селектор для элементов, которые будут фильтроваться ('.mix' элементы)
    control: '.commercial-slide' // Селектор для кнопок, контролирующих фильтрацию по категориям
    },
    load: {
        filter: '.сottages', // При загрузке по умолчанию отображаются элементы с классом '.category-1'
    },
    controls: {
        enable: true, // Включаем контролы MixItUp для работы фильтров
    }
})

const commercialArrows = document.querySelectorAll('.commercial-arrow > svg');

// Функция для чередования ширины псевдоэлементов
function toggleMargin() {
  commercialArrows.forEach(arrow => {
    arrow.classList.toggle('active'); // Переключаем класс "active" для каждой стрелки
  });
}

// Запускаем изменение каждую секунду
setInterval(toggleMargin, 500);
