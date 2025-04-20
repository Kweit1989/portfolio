// Объединенный скрипт с описанием

document.addEventListener('DOMContentLoaded', () => {
    // === Рейтинг (звезды) секция ===
    
    // Находим все элементы с классом "super-delicious-cart"
    const ratingCards = document.querySelectorAll('.super-delicious-cart');

    // Проходимся по каждому элементу с классом "super-delicious-cart"
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


    
    // === Слайдер в section_recipe_day ===

    // Находим все элементы с классом "recipe-day-color"
    const slides = document.querySelectorAll('.recipe-day-color');
    // Находим элемент с классом "recipe-day-wrapper"
    const wrapper = document.querySelector('.recipe-day-wrapper');
    // Находим кнопки для переключения слайдов
    const nextButton = document.querySelector('.arrow-right');
    const prevButton = document.querySelector('.arrow-left');
    // Устанавливаем начальный индекс текущего слайда
    let currentIndex = 0;
    // Определяем общее количество слайдов
    const totalSlides = slides.length;

    // Устанавливаем интервал для автоматического переключения слайдов
    let slideInterval = setInterval(nextSlide, 3000);

    // Функция для отображения слайда по индексу
    function showSlide(index) {
        // Перемещаем wrapper, чтобы показать нужный слайд
        wrapper.style.transform = `translateX(-${index * 100}%)`;
    }

    // Функция для перехода к следующему слайду
    function nextSlide() {
        // Увеличиваем индекс текущего слайда, циклично возвращаясь к первому
        currentIndex = (currentIndex + 1) % totalSlides;
        showSlide(currentIndex);
    }

    // Функция для перехода к предыдущему слайду
    function prevSlide() {
        // Уменьшаем индекс текущего слайда, циклично возвращаясь к последнему
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        showSlide(currentIndex);
    }

    // Функция для сброса интервала автоматического переключения слайдов
    function resetInterval() {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, 3000);
    }

    // Добавляем обработчик события клика на кнопку "следующий слайд"
    nextButton.addEventListener('click', () => {
        nextSlide();
        resetInterval();
    });

    // Добавляем обработчик события клика на кнопку "предыдущий слайд"
    prevButton.addEventListener('click', () => {
        prevSlide();
        resetInterval();
    });

    // Добавляем обработчик события наведения курсора на область слайдера
    wrapper.addEventListener('mouseenter', () => {
        clearInterval(slideInterval);
    });

    // Добавляем обработчик события ухода курсора с области слайдера
    wrapper.addEventListener('mouseleave', () => {
        resetInterval();
    });



    // === Показать Еще ===

    // Поиск кнопки "Показать еще"
    const showMoreButton = document.getElementById('show-more-button');
    // Поиск контейнера с карточками
    const recipeContainer = document.getElementById('recipe-container');

    // Обработчик события нажатия на кнопку "Показать еще"
    showMoreButton.addEventListener('click', function(event) {
        event.preventDefault(); // Предотвращаем действие по умолчанию

        // Находим скрытые карточки
        const hiddenRecipes = recipeContainer.querySelectorAll('.latest-recipes-cart.hidden');

        // Показываем следующие 12 скрытых карточек или меньше, если их меньше
        for (let i = 0; i < Math.min(hiddenRecipes.length, 12); i++) {
            hiddenRecipes[i].style.display = 'block'; // Устанавливаем display: block сразу
            setTimeout((recipe) => {
                recipe.classList.remove('hidden');
                recipe.classList.add('visible');
            }, i * 100, hiddenRecipes[i]); // Добавляем задержку для каждой карточки
        }

        // Если больше нет скрытых карточек, скрываем кнопку "Показать еще"
        if (hiddenRecipes.length <= 12) {
            showMoreButton.style.display = 'none';
        }
    });
});

