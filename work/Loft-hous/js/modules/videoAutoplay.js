export function videoAutoplay() {
    // Ждем полной загрузки содержимого документа перед запуском скрипта
    document.addEventListener('DOMContentLoaded', function() {
        // Получаем ссылку на контейнер видео
        const videoContainer = document.querySelector('.video__video');
        
        // Получаем iframe YouTube по его ID
        const youtubeIframe = document.getElementById('youtubeVideo');
        
        // Получаем изображение видео по его классу
        const videoImg = document.querySelector('.video__img');
        
        // Получаем кнопку воспроизведения по ее классу
        const playButton = document.querySelector('.video__video-play');
        
        // Изначально скрываем iframe, чтобы он не отображался до клика
        youtubeIframe.style.display = "none";

        // Добавляем обработчик событий для клика по контейнеру видео
        videoContainer.addEventListener('click', function() {
            // Проверяем, что все необходимые элементы найдены
            if (videoImg && playButton && youtubeIframe) {
                // Скрываем изображение и кнопку воспроизведения после клика
                videoImg.style.display = "none";
                playButton.style.display = "none";

                // Добавляем класс к контейнеру, который изменяет z-index псевдоэлемента ::before
                videoContainer.classList.add('video__video--play');

                // Формируем новый URL для iframe с параметром autoplay=1, чтобы видео начинало воспроизведение автоматически
                const autoplayUrl = youtubeIframe.src + "?autoplay=1";
                youtubeIframe.src = autoplayUrl;

                // Показываем iframe, чтобы начать воспроизведение видео
                youtubeIframe.style.display = "block";
            } else {
                // Если один из элементов не найден, выводим ошибку в консоль
                console.error('Не удалось найти один или несколько элементов');
            }
        });
    });
}
