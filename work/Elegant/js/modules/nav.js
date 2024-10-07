function menudown() {
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(dropdown => {
        const button = dropdown.querySelector('.dropbtn');
        const menu = dropdown.querySelector('ul');
        const items = menu.querySelectorAll('li');

        // Функция для показа меню
        const showMenu = () => {
            menu.classList.add('show');
            items.forEach((item, index) => {
                item.style.animationDelay = `${index * 0.15}s`;
                item.classList.add('fade-in');
            });
        };

        // Функция для скрытия меню
        const hideMenu = () => {
            menu.classList.remove('show');
            items.forEach((item) => {
                item.classList.remove('fade-in');
            });
        };

        // Показываем меню при наведении мыши на кнопку
        button.addEventListener('mouseenter', showMenu);
        // Скрываем меню при уходе мыши с элемента "dropdown"
        dropdown.addEventListener('mouseleave', hideMenu);
    });

    // Скрываем меню при клике вне элемента "dropdown"
    window.addEventListener('click', (event) => {
        dropdowns.forEach(dropdown => {
            if (!dropdown.contains(event.target)) {
                const menu = dropdown.querySelector('ul');
                const items = menu.querySelectorAll('li');
                menu.classList.remove('show');
                items.forEach((item) => {
                    item.classList.remove('fade-in');
                });
            }
        });
    });
}

export default menudown;