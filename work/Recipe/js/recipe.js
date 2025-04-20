// Когда DOM загружен, выполняем этот код
document.addEventListener('DOMContentLoaded', () => {
    // === Видео секция ===
    
    // Находим элементы управления видео
    const videoBtnImg = document.querySelector('.play-button-img');
    const videoOverlay = document.querySelector('.section-description-video-overlay');
    const videoFile = document.querySelector('#video-description');
    const videoContainer = document.querySelector('.section-description-video');

    // Обработчик нажатия на контейнер с видео
    videoContainer.addEventListener('click', function() {
        if (videoFile.paused) {
            // Если видео на паузе, воспроизводим видео
            videoFile.play();
            // Меняем иконку кнопки на "пауза"
            videoBtnImg.src = "./img/description/section_description_main/pause.png";
            // Скрываем оверлей
            videoOverlay.classList.add('hidden');
        } else {
            // Если видео воспроизводится, ставим на паузу
            videoFile.pause();
            // Меняем иконку кнопки на "плей"
            videoBtnImg.src = "./img/description/section_description_main/play.png";
            // Показываем оверлей
            videoOverlay.classList.remove('hidden');
        }
    });

    // Обработчик наведения мыши на контейнер с видео
    videoContainer.addEventListener('mouseenter', function() {
        // Показываем оверлей при наведении мыши
        videoOverlay.classList.remove('hidden');
    });

    // Обработчик вывода мыши из контейнера с видео
    videoContainer.addEventListener('mouseleave', function() {
        if (videoFile.paused) {
            // Если видео на паузе, показываем оверлей
            videoOverlay.classList.remove('hidden');
        } else {
            // Если видео воспроизводится, скрываем оверлей
            videoOverlay.classList.add('hidden');
        }
    });

    // Обработчик события паузы видео
    videoFile.addEventListener('pause', function() {
        // Показываем оверлей и меняем иконку кнопки на "плей"
        videoOverlay.classList.remove('hidden');
        videoBtnImg.src = "./img/description/section_description_main/play.png";
    });

    // Обработчик события воспроизведения видео
    videoFile.addEventListener('play', function() {
        // Скрываем оверлей и меняем иконку кнопки на "пауза"
        videoOverlay.classList.add('hidden');
        videoBtnImg.src = "./img/description/section_description_main/pause.png";
    });

    // === Рейтинг (звезды) секция ===

    // Находим все элементы с классом "section-name-recipe-social-cart-rating"
    const ratingCards = document.querySelectorAll('.section-name-recipe-social-cart-rating');

    // Проходимся по каждому элементу с классом "section-name-recipe-social-cart-rating"
    ratingCards.forEach(card => {
        // Находим все элементы с классом "star" внутри текущего ratingCard
        const stars = card.querySelectorAll('.star');

        // Для каждой звезды внутри текущей карточки рейтинга
        stars.forEach(star => {
            // Добавляем обработчик события "mouseover" для подсветки звезд при наведении
            star.addEventListener('mouseover', () => handleMouseOver(star, stars));
            // Добавляем обработчик события "mouseout" для снятия подсветки звезд при уходе курсора
            star.addEventListener('mouseout', () => handleMouseOut(stars));
            // Добавляем обработчик события "click" для установки рейтинга при клике
            star.addEventListener('click', (event) => handleClick(star, stars, event));
        });
    });

    // Функция для обработки наведения курсора на звезду
    function handleMouseOver(star, stars) {
        // Получаем значение звезды из атрибута "data-value"
        const value = parseInt(star.getAttribute('data-value'));
        // Подсвечиваем звезды в зависимости от значения
        highlightStars(value, stars);
    }

    // Функция для обработки ухода курсора со звезды
    function handleMouseOut(stars) {
        // Снимаем подсветку со всех звезд
        clearHighlights(stars);
    }

    // Функция для обработки клика на звезду
    function handleClick(star, stars, event) {
        // Отменяем стандартное поведение ссылки
        event.preventDefault();
        // Получаем значение звезды из атрибута "data-value"
        const value = parseInt(star.getAttribute('data-value'));
        // Устанавливаем рейтинг в зависимости от значения
        setRating(value, stars);
    }

    // Функция для подсветки звезд
    function highlightStars(value, stars) {
        // Проходимся по всем звездам
        stars.forEach(star => {
            // Получаем значение текущей звезды
            const starValue = parseInt(star.getAttribute('data-value'));
            // Если значение звезды меньше или равно заданному, добавляем класс "hover", иначе удаляем его
            if (starValue <= value) {
                star.classList.add('hover');
            } else {
                star.classList.remove('hover');
            }
        });
    }

    // Функция для снятия подсветки со всех звезд
    function clearHighlights(stars) {
        stars.forEach(star => {
            star.classList.remove('hover');
        });
    }

    // Функция для установки рейтинга
    function setRating(value, stars) {
        stars.forEach(star => {
            const starValue = parseInt(star.getAttribute('data-value'));
            // Если значение звезды меньше или равно заданному, добавляем класс "selected", иначе удаляем его
            if (starValue <= value) {
                star.classList.add('selected');
            } else {
                star.classList.remove('selected');
            }
        });
    }
});



// Находим все svg элементы внутри .section-ingredients-header-crust
document.querySelectorAll('.section-ingredients-header-crust svg').forEach(svg => {
    // Добавляем флаг для отслеживания состояния (черный или оранжевый круг)
    let isOrange = false;

    svg.addEventListener('click', function() {
        // Находим соответствующий span элемент
        const span = svg.nextElementSibling.querySelector('span');

        if (!isOrange) {
            // Изменяем цвет круга на оранжевый
            svg.querySelector('path').setAttribute('fill', '#FF642F');

            // Создаем новый элемент галки в центре круга
            const checkmarkPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
            checkmarkPath.setAttribute("d", "M15.1374 0.508564C15.5632 0.0823261 16.2539 0.0819809 16.6802 0.507793C17.0736 0.900851 17.1042 1.51963 16.7716 1.94775L16.6809 2.05057L5.77187 12.9705C5.37867 13.3641 4.75963 13.3945 4.33152 13.0617L4.22871 12.9709L0.955994 9.6982C0.529968 9.27218 0.529968 8.58146 0.955994 8.15543C1.34925 7.76218 1.96804 7.73193 2.396 8.06468L2.49877 8.15543L5.0001 10.6559L15.1374 0.508564Z");

            const checkmark = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            checkmark.setAttribute("width", "28");
            checkmark.setAttribute("height", "18");
            checkmark.setAttribute("viewBox", "0 0 17 14");
            checkmark.appendChild(checkmarkPath);

            // Добавляем галку в центр круга
            svg.appendChild(checkmark);

            // Добавляем класс для зачеркнутого текста
            if (span) {
                span.classList.add('checked');
            }

            // Устанавливаем флаг как true (круг оранжевый)
            isOrange = true;
        } else {
            // Изменяем цвет круга на черный
            svg.querySelector('path').setAttribute('fill', 'black');

            // Удаляем галку
            const checkmark = svg.querySelector('svg');
            if (checkmark) {
                svg.removeChild(checkmark);
            }

            // Удаляем класс для зачеркнутого текста
            if (span) {
                span.classList.remove('checked');
            }

            // Устанавливаем флаг как false (круг черный)
            isOrange = false;
        }
    });
});


   // Получаем элементы
   var modal = document.getElementById("commentModal");
   var btn = document.querySelector(".post-btn");
   var span = document.getElementsByClassName("close")[0];

   // Открываем модальное окно при клике на кнопку
   btn.onclick = function() {
       modal.style.display = "block";
   }

   // Закрываем модальное окно при клике на крестик
   span.onclick = function() {
       modal.style.display = "none";
   }

   // Закрываем модальное окно при клике вне окна
   window.onclick = function(event) {
       if (event.target == modal) {
           modal.style.display = "none";
       }
   }


   // === Показать Еще ===

    // Поиск кнопки "Показать еще"
    const showMoreButton = document.getElementById('show-more-button');
    // Поиск контейнера с карточками
    const comments = document.getElementById('comments');

    // Обработчик события нажатия на кнопку "Показать еще"
    showMoreButton.addEventListener('click', function(event) {
        event.preventDefault(); // Предотвращаем действие по умолчанию

        // Находим скрытые карточки
        const hiddenRecipes = comments.querySelectorAll('.comment.hidden');

        // Показываем следующие 12 скрытых карточек или меньше, если их меньше
        for (let i = 0; i < Math.min(hiddenRecipes.length, 3); i++) {
            hiddenRecipes[i].style.display = 'block'; // Устанавливаем display: block сразу
            setTimeout((recipe) => {
                recipe.classList.remove('hidden');
                recipe.classList.add('visible');
            }, i * 200, hiddenRecipes[i]); // Добавляем задержку для каждой карточки
        }

        // Если больше нет скрытых карточек, скрываем кнопку "Показать еще"
        if (hiddenRecipes.length <= 3) {
            showMoreButton.style.display = 'none';
        }
    });


    document.getElementById('heart-btn').addEventListener('click', function() {
        const heartPath = document.getElementById('heart-path');
        if (heartPath.getAttribute('fill') === 'red') {
            heartPath.setAttribute('fill', '#999');
            console.log("hello")
        } else {
            heartPath.setAttribute('fill', 'red');
        }
    });