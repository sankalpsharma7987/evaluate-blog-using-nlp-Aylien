const $SCORE_TAG_VALUE = document.querySelector('#score_tag');
const $AGREEMENT_VALUE = document.querySelector('#agreement');
const $SUBJECTIVITY_VALUE = document.querySelector('#subjectivity');
const $IRONY_VALUE = document.querySelector('#irony');

const updateUI = async(sentimentObject)=>{
    $SCORE_TAG_VALUE.textContent = sentimentObject.scoreTag;
    $AGREEMENT_VALUE.textContent = sentimentObject.agreement;
    $IRONY_VALUE.textContent = sentimentObject.irony;
    $SUBJECTIVITY_VALUE.textContent = sentimentObject.subjectivity;

}

export { updateUI };