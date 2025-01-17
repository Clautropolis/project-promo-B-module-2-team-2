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
    profileImage.setAttribute("src", "");
    profileQr.setAttribute("src", "");
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
    optionTheme.value = '';
}

function resetShare() {
    errorMessage.classList.add('hidden');
    share2.classList.add('hidden');
    share1.classList.add('hidden');
}

function resetData() {
    data = {
        field1: 0, //Precio
        field2: '', //Ubicación
        field3: '', //Fechas
        field4: '', //Titulo
        field5: '', //Web
        field6: '', //sponsor
        field7: '', //qr
        field8: '', //clase
        photo: '', //image
    }
}

function handleClick(event) {
    event.preventDefault();
    resetValues();
    resetForm();
    resetImageClass();
    resetCategories();
    resetShare();
    resetData();
    localStorage.removeItem('idTicket');
};

resetButton.addEventListener('click', handleClick);