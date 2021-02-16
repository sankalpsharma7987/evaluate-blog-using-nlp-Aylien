const $ERROR_ELEMENT = document.querySelector('#error');

const updateErrorUI = (message)=>{
    $ERROR_ELEMENT.textContent = message;
}

export { updateErrorUI }