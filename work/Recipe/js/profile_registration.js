document.addEventListener('DOMContentLoaded', function() {
    // Ждем, пока загрузится весь HTML контент страницы

    const form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const formData = new FormData(form);

        const fullname = formData.get('fullname') || 'Гость'; // Получаем значение поля fullname или "Гость", если оно пустое

        fetch('http://127.0.0.1:3000/register', {
            method: 'POST',
            body: formData
        })
        .then(response => {
            if (!response.ok) {
                return response.text().then(text => { throw new Error(text) });
            }
            return response.json();
        })
        .then(data => {
            showAlert(`${fullname}, ${data.message}`); // Используем имя пользователя в сообщении
        })
        .catch(error => {
            let errorMessage;
            try {
                const errorObj = JSON.parse(error.message);
                if (errorObj.message === "Фото профиля обязательно") {
                    errorMessage = `${fullname}, пожалуйста, загрузите фото профиля.`;
                } else {
                    errorMessage = errorObj.message;
                }
            } catch (e) {
                errorMessage = `${fullname}, произошла ошибка при регистрации.`;
            }
            showAlert(errorMessage); // Используем имя пользователя в сообщении об ошибке
            
            // Убираем вывод ошибки в консоль
            // console.error('Ошибка:', error);
        });
    });

    function showAlert(message) {
        const modal = document.getElementById('custom-alert');
        const alertMessage = document.getElementById('alert-message');
        const closeButton = document.querySelector('.close-button');

        alertMessage.textContent = message;
        modal.style.display = 'block';

        closeButton.onclick = function() {
            modal.style.display = 'none';
        };

        window.onclick = function(event) {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        };
    }

    // Обработка загрузки и обрезки изображения
    let cropper;
    const profilePhotoInput = document.getElementById('profile-photo');
    const cropperModal = document.getElementById('cropper-modal');
    const cropperImage = document.getElementById('cropper-image');
    const cropButton = document.getElementById('crop-button');
    const cancelButton = document.getElementById('cancel-button');

    profilePhotoInput.addEventListener('change', function(event) {
        // При выборе файла для загрузки изображения
        const files = event.target.files;
        if (files && files.length > 0) {
            const file = files[0];
            const reader = new FileReader();
            reader.onload = function(e) {
                cropperImage.src = e.target.result;
                cropperModal.style.display = 'block';
                if (cropper) {
                    cropper.destroy();
                }
                // Инициализируем Cropper для обрезки изображения
                cropper = new Cropper(cropperImage, {
                    aspectRatio: 1,
                    viewMode: 1,
                });
            };
            reader.readAsDataURL(file);
        }
    });

    cropButton.addEventListener('click', function() {
        // При клике на кнопку "Обрезать"
        const canvas = cropper.getCroppedCanvas();
        canvas.toBlob(function(blob) {
            const croppedImageUrl = URL.createObjectURL(blob);
            // Заменяем изображение профиля на обрезанное изображение
            document.getElementById('profile-photo-img').src = croppedImageUrl;
            // Создаем новый файл из обрезанного изображения
            const file = new File([blob], 'cropped.jpg', {type: 'image/jpeg'});
            const dataTransfer = new DataTransfer();
            dataTransfer.items.add(file);
            profilePhotoInput.files = dataTransfer.files;
            cropperModal.style.display = 'none'; // Скрываем модальное окно
        }, 'image/jpeg');
    });

    cancelButton.addEventListener('click', function() {
        // При клике на кнопку "Отмена" в модальном окне
        cropperModal.style.display = 'none'; // Скрываем модальное окно
    });

    // Добавляем обработчики событий фокуса и потери фокуса для input элементов
    const inputs = document.querySelectorAll('.section-profile-form input');
    inputs.forEach(input => {
        input.addEventListener('focus', function () {
            // При фокусе на поле ввода меняем стили иконки и текста
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
            // При потере фокуса возвращаем исходные стили иконки и текста
            const svgIcon = this.parentElement.querySelector('.svg-icon-profile svg');
            const svgPath = svgIcon.querySelector('path');
            svgPath.style.fill = '#505050'; // Возвращаем цвет иконки по умолчанию
            svgIcon.style.transform = 'scale(1)'; // Возвращаем размер иконки по умолчанию
            this.style.color = '#505050'; // Возвращаем цвет текста по умолчанию
        });
    });
});
