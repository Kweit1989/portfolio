// Categories постипенное появление карточек
// Ждем, пока весь HTML будет загружен
document.addEventListener("DOMContentLoaded", function() {
    // Находим все элементы с классом "categories-cart"
    const cards = document.querySelectorAll('.categories-cart');

    // Проходим по каждой найденной карточке
    cards.forEach((card, index) => {
        // Задержка для появления каждой карточки, увеличивая задержку с каждой итерацией
        setTimeout(() => {
            // Добавляем класс "show", чтобы сделать карточку видимой
            card.classList.add('show');
        }, index * 300); // 300 мс задержка между карточками
    });
});
