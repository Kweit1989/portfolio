// Swaiper main menu
new Swiper(".swiper-container-menu", {
  loop: false, // Бесконечный цикл
  slidesPerView: 1, // По умолчанию 1 слайд для ширины 1290px и выше
  spaceBetween: 10, // Отступы между слайдами
});








// Тень у изоброжения
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

//  Свайпер карточек
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







let colorArrowDown;  // Переменная для хранения значения
let backgroundCommercialSlide = {
  backgroundColor: '#fff',
  color: '#d3e97a',
  border: '2px solid #d3e97a',
};

document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.querySelector(".toggle");
  const body = document.body;

  const bgVideo = document.querySelector(".bg-video");
  const srcVideo = document.querySelector(".src-video");

  let savedTheme = localStorage.getItem("theme");

  if (savedTheme === null) {
    savedTheme = "dark";
    localStorage.setItem("theme", "dark");
  }

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
    { element: document.querySelector(".my-skills"), className: "black-bg" },
    { element: document.querySelector(".my-skills-bg"), className: "black-bg" },
    { element: document.querySelector(".my-skills-row"), className: "my-skills-row-black" },
    { element: document.querySelector("main"), className: "black" },
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
    { elements: document.querySelectorAll(".commercial-slide-arrow"), className: "commercial-slide-arrow-black" },
  ];

  function applyTheme(isDark) {
    if (isDark) {
      body.classList.add("body-black");
      singleElements.forEach(({ element, className }) => {
        if (element) element.classList.add(className);
      });
      multipleElements.forEach(({ elements, className }) => {
        if (elements.length > 0) {
          elements.forEach((el) => el.classList.add(className));
        }
      });
      // Устанавливаем стили для темной темы
      colorArrowDown = "#000";
      backgroundCommercialSlide = {
        backgroundColor: "#000",
        color: "#d3e97a",
        border: "2px solid #d3e97a",
      };
      srcVideo.src = "./Video/bg-video-black.mp4";
      bgVideo.load(); // Перезагружаем видео
      bgVideo.play(); // Запускаем воспроизведение
      localStorage.setItem("theme", "dark");
    } else {
      body.classList.remove("body-black");
      singleElements.forEach(({ element, className }) => {
        if (element) element.classList.remove(className);
      });
      multipleElements.forEach(({ elements, className }) => {
        if (elements.length > 0) {
          elements.forEach((el) => el.classList.remove(className));
        }
      });

      // Устанавливаем стили для светлой темы
      colorArrowDown = "#fff";
      backgroundCommercialSlide = {
        backgroundColor: "#fff",
        color: "#d3e97a",
        border: "2px solid #d3e97a",
      };
      srcVideo.src = "./Video/bg-video-white.mp4";
      bgVideo.load(); // Перезагружаем видео
      bgVideo.play(); // Запускаем воспроизведение
      localStorage.setItem("theme", "light");
    }

    updateArrowsColor();

    const activeSlide = document.querySelector(".commercial-slide-active");
    if (activeSlide) {
      setActiveSlide(activeSlide);
    } else if (commercialSlides.length > 0) {
      setActiveSlide(commercialSlides[0]);
    }
  }

  

  // Применяем сохраненную тему
  applyTheme(savedTheme === "dark");

  // Обработчик клика на переключатель
  toggle.addEventListener("click", function () {
    applyTheme(!body.classList.contains("body-black"));
  });
  document.body.style.visibility = "visible";
});



// Модальное окно - формы
const modalOverlay = document.getElementById("modal");
const contactFormButtons = document.querySelectorAll(
  ".header__contact-form, .navigation-bar__form"
);
const closeModalButton = document.querySelector(".modal-close");

// Функция для открытия модального окна
function openModal() {
  modalOverlay.style.display = "block";
  document.documentElement.style.overflowY = "hidden"
}

// Функция для закрытия модального окна
function closeModal() {
  modalOverlay.style.display = "none";
  document.documentElement.style.overflowY = "";
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








// Функци  полоски у ссылки 
const link = document.querySelector('.commercial-link-alpha');
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


// Получаем все слайды с классом .commercial-slide
const commercialSlides = document.querySelectorAll('.commercial-slide');

// Функция для применения стилей активного слайда
function setActiveSlide(slide) {
  // Применяем стили из backgroundCommercialSlide к активному слайду
  slide.style.backgroundColor = backgroundCommercialSlide.backgroundColor;
  slide.style.color = backgroundCommercialSlide.color;
  slide.style.border = backgroundCommercialSlide.border;

  // Меняем стрелки на соответствующий цвет для активного слайда
  const arrows = slide.querySelectorAll('.commercial-slide-arrow path');
  arrows.forEach(arrow => {
    arrow.setAttribute('stroke', '#d3e97a'); // меняем цвет на #d3e97a для активного
  });

  // Помечаем этот слайд как активный
  commercialSlides.forEach(s => s.classList.remove('commercial-slide-active')); 
  slide.classList.add('commercial-slide-active');
}

// Функция для обновления цвета стрелок для всех слайдов
function updateArrowsColor() {
  const arrows = document.querySelectorAll('.commercial-slide-arrow path');
  arrows.forEach(arrow => {
    arrow.setAttribute('stroke', colorArrowDown); // меняем цвет на colorArrowDown для всех стрелок
  });
}

// Добавляем обработчик клика для каждого слайда
commercialSlides.forEach(slide => {
  slide.addEventListener('click', function() {
    // Удаляем стили у всех слайдов
    commercialSlides.forEach(s => {
      // Возвращаем стрелки на цвет colorArrowDown для неактивных слайдов
      const arrows = s.querySelectorAll('.commercial-slide-arrow path');
      arrows.forEach(arrow => {
        arrow.setAttribute('stroke', colorArrowDown);
      });

      // Убираем стили активного слайда
      s.style.backgroundColor = '';
      s.style.color = '';
      s.style.border = '';
      s.classList.remove('commercial-slide-active');
    });

    // Применяем стили из backgroundCommercialSlide к текущему слайду
    setActiveSlide(this);
  });
});

// Делаем первый слайд активным при загрузке страницы
if (commercialSlides.length > 0) {
  setActiveSlide(commercialSlides[0]);
  updateArrowsColor(); // Обновляем стрелки сразу при загрузке страницы
}

// Получаем элементы
const aboutUsList = document.querySelector('.about-us-list');
const arrowWrappers = document.querySelectorAll('.commercial-slide-arrow-wrapper');
const slideWrapper = document.querySelector('.commercial-slide-wrapper');

// Флаг для отслеживания активности наведения
let isHovered = false;

// Функция для обработки клика по документу
function handleDocumentClick(event) {
  // Проверяем, был ли клик вне .commercial-slide-arrow-wrapper
  const isClickInside = [...arrowWrappers].some(wrapper => wrapper.contains(event.target));
  if (!isClickInside && !isHovered) {
    // Если клик вне области, удаляем класс
    aboutUsList.classList.remove('about-us-list-active');
  }
}

// Добавляем обработчики на .commercial-slide-arrow-wrapper
arrowWrappers.forEach(wrapper => {
  wrapper.addEventListener('click', (event) => {
    event.stopPropagation(); // Останавливаем всплытие события
    aboutUsList.classList.toggle('about-us-list-active');
  });
});

// Обработчики для наведения мыши
slideWrapper.addEventListener('mouseenter', () => {
  isHovered = true; // Устанавливаем флаг
  aboutUsList.classList.add('about-us-list-active'); // Добавляем класс
});

slideWrapper.addEventListener('mouseleave', () => {
  isHovered = false; // Сбрасываем флаг
  setTimeout(() => {
    if (!isHovered) {
      aboutUsList.classList.remove('about-us-list-active'); // Убираем класс
    }
  }, 50); // Небольшая задержка для исключения конфликтов
});

// Обработчик для наведения на .about-us-list
aboutUsList.addEventListener('mouseenter', () => {
  isHovered = true; // Устанавливаем флаг
});

aboutUsList.addEventListener('mouseleave', () => {
  isHovered = false; // Сбрасываем флаг
  setTimeout(() => {
    if (!isHovered) {
      aboutUsList.classList.remove('about-us-list-active'); // Убираем класс
    }
  }, 50);
});

// Добавляем обработчик на документ
document.addEventListener('click', handleDocumentClick);

// Проверяем, если устройство мобильное или сенсорное
const isMobile = window.matchMedia('(hover: none) and (pointer: coarse)').matches;

if (isMobile) {
  // Убираем hover эффект для мобильных устройств
  const commercialSlides = document.querySelectorAll('.commercial-slide');
  commercialSlides.forEach(slide => {
    slide.addEventListener('click', function() {
      // Отключаем эффект hover по клику
      this.classList.toggle('no-hover');
    });
  });
}



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
    target: '.mix', // Селектор для элементов, которые будут фильтроваться
    control: '.commercial-slide' // Селектор для кнопок, контролирующих фильтрацию по категориям
  },
  load: {
    filter: '.сottages', // При загрузке по умолчанию отображаются элементы с классом '.category-1'
  },
  controls: {
    enable: true, // Включаем контролы MixItUp для работы фильтров
  }
});

// Обработчик для элементов внутри about-us-list, чтобы избежать их влияния на фильтрацию родителя
document.querySelectorAll('.about-us-item').forEach(item => {
  item.addEventListener('click', (event) => {
    // Останавливаем всплытие, чтобы не вызывалась фильтрация родительских элементов
    event.stopPropagation();
    
    // Запускаем фильтрацию только для этого элемента
    const filter = item.getAttribute('data-filter');
    mixContainer.filter(filter);
  });
});



document.addEventListener("DOMContentLoaded", () => {
  const arrows = document.querySelectorAll(".commercial-slide-arrow");
  let currentIndex = 0;

  function fadeOutArrow() {
    arrows[currentIndex].style.opacity = 0;

    // Через 500ms, как только текущая стрелка исчезнет
    setTimeout(() => {
      // Сбрасываем прозрачность текущей стрелки для следующего цикла
      arrows[currentIndex].style.opacity = 1;

      // Переходим к следующей стрелке
      currentIndex = (currentIndex + 1) % arrows.length;
      fadeOutArrow(); // Рекурсивно вызываем следующую анимацию
    }, 400);
  }

  fadeOutArrow(); // Запускаем анимацию
});



const commercialArrows = document.querySelectorAll('.commercial-arrow > svg');

// Функция для чередования ширины псевдоэлементов
function toggleMargin() {
  commercialArrows.forEach(arrow => {
    arrow.classList.toggle('active'); // Переключаем класс "active" для каждой стрелки
  });
}

// Запускаем изменение каждую секунду
setInterval(toggleMargin, 500);

