'use strict';

const form = document.querySelector('.js-form');
const title = document.querySelector('.js-preview-title');
const date = document.querySelector('.js-preview-date');
const price = document.querySelector('.js-preview-price');
const place = document.querySelector('.js-preview-location');
const web = document.querySelector('.js-preview-web');
const sponsor = document.querySelector('.js-preview-sponsor');
const profileImage = document.querySelector('.js-image-preview');
const profileQr = document.querySelector('.js-qr-preview');
const urlImage = new URL ("https://as2.ftcdn.net/v2/jpg/03/76/79/93/1000_F_376799333_2tYezJPb63pR8TjeOaZtONCrlnmm7W60.jpg");
const urlQr = new URL ("https://upload.wikimedia.org/wikipedia/commons/d/d7/Commons_QR_code.png");


const dataCard = {
    field1: 'Festival del Humor', //titulo
    field2: 'Cercedilla', //Ubicación
    field3: '23 y 24 de Marzo', //Fechas
    field4: '30€', //Precio
    field5: 'www.adalab.com', //Web
    field6: 'Eventigo y La Madre de todos', //sponsor
    field7: urlQr, //qr
    photo: urlImage, //image

};

function renderCard(){
    title.innerHTML = dataCard.field1;
    date.innerHTML = dataCard.field3;
    price.innerHTML = dataCard.field4;
    place.innerHTML = dataCard.field2;
    web.innerHTML = dataCard.field5;
    sponsor.innerHTML = dataCard.field6;
    profileImage.src = dataCard.photo;
    profileQr.src = dataCard.field7;

}
renderCard()