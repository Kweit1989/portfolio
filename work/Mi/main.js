document.addEventListener('DOMContentLoaded', function() {
    // Функция для бургера
    const mobileNavButton = document.querySelector('.mobile-nav-button');
    const mobileNavIcon = document.querySelector('.mobile-nav-button-icon');
    const mobileNavForm = document.querySelector('.header_menu');

    mobileNavButton.addEventListener('click', function() {
        mobileNavIcon.classList.toggle('active');
        mobileNavForm.classList.toggle('active');
    });

    // Функция для переключения темы и синхронизации кнопок
    const buttons = document.querySelectorAll('.section-header-btn-white');
    const buttonsBorder = document.querySelectorAll('.section-header-btn')


    buttons.forEach(button => {
        button.addEventListener('click', function() {
            // Изменяем текст кнопки
            buttons.forEach(btn => {
                if (btn.textContent === 'Белый') {
                    btn.textContent = 'Черный';
                } else {
                    btn.textContent = 'Белый';
                }
                btn.classList.toggle('section-header-btn-wight-right');
            });

            // Изменяем изображения и цвета
            const isWhiteTheme = document.body.classList.contains('toggle-color-body');
            buttons.forEach(btn => {
                btn.classList.toggle('section-header-btn-white-background', !isWhiteTheme);
                btn.classList.toggle('section-header-btn-white-white', isWhiteTheme);
            });

            const scooter = document.querySelector('.section-header-img-scooter');
            const scooterDown = document.querySelector('.scooter-down');
            const scooterWrapper = document.querySelector('.section-scooter-wrapper');
            const sliderCards = document.querySelectorAll('.section-slider-card');
            const sliderWrapperColorText = document.querySelectorAll('.section-slider-card-wrapper');
            const headerHeaderColor = document.querySelector('.section-header-header');
            const sectionHeaderText = document.querySelector('.section-header-text > p');
            const headerLogo = document.querySelector('.header-logo > img');
            const headerMenu = document.querySelector('.header_menu > ul');
            const sectionDescriptionHeader = document.querySelector('.section-description-header > h2');
            const sectionDescriptionRowText = document.querySelectorAll('.section-description-row');
            const sectionQuestionsRowP = document.querySelector('.section-questions-right')
            const sectionQuestionsLeft = document.querySelectorAll('.section-questions-left > p')
            const sectionScooterLeft = document.querySelector('.section-scooter-left > h2')
            const sectionScooterRight = document.querySelector('.section-scooter-right')
            const footerCopyright = document.querySelector('.footer-copyright-row')
            const body = document.body;

            if (isWhiteTheme) {
                scooter.src = './img/scooter_white.png';
                scooterDown.src = './img/scooter_down_white.png';
                headerHeaderColor.style.color = '#fff';
                sectionHeaderText.style.color = '#FF4C0D';
                headerLogo.src = './img/logo.png';
                headerMenu.style.color = '#fff';
                sectionDescriptionHeader.style.color = '#fff';
                sectionQuestionsRowP.style.color = '#fff';
                sectionScooterLeft.style.color = '#fff';
                sectionScooterRight.style.color = '#fff';
                footerCopyright.style.color = '#fff';
            } else {
                scooter.src = './img/scooter_black.png';
                scooterDown.src = './img/scooter_down_black.png';
                headerHeaderColor.style.color = '#FF4C0D';
                sectionHeaderText.style.color = '#000';
                headerLogo.src = './img/logo_orange.png';
                headerMenu.style.color = '#000';
                sectionDescriptionHeader.style.color = '#000';
                sectionQuestionsRowP.style.color = '#000';
                sectionScooterLeft.style.color = '#000';
                sectionScooterRight.style.color = '#000';
                footerCopyright.style.color = '#000';
            }

            // Добавляем/удаляем класс для изменения фона body
            body.classList.toggle('toggle-color-body');
            scooterWrapper.classList.toggle('section-scooter-wrapper-white');

            // Добавляем/удаляем класс для всех элементов с классом .section-slider-card
            sliderCards.forEach(card => {
                card.classList.toggle('section-slider-card-white');
            });
            sliderWrapperColorText.forEach(color => {
                color.classList.toggle('section-slider-card-wrapper-white');
            });
            buttons.forEach(btn => {
                btn.classList.toggle('section-header-btn-white-background', !isWhiteTheme);
                btn.classList.toggle('section-header-btn-white-white', isWhiteTheme);
            });
            sectionDescriptionRowText.forEach(link => {
                link.classList.toggle('section-description-row-white');
            });
            buttonsBorder.forEach(border => {
                border.classList.toggle('section-header-btn-border');
            })
            sectionQuestionsLeft.forEach(color => {
                color.classList.toggle('section-questions-left-white')
            })

            // Обновляем цвет активных ссылок
            updateActiveLinkColor();
        });
    });

    // Функция для активных ссылок
    const descriptionLinks = document.querySelectorAll('.section-description-row > a');
    descriptionLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            // Удаляем класс 'active' у всех ссылок
            descriptionLinks.forEach(link => link.classList.remove('active'));
            // Добавляем класс 'active' к кликнутой ссылке
            this.classList.add('active');
            // Изменяем цвет активной ссылки
            updateActiveLinkColor();
        });
    });

    // Функция для обновления цвета активных ссылок
    function updateActiveLinkColor() {
        const activeLinks = document.querySelectorAll('.section-description-row > a.active');
        activeLinks.forEach(link => {
            if (document.body.classList.contains('toggle-color-body')) {
                link.style.color = '#000';
            } else {
                link.style.color = '#fff';
            }
        });
    }

    // Функция для слайдера
    const sliderRow = document.querySelector('.section-slider-row');
    const btnLeft = document.querySelector('.section-slider-btn-left');
    const btnRight = document.querySelector('.section-slider-btn-right');
    const cards = document.querySelectorAll('.section-slider-card');
    const cardWidth = cards[0].offsetWidth;
    const gap = parseInt(getComputedStyle(sliderRow).columnGap);

    let currentIndex = 0;

    btnLeft.addEventListener('click', () => {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = cards.length - 1;
            sliderRow.scrollTo({
                left: (cardWidth + gap) * currentIndex,
                behavior: 'smooth'
            });
        } else {
            sliderRow.scrollBy({
                left: -(cardWidth + gap),
                behavior: 'smooth'
            });
        }
    });

    btnRight.addEventListener('click', () => {
        currentIndex++;
        if (currentIndex >= cards.length) {
            currentIndex = 0;
            sliderRow.scrollTo({
                left: 0,
                behavior: 'smooth'
            });
        } else {
            sliderRow.scrollBy({
                left: cardWidth + gap,
                behavior: 'smooth'
            });
        }
    });
});
