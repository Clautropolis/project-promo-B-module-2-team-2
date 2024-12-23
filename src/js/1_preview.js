'use strict';

const resetButton = document.querySelector('.js-reset');
const inputsForm = document.querySelectorAll('.js-inputs');

function resetValues() {
    title.innerHTML = '';
    date.innerHTML = '';
    price.innerHTML = '';
    place.innerHTML = '';
    web.innerHTML = '';
    sponsor.innerHTML = '';
};

function resetForm() {
    for (const input of inputsForm) {
        input.value = '';
    }
}

function resetImageClass() {
    preview.classList.add('category');
    preview.classList.remove('category__music', 'category__cinema', 'category__gastronomy');
};

function resetCategories() {
    radio1.checked = false;
    radio2.checked = false;
    radio3.checked = false;
}

function handleClick(event) {
    event.preventDefault();
    resetValues();
    resetForm();
    resetImageClass();
    resetCategories();
};

resetButton.addEventListener('click', handleClick);