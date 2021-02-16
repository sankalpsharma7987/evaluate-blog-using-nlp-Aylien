const $SCORE_TAG_ELEMENT = document.querySelector('#score_tag');
const $AGREEMENT_ELEMENT = document.querySelector('#agreement');
const $SUBJECTIVITY_ELEMENT = document.querySelector('#subjectivity');
const $IRONY_ELEMENT = document.querySelector('#irony');
const $TEXT_VALUE = document.querySelector('#sentimentText');
const $URL_VALUE = document.querySelector('#sentimentUrl');

const clearUI = ()=>{
    $SCORE_TAG_ELEMENT.innerHTML = "";
    $AGREEMENT_ELEMENT.innerHTML = "";
    $SUBJECTIVITY_ELEMENT.innerHTML = "";
    $IRONY_ELEMENT.innerHTML = "";
    $TEXT_VALUE.value = "";
    $URL_VALUE.value = "";
}

export { clearUI }