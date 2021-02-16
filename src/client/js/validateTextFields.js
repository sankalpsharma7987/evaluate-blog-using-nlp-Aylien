const $TEXT_ELEMENT = document.querySelector('#sentimentText');
const $URL_ELEMENT = document.querySelector('#sentimentUrl');

const validateTextFields = ()=>{
    if($TEXT_ELEMENT.value==="" && $URL_ELEMENT.value===""){
        return undefined;
    }

    else if($TEXT_ELEMENT.value!=="" && $URL_ELEMENT.value==="") {
        return 'txt';

    }
    else if($URL_ELEMENT.value!=="" && $TEXT_ELEMENT.value===""){
        return 'url';
    }

    else if($URL_ELEMENT.value!=""&& $TEXT_ELEMENT.value!==""){
        return 'invalid';
    }

}

export { validateTextFields };