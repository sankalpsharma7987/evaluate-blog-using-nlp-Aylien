const $SCORE_TAG_ELEMENT = document.querySelector('#score_tag');
const $AGREEMENT_ELEMENT = document.querySelector('#agreement');
const $SUBJECTIVITY_ELEMENT = document.querySelector('#subjectivity');
const $IRONY_ELEMENT = document.querySelector('#irony');


const updateUI = async(sentimentObject)=>{
    Client.clearUI();
    $SCORE_TAG_ELEMENT.textContent = sentimentObject.scoreTag;
    $AGREEMENT_ELEMENT.textContent = sentimentObject.agreement;
    $IRONY_ELEMENT.textContent = sentimentObject.irony;
    $SUBJECTIVITY_ELEMENT.textContent = sentimentObject.subjectivity;

}

export { updateUI };