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
const preview = document.querySelector('.js-preview');


let dataCard = {};

const idLS = localStorage.getItem('idTicket');
fetch(`https://dev.adalab.es/api/info/${idLS}`)
    .then((response) => response.json())
    .then((info) => {
        dataCard = info.data;
        
        console.log(dataCard);
        renderCard();
    });

function selectTheme() {
    if (dataCard.field8 === 'gastronomy') {
        preview.classList.add('category__gastronomy');
    } else if (dataCard.field8 === 'music') {
        preview.classList.add('category__music');
    } else if (dataCard.field8 === 'cinema') {
        preview.classList.add('category__cinema');
    }
};

function renderCard(){
    title.innerHTML = dataCard.field4;
    date.innerHTML = dataCard.field3;
    price.innerHTML = dataCard.field1 + "€";
    place.innerHTML = dataCard.field2;
    web.innerHTML = dataCard.field5;
    sponsor.innerHTML = dataCard.field6;
    profileImage.src = dataCard.photo;
    profileQr.src = dataCard.field7;
    selectTheme();
}


