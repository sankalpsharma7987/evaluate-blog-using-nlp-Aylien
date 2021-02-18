const $SCORE_TAG_ELEMENT = document.querySelector('#score_tag');
const $AGREEMENT_ELEMENT = document.querySelector('#agreement');
const $SUBJECTIVITY_ELEMENT = document.querySelector('#subjectivity');
const $IRONY_ELEMENT = document.querySelector('#irony');
const $TEXT_VALUE = document.querySelector('#sentimentText');
const $URL_VALUE = document.querySelector('#sentimentUrl');
const $ERROR_ELEMENT = document.querySelector('#error');

const clearUI = ()=>{

    //Sentiment Result Elements

    $SCORE_TAG_ELEMENT.innerHTML = "";
    $AGREEMENT_ELEMENT.innerHTML = "";
    $SUBJECTIVITY_ELEMENT.innerHTML = "";
    $IRONY_ELEMENT.innerHTML = "";

    //Text Field Elements

    $TEXT_VALUE.value = "";
    $URL_VALUE.value = "";

    //Error Elements
    
    $ERROR_ELEMENT.innerHTML = "";
}

export { clearUI }