'use strict';

const data = {
    field1: 0, //titulo
    field2: '', //Ubicación
    field3: '', //Fechas
    field4: '', //Precio
    field5: '', //Web
    field6: '', //sponsor
    field7: '',
    photo: '',

};

const form = document.querySelector('.js-form');
const title = document.querySelector('.js-preview-title');
const date = document.querySelector('.js-preview-date');
const price = document.querySelector('.js-preview-price');
const place = document.querySelector('.js-preview-location');
const web = document.querySelector('.js-preview-web');
const sponsor = document.querySelector('.js-preview-sponsor');


function render () {
    
    title.innerHTML = data.field1;
    date.innerHTML = data.field3;
    price.innerHTML = data.field4;
    place.innerHTML = data.field2;
    web.innerHTML = data.field5;
    sponsor.innerHTML = data.field6;

};


function handleForm (event) {
    const id = event.target.id;
    const value = event.target.value;
    data [id] = value;
    
    render();

};

form.addEventListener('input', handleForm);

const radio1 = document.querySelector('.js-radio1');
const radio2 = document.querySelector('.js-radio2');
const radio3 = document.querySelector('.js-radio3');
const preview = document.querySelector('.js-preview');

const handleInputRadio1 = () => {
    preview.classList.add('category__gastronomy');
    preview.classList.remove('category__music', 'category__cinema');
};

const handleInputRadio2 = () => {
    preview.classList.add('category__music');
    preview.classList.remove('category__cinema', 'category__gastronomy');
};

const handleInputRadio3 = () => {
    preview.classList.add('category__cinema');
    preview.classList.remove('category__music', 'category__gastronomy');
};



radio1.addEventListener('input', handleInputRadio1);
radio2.addEventListener('input', handleInputRadio2);
radio3.addEventListener('input', handleInputRadio3);

