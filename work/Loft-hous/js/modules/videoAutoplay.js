document.addEventListener('DOMContentLoaded', function() {
    const videoContainer = document.querySelector('.video__video');
    const youtubeIframe = document.getElementById('youtubeVideo');
    const videoImg = document.querySelector('.video__img');
    const playButton = document.querySelector('.video__video-play');

    // Изначально скрываем iframe
    youtubeIframe.style.display = "none";

    videoContainer.addEventListener('click', function() {
        if (videoImg && playButton && youtubeIframe) {
            // Скрываем изображение и кнопку воспроизведения
            videoImg.style.display = "none";
            playButton.style.display = "none";

            // Убираем затемняющий фон
            videoContainer.style.backgroundColor = 'transparent';

            // Скрываем изображение и кнопку воспроизведения
            youtubeIframe.style.display = "block";
            
            // Перезапускаем iframe, чтобы начать воспроизведение
            const newSrc = "https://rutube.ru/play/embed/00db12521b1a48c3c56dbcf64a0e42a5/?autoplay=1";
            youtubeIframe.src = newSrc;  // Устанавливаем новый URL с параметром autoplay

            // Можно попробовать сбросить URL, чтобы убедиться, что iframe обновится
            setTimeout(() => {
                youtubeIframe.src = ""; // Сбросить URL
                youtubeIframe.src = newSrc; // Установить новый URL
            }, 100);  // Задержка в 100 мс для перезапуска
        } else {
            console.error('Не удалось найти один или несколько элементов');
        }
    });
});
