document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector(".four-row");
    const cards = document.querySelectorAll(".four-card");
    const totalCards = cards.length;
    const cardsInViewport = 3;
    let currentIndex = cardsInViewport;

    // Клонирование первых и последних карточек для зацикливания
    for (let i = 0; i < cardsInViewport; i++) {
        const cloneFirst = cards[i].cloneNode(true);
        const cloneLast = cards[totalCards - 1 - i].cloneNode(true);
        carousel.appendChild(cloneFirst);
        carousel.insertBefore(cloneLast, cards[0]);
    }

    const allCards = document.querySelectorAll(".four-card");
    const newTotalCards = allCards.length;

    function updateCounter() {
        const visibleIndex = currentIndex - cardsInViewport;
        let counter;
        if (window.innerWidth <= 830) {
            counter = document.querySelector(".four-header-btn-mobile .four-counter");
        } else {
            counter = document.querySelector(".four-counter");
        }
        counter.textContent = `${(visibleIndex % totalCards + totalCards) % totalCards + 1}/${totalCards}`;
    }

    function showCards(index, transition = true) {
        const cardWidth = window.innerWidth <= 830 ? 335 : 394; // Выбираем ширину карточки в зависимости от ширины экрана
        const offset = -index * (cardWidth + 20);
        
        if (transition) {
            carousel.style.transition = 'transform 0.5s ease-in-out';
        } else {
            carousel.style.transition = 'none';
        }
        
        carousel.style.transform = `translateX(${offset}px)`;
    }

    function handleTransitionEnd() {
        if (currentIndex >= newTotalCards - cardsInViewport) {
            currentIndex = cardsInViewport;
            showCards(currentIndex, false);
        } else if (currentIndex < cardsInViewport) {
            currentIndex = newTotalCards - cardsInViewport * 2;
            showCards(currentIndex, false);
        }
    }

    carousel.addEventListener('transitionend', handleTransitionEnd);

    showCards(currentIndex);
    updateCounter();

    function autoplayCarousel() {
        currentIndex++;
        showCards(currentIndex);
        updateCounter();
    }

    let intervalId = setInterval(autoplayCarousel, 4000);

    carousel.addEventListener("mouseenter", function() {
        clearInterval(intervalId);
    });

    carousel.addEventListener("mouseleave", function() {
        intervalId = setInterval(autoplayCarousel, 4000);
    });

    const prevBtn = document.querySelector(".four-btn-left");
    const nextBtn = document.querySelector(".four-btn-right");

    // Обработчик для кнопки влево
    prevBtn.addEventListener("click", function() {
        currentIndex--;
        showCards(currentIndex);
        updateCounter();
    });

    // Обработчик для кнопки вправо
    nextBtn.addEventListener("click", function() {
        currentIndex++;
        showCards(currentIndex);
        updateCounter();
    });

    // Добавляем обработчики для мобильной версии
    const mobilePrevBtn = document.querySelector(".four-btn-left-mobile");
    const mobileNextBtn = document.querySelector(".four-btn-right-mobile");

    mobilePrevBtn.addEventListener("click", function() {
        currentIndex--;
        showCards(currentIndex);
        updateCounter();
    });

    mobileNextBtn.addEventListener("click", function() {
        currentIndex++;
        showCards(currentIndex);
        updateCounter();
    });

    // Обновляем счетчик при изменении размера экрана
    window.addEventListener("resize", function() {
        updateCounter();
    });
});



document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.three-card-mobile');
    const btnLeft = document.getElementById('three-btn-left');
    const btnRight = document.getElementById('three-btn-right');
    const spans = document.querySelectorAll('.three-btn-mobile > span');
    let currentIndex = 0;

    const showCard = (index) => {
        cards.forEach((card, i) => {
            card.classList.toggle('active', i === index);
        });
        updateSpans(index);
    };

    const updateSpans = (index) => {
        spans.forEach((span, i) => {
            span.classList.toggle('active', i === index);
        });
    };

    btnLeft.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            showCard(currentIndex);
        }
    });

    btnRight.addEventListener('click', () => {
        if (currentIndex < cards.length - 1) {
            currentIndex++;
            showCard(currentIndex);
        }
    });

    // Изначально показываем первый элемент и активируем первый span
    showCard(currentIndex);
});

