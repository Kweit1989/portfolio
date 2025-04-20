// Добавляем слушатель события 'DOMContentLoaded' для выполнения кода после полной загрузки DOM
document.addEventListener('DOMContentLoaded', function () {
    // Получаем токен из localStorage
    const token = localStorage.getItem('token');
    // Получаем элемент input для загрузки фото профиля
    const profilePhotoInput = document.getElementById('profile-photo');
    // Получаем элемент модального окна для обрезки фото
    const cropperModal = document.getElementById('cropper-modal');
    // Получаем элемент изображения, который будет обрезаться
    const cropperImage = document.getElementById('cropper-image');
    // Получаем кнопку для подтверждения обрезки
    const cropButton = document.getElementById('crop-button');
    // Получаем кнопку для отмены обрезки
    const cancelButton = document.getElementById('cancel-button');
    // Получаем элемент изображения профиля
    const profilePhotoImg = document.getElementById('profile-photo-img');
    // Переменная для хранения экземпляра Cropper
    let cropper;

    // Асинхронная функция для загрузки данных пользователя
    async function loadUserData() {
        if (token) { // Проверяем наличие токена
            try {
                // Делаем запрос на получение данных пользователя
                const userDataResponse = await fetch('http://127.0.0.1:3000/userData', {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token}` // Добавляем токен в заголовки запроса
                    }
                });

                if (userDataResponse.ok) { // Проверяем успешность запроса
                    const userData = await userDataResponse.json();
                    // Устанавливаем значения полей с данными пользователя
                    document.getElementById('fullname').value = userData.fullname;
                    document.getElementById('email').value = userData.email;
                    if (userData.profilePhoto) {
                        profilePhotoImg.src = userData.profilePhoto;
                    }
                } else {
                    alert('Не удалось получить данные пользователя');
                }
            } catch (error) {
                console.error('Ошибка при получении данных пользователя:', error);
                alert('Произошла ошибка при получении данных пользователя');
            }
        } else {
            alert('Токен не найден');
            window.location.href = '/profile_registration.html'; // Перенаправление на страницу регистрации
        }
    }

    // Добавляем слушатель события изменения фото профиля
    profilePhotoInput.addEventListener('change', function (event) {
        const file = event.target.files[0];
        if (file) { // Проверяем наличие загруженного файла
            const reader = new FileReader();
            reader.onload = function (e) {
                // Устанавливаем загруженное изображение в модальное окно
                cropperImage.src = e.target.result;
                cropperModal.style.display = 'block'; // Отображаем модальное окно
                if (cropper) {
                    cropper.destroy(); // Уничтожаем предыдущий экземпляр Cropper, если он существует
                }
                // Создаем новый экземпляр Cropper
                cropper = new Cropper(cropperImage, {
                    aspectRatio: 1, // Устанавливаем соотношение сторон
                    viewMode: 1,
                    autoCropArea: 1,
                    movable: false,
                    scalable: false,
                    zoomable: false,
                    rotatable: false
                });
            };
            reader.readAsDataURL(file); // Читаем файл как Data URL
        }
    });

    // Добавляем слушатель события клика на кнопку обрезки
    cropButton.addEventListener('click', async function () {
        if (cropper) { // Проверяем наличие экземпляра Cropper
            const canvas = cropper.getCroppedCanvas();
            const dataURL = canvas.toDataURL(); // Получаем обрезанное изображение как Data URL
            profilePhotoImg.src = dataURL; // Устанавливаем обрезанное изображение в элемент профиля
            cropperModal.style.display = 'none'; // Скрываем модальное окно
            cropper.destroy(); // Уничтожаем экземпляр Cropper
            cropper = null;

            const blob = await new Promise(resolve => canvas.toBlob(resolve)); // Преобразуем Canvas в Blob
            const formData = new FormData();
            formData.append('profile-photo', blob, 'profile-photo.png'); // Добавляем Blob в FormData

            try {
                // Делаем запрос на сервер для загрузки нового фото профиля
                const response = await fetch('http://127.0.0.1:3000/uploadProfilePhoto', {
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${token}` // Добавляем токен в заголовки запроса
                    },
                    body: formData
                });

                if (response.ok) { // Проверяем успешность запроса
                    const result = await response.json();
                    profilePhotoImg.src = result.profilePhoto; // Обновляем фото профиля
                    alert('Фото профиля обновлено');
                } else {
                    alert('Не удалось загрузить фото профиля');
                }
            } catch (error) {
                console.error('Ошибка при загрузке фото профиля:', error);
                alert('Произошла ошибка при загрузке фото профиля');
            }
        }
    });

    // Добавляем слушатель события клика на кнопку отмены обрезки
    cancelButton.addEventListener('click', function () {
        cropperModal.style.display = 'none'; // Скрываем модальное окно
        if (cropper) {
            cropper.destroy(); // Уничтожаем экземпляр Cropper
            cropper = null;
        }
        profilePhotoInput.value = ''; // Очищаем input для загрузки фото
    });

    // Добавляем слушатель события клика на кнопку удаления фото профиля
    document.getElementById('delete-photo-btn').addEventListener('click', async (event) => {
        event.preventDefault(); // Предотвращаем стандартное действие кнопки
        try {
            // Делаем запрос на сервер для удаления фото профиля
            const response = await fetch('http://127.0.0.1:3000/deleteProfilePhoto', {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${token}` // Добавляем токен в заголовки запроса
                }
            });

            if (response.ok) { // Проверяем успешность запроса
                profilePhotoImg.src = './img/profile/avatar.jpg'; // Устанавливаем изображение по умолчанию
                alert('Фото профиля удалено');
            } else {
                alert('Не удалось удалить фото профиля');
            }
        } catch (error) {
            console.error('Ошибка при удалении фото профиля:', error);
            alert('Произошла ошибка при удалении фото профиля');
        }
    });

    // Добавляем слушатель события клика на кнопку выхода из профиля
    document.getElementById('sign-out-btn').addEventListener('click', function () {
        localStorage.removeItem('token'); // Удаляем токен из localStorage
        document.querySelector('.section-profile-form').reset(); // Сбрасываем форму профиля
        profilePhotoImg.src = './img/profile/avatar.jpg'; // Устанавливаем изображение по умолчанию
        window.location.href = 'profile.html'; // Перенаправляем на страницу профиля
    });

    // Добавляем обработчики событий фокуса и потери фокуса для input элементов
    const inputs = document.querySelectorAll('.section-profile-form input');

    inputs.forEach(input => {
        input.addEventListener('focus', function () {
            const svgIcon = this.parentElement.querySelector('.svg-icon-profile svg');
            const svgPath = svgIcon.querySelector('path');

            svgPath.style.transition = 'fill 0.3s ease, transform 0.3s ease';
            svgPath.style.fill = '#FF642F'; // Изменяем цвет иконки на оранжевый
            svgIcon.style.transition = 'transform 0.3s ease';
            svgIcon.style.transform = 'scale(1.1)'; // Увеличиваем иконку

            this.style.transition = 'color 0.3s ease';
            this.style.color = '#FF642F'; // Изменяем цвет текста на оранжевый
        });

        input.addEventListener('blur', function () {
            const svgIcon = this.parentElement.querySelector('.svg-icon-profile svg');
            const svgPath = svgIcon.querySelector('path');

            svgPath.style.fill = '#505050'; // Возвращаем цвет иконки по умолчанию
            svgIcon.style.transform = 'scale(1)'; // Возвращаем размер иконки по умолчанию

            this.style.color = '#505050'; // Возвращаем цвет текста по умолчанию
        });
    });

    // Загружаем данные пользователя при загрузке страницы
    loadUserData();
});
