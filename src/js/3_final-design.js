'use strict';

let dataCard = {};

const idLS = localStorage.getItem('idTicket');
fetch(`https://dev.adalab.es/api/info/${idLS}`)
    .then((response) => response.json())
    .then((info) => {
        dataCard = info.data;
        renderCard();
    });


function renderCard(){
    title.innerHTML = dataCard.field4;
    date.innerHTML = dataCard.field3;
    price.innerHTML = dataCard.field1;
    place.innerHTML = dataCard.field2;
    web.innerHTML = dataCard.field5;
    sponsor.innerHTML = dataCard.field6;
    profileImage.src = dataCard.photo;
    profileQr.src = dataCard.field7;

}
