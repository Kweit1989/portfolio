const headerToggle = document.querySelector('.header__toggle');
const headerToggleBtn = document.querySelector('.header__toggle-btn');
const bodyBackground = document.querySelector('body');
const headerContent = document.querySelector('.header__content')
const headerRows = document.querySelectorAll('.header__leng')
const headerImg = document.querySelector('.header__img ')
const headerLinks = document.querySelector('.header__links')
const popup = document.getElementById('popup');
const portfolio = document.querySelector('.portfolio')
const portfolioCartImg =  document.querySelectorAll('.portfolio__cart-img')
const footerContacts = document.querySelector('.footer__contacts')
const footerContact = document.querySelectorAll('.footer__contact')
const footerCopiryte = document.querySelector('.footer__copiryte')


headerToggle.addEventListener('click', function(){
    headerToggle.classList.toggle('header__toggle-dark')
    headerToggleBtn.classList.toggle('header__toggle-btn-dark')
    bodyBackground.classList.toggle('body-dark')
    headerContent.classList.toggle('header__content-dark')
    headerImg.classList.toggle('header__img-dark')
    headerLinks.classList.toggle('header__links-dark')
    popup.classList.toggle('popup-dark')
    portfolio.classList.toggle('portfolio-dark')
    footerContacts.classList.toggle('footer__contacts-dark')
    footerCopiryte.classList.toggle('footer__copiryte-dark')

    headerRows.forEach(headerRow => {
        headerRow.classList.toggle('header__leng-dark')
    });
    portfolioCartImg.forEach(portfolioCartImg => {
        portfolioCartImg.classList.toggle('portfolio__cart-img-dark')
    })
    footerContact.forEach(footerContact => {
        footerContact.classList.toggle('footer__contact-dark')
    })
});


document.addEventListener('DOMContentLoaded', () => {
    const languages = document.querySelectorAll('.header__leng');
    

    const content = {
        html: 'HTML (HyperText Markup Language) — это основной язык разметки для создания веб-страниц. Он использует теги для структурирования контента, такого как текст, изображения и ссылки. HTML позволяет браузерам правильно отображать и форматировать веб-страницы.',
        css: 'CSS (Cascading Style Sheets) — это язык стилей, используемый для описания внешнего вида веб-страниц. Он позволяет задавать оформление элементов HTML, таких как цвет, шрифты и расположение на странице. CSS отделяет содержание страницы от её представления, улучшая удобство разработки и поддержку дизайна.',
        sass: 'SCSS (Sassy CSS) — это синтаксический сахар для CSS, который добавляет возможности, такие как вложенные правила, переменные и миксины. SCSS облегчает организацию и поддержку CSS-кода. Он компилируется в обычный CSS для использования в веб-проектах.',
        js: 'JavaScript (JS) — это язык программирования, используемый для создания динамичного и интерактивного контента на веб-страницах. JS позволяет управлять элементами HTML и CSS, реагировать на события и обмениваться данными с серверами. Это ключевой компонент современных веб-приложений.',
        gulp: 'Gulp — это инструмент автоматизации задач для веб-разработки. Он используется для выполнения повторяющихся задач, таких как минификация файлов, компиляция SCSS в CSS и перезагрузка браузера. Gulp помогает ускорить процесс разработки и улучшить рабочий процесс.',
        figma: 'Figma — это облачное приложение для дизайна интерфейсов и прототипирования. Оно позволяет дизайнерам создавать, редактировать и совместно работать над макетами в реальном времени. Figma поддерживает командную работу и обеспечивает плавный переход от дизайна к разработке.'
    };

    languages.forEach(language => {
        language.addEventListener('click', () => {
            const langClass = language.classList[1].split('__')[1];
            popup.textContent = content[langClass];
            popup.classList.add('show');
        });
    });

    // Optional: Add functionality to hide the popup when clicking outside of it
    document.addEventListener('click', (e) => {
        if (!popup.contains(e.target) && !Array.from(languages).includes(e.target)) {
            popup.classList.remove('show');
        }
    });
});