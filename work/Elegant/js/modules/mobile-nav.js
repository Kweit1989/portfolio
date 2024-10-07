function mobileNav() {
    // Select all mobile nav buttons
    const navBtns = document.querySelectorAll('.mobile-nav-button');
    const navIcons = document.querySelectorAll('.mobile-nav-button-icon');
    const navMobile = document.querySelector('.nav-mobile');

    navBtns.forEach((navBtn, index) => {
        navBtn.onclick = function () {
            navIcons.forEach(navIcon => navIcon.classList.toggle('active'));
            navMobile.classList.toggle('nav-mobile-active');
            document.body.classList.toggle('no-scroll')
        };
    });
}

export default mobileNav;
