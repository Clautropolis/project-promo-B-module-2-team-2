'use strict';

const fr = new FileReader();
const frQr = new FileReader();
const imageField = document.querySelector('.js-image');
const qrField = document.querySelector('.js-qr');
const profileImage = document.querySelector('.js-image-preview');
const profileQr = document.querySelector('.js-qr-preview');


/**
 * Recoge el archivo añadido al campo de tipo "file"
 * y lo carga en nuestro objeto FileReader para que 
 * lo convierta a algo con lo que podamos trabajar.
 * Añade un listener al FR para que ejecute una función
 * al tener los datos listos
 * @param {evento} e 
 */
function getImage(e){
  const myFile = e.currentTarget.files[0];
  const idInput = e.currentTarget.id;
  console.log(myFile);
  if (idInput === 'photo') {
    fr.addEventListener('load', writeImage);
    fr.readAsDataURL(myFile);
  } else if (idInput === 'field7') {
    frQr.addEventListener('load', writeQr);
    frQr.readAsDataURL(myFile);
  }
  
}


/**
 * Una vez tenemos los datos listos en el FR podemos
 * trabajar con ellos ;)
 */
function writeImage() {
  /* En la propiedad `result` de nuestro FR se almacena
   * el resultado. Ese resultado de procesar el fichero que hemos cargado
   * podemos pasarlo como background a la imagen de perfil y a la vista previa
   * de nuestro componente.
   */
  profileImage.src = fr.result;
  data.photo = fr.result;
  
}

function writeQr() {
    profileQr.src = frQr.result;
    data.field7 = fr.result;
}


/**
 * Añadimos los listeners necesarios:
 * - al botón visible para generar el click automático
 * - al campo oculto para cuando cambie su value
 */
imageField.addEventListener('change', getImage);
qrField.addEventListener('change', getImage);
