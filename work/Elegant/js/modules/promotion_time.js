// const endDate = new Date();
// endDate.setDate(endDate.getDate() + 3) // получаем +3 дня от текущей даты

const endDate = new Date('Oct 17, 2025, 00:0:01');

function updateTimer() {
    const now = new Date();
    const timeDifference = endDate - now;

    if (timeDifference <= 0){
         // Обновление текста элемента с классом 'day__value' текущим днем
        document.querySelector('.day__value').textContent = '0';
        // Обновление текста элемента с классом 'hour__value' текущим часом
        document.querySelector('.hour__value').textContent = '0';
        // Обновление текста элемента с классом 'minute__value' текущей минутой
        document.querySelector('.minute__value').textContent = '0';
        // Обновление текста элемента с классом 'second__value' текущей секундой
        document.querySelector('.second__value').textContent = '0';
        return
    }
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

   // Обновление текста элемента с классом 'day__value' текущим днем
   document.querySelector('.day__value').textContent = days < 10 ? '0' + days : days;
   // Обновление текста элемента с классом 'hour__value' текущим часом
   document.querySelector('.hour__value').textContent = hours < 10 ? '0' + hours : hours;
   // Обновление текста элемента с классом 'minute__value' текущей минутой
   document.querySelector('.minute__value').textContent = minutes < 10 ? '0' + minutes : minutes;
   // Обновление текста элемента с классом 'second__value' текущей секундой
   document.querySelector('.second__value').textContent = seconds < 10 ? '0' + seconds : seconds;
}


setInterval(updateTimer, 1000);
updateTimer(); 


export default updateTimer;