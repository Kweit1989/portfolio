document.querySelector('.btn-authorization').addEventListener('click', async (event) => {
    // Предотвращает выполнение стандартного действия браузера при нажатии на кнопку
    event.preventDefault();

    // Получает значения email и password из соответствующих полей ввода
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    // Отправляет POST запрос на сервер по адресу http://127.0.0.1:3000/login
    // с данными email и password в формате JSON
    const response = await fetch('http://127.0.0.1:3000/login', {
        method: 'POST', // Указывает, что это POST запрос
        headers: {
            'Content-Type': 'application/json' // Указывает тип содержимого - JSON
        },
        body: JSON.stringify({ email, password }) // Преобразует объект с данными в строку JSON
    });

    // Проверяет, успешен ли запрос (HTTP статус 200-299)
    if (response.ok) {
        // Преобразует ответ из JSON в объект JavaScript
        const result = await response.json();
        
        // Проверяет, содержит ли ответ объект с токеном
        if (result.token) {
            // Сохраняет токен в локальное хранилище браузера
            localStorage.setItem('token', result.token);
            alert('Вход выполнен!!!');

            // Перенаправляет пользователя на страницу профиля
            window.location.href = '/profile.html';
        } else {
            // Если токен отсутствует в ответе, выводит сообщение об ошибке
            alert('Токен не предоставлен');
        }
    } else {
        // Если запрос не успешен, получает текст ошибки из ответа
        const result = await response.text();
        
        // Проверяет, является ли ошибка связанной с неверными учетными данными
        if (result === 'Invalid credentials') {
            alert('Вы ввели неверный логин или пароль');
        } else {
            // Выводит любое другое сообщение об ошибке
            alert(result);
        }
    }
});
