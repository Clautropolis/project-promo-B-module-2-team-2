'use strict';

let data = {
    field1: 0, //Precio
    field2: '', //Ubicación
    field3: '', //Fechas
    field4: '', //Titulo
    field5: '', //Web
    field6: '', //sponsor
    field7: '', //qr
    field8: '', //clase
    photo: '', //image

};

const form = document.querySelector('.js-form');
const title = document.querySelector('.js-preview-title');
const date = document.querySelector('.js-preview-date');
const price = document.querySelector('.js-preview-price');
const place = document.querySelector('.js-preview-location');
const web = document.querySelector('.js-preview-web');
const sponsor = document.querySelector('.js-preview-sponsor');



function render () {
    
    title.innerHTML = data.field4;
    date.innerHTML = data.field3;
    price.innerHTML = data.field1 + "€";
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


const preview = document.querySelector('.js-preview');
const optionTheme = document.querySelector('.js-options');

function handleInputTheme() {
    if (optionTheme.value === 'gastronomy') {
        preview.classList.add('category__gastronomy');
        preview.classList.remove('category__music', 'category__cinema');
    } else if (optionTheme.value === 'music') {
        preview.classList.add('category__music');
        preview.classList.remove('category__cinema', 'category__gastronomy');
    } else if (optionTheme.value === 'cinema') {
        preview.classList.add('category__cinema');
        preview.classList.remove('category__music', 'category__gastronomy');
    }
    data['field8'] = optionTheme.value;
};



optionTheme.addEventListener('input', handleInputTheme);


const titleDesign = document.querySelector('.js-titleDesign');
const design = document.querySelector('.js-design');
const titleFillin = document.querySelector('.js-titleFillin');
const fillin = document.querySelector('.js-fillin');
const titleShare = document.querySelector('.js-titleShare');
const share1 = document.querySelector('.js-share1');
const share2 = document.querySelector('.js-share2');

function collapsedDesign() {
    design.classList.toggle('hidden');

}

function collapsedFillin() {
    fillin.classList.toggle('hidden');
}

function collapsedShare() {
    share1.classList.toggle('hidden');
    share2.classList.toggle('hidden');
}



titleDesign.addEventListener('click', collapsedDesign);
titleFillin.addEventListener('click', collapsedFillin);
titleShare.addEventListener('click', collapsedShare);