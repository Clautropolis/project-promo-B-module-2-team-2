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



let dataCard = {};

const idLS = localStorage.getItem('idTicket');
fetch(`https://dev.adalab.es/api/info/${idLS}`)
    .then((response) => response.json())
    .then((info) => {
        dataCard = info.data;
        
        console.log(dataCard);
        renderCard();
    });


function renderCard(){
    title.innerHTML = dataCard.field4;
    date.innerHTML = dataCard.field3;
    price.innerHTML = dataCard.field1 + "€";
    place.innerHTML = dataCard.field2;
    web.innerHTML = dataCard.field5;
    sponsor.innerHTML = dataCard.field6;
    profileImage.src = dataCard.photo;
    profileQr.src = dataCard.field7;

}


