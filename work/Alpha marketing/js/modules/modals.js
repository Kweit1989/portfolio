 // Получаем элементы для модальных окон
 export function modals (){
    const modalQuestion = document.getElementById('modal-question');
    const btnQuestion = document.querySelector('.header__button-question');
    const closeQuestion = document.querySelector('.modal-question__close');
   
    const buttons = document.querySelectorAll('.price-crm__card__btn');
    const modalOverlay = document.getElementById('modal-price');
    const closeModalButton = document.querySelector('.modal-price__close');
    const modalPriceOk = document.getElementById('modal-price__ok');
    const modalPriceCloseOk = document.querySelector('.modal-price__close__ok');
    const modalForm = document.querySelector('.modal-price__content');
   
    // Открытие модального окна "Вопрос"
    btnQuestion.onclick = function () {
        modalQuestion.style.display = 'block';
    }
   
    // Закрытие модального окна "Вопрос"
    closeQuestion.onclick = function () {
        modalQuestion.style.display = 'none';
    }
   
    // Закрытие модального окна "Вопрос" при клике на фон
    window.onclick = function (event) {
        if (event.target === modalQuestion) {
            modalQuestion.style.display = 'none';
        }
   
        // Закрытие модального окна "Стоимость подключения" при клике за его пределами
        if (event.target === modalOverlay) {
            modalOverlay.style.display = 'none';
        }
    }
   
    // Открытие модального окна "Стоимость подключения"
    buttons.forEach(button => {
        button.addEventListener('click', function () {
            modalOverlay.style.display = 'block';
        });
    });
   
    // Закрытие модального окна "Стоимость подключения"
    closeModalButton.addEventListener('click', function () {
        modalOverlay.style.display = 'none';
    });
   
    // Обработка отправки формы "Стоимость подключения"
    modalForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Предотвращаем перезагрузку страницы
   
        // Скрываем модальное окно с формой
        modalOverlay.style.display = 'none';
        // Показываем модальное окно с подтверждением
        modalPriceOk.style.display = 'block';
    });
   
    // Закрытие модального окна с подтверждением отправки формы
    modalPriceCloseOk.addEventListener('click', function () {
        modalPriceOk.style.display = 'none';
    });
   
}
