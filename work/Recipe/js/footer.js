// FOOTER
// Ждем, пока весь HTML будет загружен
document.addEventListener('DOMContentLoaded', function() {
    // Находим все элементы с классом "footer-menu-toggle"
    const toggles = document.querySelectorAll('.footer-menu-toggle');
    // Находим все элементы с классом "footer-menu-content"
    const menuContents = document.querySelectorAll('.footer-menu-content');

    // Функция для переключения видимости меню
    function toggleMenu() {
        // Получаем следующий элемент (контент меню) после текущего элемента (тоггл)
        const content = this.nextElementSibling;
        // Проверяем, установлена ли у контента высота
        if (content.style.maxHeight) {
            // Если установлена, убираем высоту (скрываем контент)
            content.style.maxHeight = null;
        } else {
            // Если не установлена, задаем высоту контента, чтобы он стал видимым
            content.style.maxHeight = content.scrollHeight + "px";
        }
    }

    // Функция для обновления текста тогглов в зависимости от ширины окна
    function updateToggleText() {
        // Если ширина окна меньше или равна 800 пикселей
        if (window.innerWidth <= 800) {
            // Проходим по всем элементам контента меню
            menuContents.forEach(content => {
                // Убираем высоту, чтобы скрыть контейнеры
                content.style.maxHeight = null;
            });
            // Проходим по всем тогглам
            toggles.forEach(toggle => {
                // Добавляем событие клика для тоггла
                toggle.addEventListener('click', toggleMenu);
            });
        } else {
            // Если ширина окна больше 800 пикселей
            // Проходим по всем элементам контента меню
            menuContents.forEach(content => {
                // Устанавливаем высоту контента, чтобы показать контейнеры
                content.style.maxHeight = content.scrollHeight + "px";
            });
            // Проходим по всем тогглам
            toggles.forEach(toggle => {
                // Убираем событие клика для тоггла
                toggle.removeEventListener('click', toggleMenu);
            });
        }
    }

    // Добавляем событие изменения размера окна, чтобы обновлять текст тогглов
    window.addEventListener('resize', updateToggleText);

    // Вызываем функцию обновления текста тогглов при загрузке страницы
    updateToggleText();
});
