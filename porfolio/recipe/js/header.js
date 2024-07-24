// MENU
// Ждем, пока весь HTML будет загружен
document.addEventListener('DOMContentLoaded', () => {
    // Находим все элементы с классом "dropdown"
    const dropdowns = document.querySelectorAll('.dropdown');

    // Проходим по каждому найденному элементу с классом "dropdown"
    dropdowns.forEach(dropdown => {
        // Находим кнопку внутри текущего элемента "dropdown"
        const button = dropdown.querySelector('.dropbtn');
        // Находим меню (контент) внутри текущего элемента "dropdown"
        const menu = dropdown.querySelector('.dropdown-content');
        // Находим все элементы списка внутри меню
        const menuItems = dropdown.querySelectorAll('.dropdown-content li');

        // Функция для показа меню
        const showMenu = () => {
            // Добавляем класс "show" к меню, чтобы сделать его видимым
            menu.classList.add('show');
            // С задержкой показываем каждый элемент списка
            setTimeout(() => {
                menuItems.forEach((item, index) => {
                    setTimeout(() => {
                        // Добавляем класс "show" к элементу списка
                        item.classList.add('show');
                    }, index * 200); // задержка появления каждого элемента
                });
            }, 100);
        };

        // Функция для скрытия меню
        const hideMenu = () => {
            // Убираем класс "show" у меню, чтобы скрыть его
            menu.classList.remove('show');
            // Убираем класс "show" у всех элементов списка
            menuItems.forEach((item) => {
                item.classList.remove('show');
            });
        };

        // Показываем меню при наведении мыши на кнопку
        button.addEventListener('mouseenter', showMenu);
        // Скрываем меню при уходе мыши с элемента "dropdown"
        dropdown.addEventListener('mouseleave', hideMenu);
        // Скрываем меню при уходе мыши с меню
        menu.addEventListener('mouseleave', hideMenu);

        // Убираем обработчик клика на элементы списка
        menuItems.forEach(item => {
            item.addEventListener('click', () => {
                hideMenu();
            });
        });

        // Скрываем меню при клике вне элемента "dropdown"
        window.addEventListener('click', (event) => {
            if (!dropdown.contains(event.target)) {
                hideMenu();
            }
        });
    });
});



// Функция для бургера
// Находим элемент с классом "mobile-nav-button" (кнопка мобильной навигации)
const mobileNavButton = document.querySelector('.mobile-nav-button');
// Находим элемент с классом "mobile-nav-button-icon" (иконка мобильной навигации)
const mobileNavIcon = document.querySelector('.mobile-nav-button-icon');
// Находим элемент с классом "header-form-mobile" (форма мобильной навигации)
const mobileNavForm = document.querySelector('.header-menu-mobile');

// Добавляем обработчик события "click" на кнопку мобильной навигации
mobileNavButton.addEventListener('click', function() {
    // Переключаем класс "active" на иконке мобильной навигации
    mobileNavIcon.classList.toggle('active');
    // Переключаем класс "active" на форме мобильной навигации
    mobileNavForm.classList.toggle('active');
});





