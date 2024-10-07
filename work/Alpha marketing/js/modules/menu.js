export function menuButton (){
    // Функция для бургера
// Находим элемент с классом "mobile-nav-button" (кнопка мобильной навигации)
const mobileNavButton = document.querySelector('.mobile-nav-button');
// Находим элемент с классом "mobile-nav-button-icon" (иконка мобильной навигации)
const mobileNavIcon = document.querySelector('.mobile-nav-button-icon');
// Находим элемент с классом "header-form-mobile" (форма мобильной навигации)
const mobileNavForm = document.querySelector('.nav__nav-list-mobile');

// Добавляем обработчик события "click" на кнопку мобильной навигации
mobileNavButton.addEventListener('click', function() {
    // Переключаем класс "active" на иконке мобильной навигации
    mobileNavIcon.classList.toggle('active');
    // Переключаем класс "active" на форме мобильной навигации
    mobileNavForm.classList.toggle('active');
});
}


export function scroll() {
    window.addEventListener('scroll', function() {
        const nav = document.querySelector('.nav');
        if (window.scrollY > 0) {
            nav.style.padding = '5px 20px';
            nav.style.background = 'rgba(29, 1, 65, 0.800)';
        } else {
            nav.style.padding = '16px 20px';
            nav.style.background = 'transparent';
        }
    });    
}



export function menuList (){
    document.addEventListener('DOMContentLoaded', function() {
        const navItems = document.querySelectorAll('.nav__nav-item');
    
        navItems.forEach(item => {
            const submenu = item.querySelector('ul');
    
            if (submenu) {
                // Открытие подменю при наведении
                item.addEventListener('mouseover', () => {
                    submenu.style.display = 'block';
                });
    
                // Закрытие подменю при уходе курсора с элемента меню
                item.addEventListener('mouseout', () => {
                    submenu.style.display = 'none';
                });
    
                // Открытие или закрытие подменю при клике
                item.addEventListener('click', (event) => {
                    // Останавливаем всплытие события, чтобы `mouseout` не закрыл подменю
                    event.stopPropagation();
    
                    if (submenu.style.display === 'block') {
                        submenu.style.display = 'none';
                    } else {
                        submenu.style.display = 'block';
                    }
                });
    
                // Закрытие подменю при клике вне его
                document.addEventListener('click', (event) => {
                    if (!item.contains(event.target)) {
                        submenu.style.display = 'none';
                    }
                });
            }
        });
    });    
}



