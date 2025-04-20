// Video 
const videoBtnImg = document.querySelector('.play-button-img');
const videoOverlay = document.querySelector('.section-description-video-overlay');
const videoFile = document.querySelector('#video-description');
const videoContainer = document.querySelector('.section-description-video');

// Обработчик нажатия на контейнер с видео
videoContainer.addEventListener('click', function(event) {
    // Предотвращаем запуск события, если оно происходит от элемента управления
    if (event.target === videoFile || event.target.tagName === 'SOURCE') {
        return;
    }
    if (videoFile.paused) {
        videoFile.play();
        videoBtnImg.src = "./img/description/section_description_main/pause.png";
        videoOverlay.classList.add('hidden');
    } else {
        videoFile.pause();
        videoBtnImg.src = "./img/description/section_description_main/play.png";
        videoOverlay.classList.remove('hidden');
    }
});

// Обработчик наведения мыши на контейнер с видео
videoContainer.addEventListener('mouseenter', function() {
    videoOverlay.classList.remove('hidden');
});

// Обработчик вывода мыши из контейнера с видео
videoContainer.addEventListener('mouseleave', function() {
    if (videoFile.paused) {
        videoOverlay.classList.remove('hidden');
    } else {
        videoOverlay.classList.add('hidden');
    }
});

// Обработчик события паузы видео
videoFile.addEventListener('pause', function() {
    videoOverlay.classList.remove('hidden');
    videoBtnImg.src = "./img/description/section_description_main/play.png";
});

// Обработчик события воспроизведения видео
videoFile.addEventListener('play', function() {
    videoOverlay.classList.add('hidden');
    videoBtnImg.src = "./img/description/section_description_main/pause.png";
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

