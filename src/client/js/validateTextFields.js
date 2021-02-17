const validateTextFields = (textValue,urlValue)=>{
    if(textValue==="" && urlValue===""){
        return undefined;
    }

    else if(textValue!=="" && urlValue==="") {
        return 'txt';

    }
    else if(urlValue!=="" && textValue===""){
        return 'url';
    }

    else if(urlValue!=""&& textValue!==""){
        return 'invalid';
    }

}

module.exports = { validateTextFields };