// mobileMenu.js
export function mobileMenu() {
    const mobileNavButton = document.querySelector('.mobile-nav-button');
    const mobileNavButtonIcon = document.querySelector('.mobile-nav-button-icon');
    const headerLogNav = document.querySelector('.header__log-nav');

    mobileNavButton.addEventListener('click', function() {
        mobileNavButtonIcon.classList.toggle('icon-active');
        headerLogNav.classList.toggle('header__log-nav-active');
        document.body.classList.toggle('no-scroll');
    });
}
