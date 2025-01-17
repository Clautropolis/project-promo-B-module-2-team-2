const errorMessage = document.querySelector('.js-error-message');
const successMessage = document.querySelector('.js-created-message');
const finalDesignLink = document.querySelector('.js-link-final-design');
const socialMedia = document.querySelector('.js-social-media')

function handleCreate(event){
    event.preventDefault();
    console.log(data)
    fetch('https://dev.adalab.es/api/info/data', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {'Content-type': 'application/json'}
    })
    .then((response) => response.json())
    .then((info) => {
        console.log(info)
        if(info.success){
            localStorage.setItem('idTicket', info.infoID);
            successMessage.classList.remove('hidden');
            finalDesignLink.classList.remove('hidden');
            socialMedia.classList.remove('hidden');

        } else {
            errorMessage.classList.remove('hidden');
        }
    })

}



share1.addEventListener('click', handleCreate)