// phoneMask.js
import {mask} from './phoneMask/mask.js'
export function phoneMask() {
    mask('.cta__form-number');

    document.addEventListener('DOMContentLoaded', () => {
        const phoneInputs = document.querySelectorAll('.cta__form-number');

        phoneInputs.forEach((input) => {
            input.addEventListener('input', () => {
                if (input.value === '+') input.value = '';
            });

            input.addEventListener('blur', () => {
                if (input.value === '+') input.value = '';
            });
        });
    });
}
