const $TEXT_VALUE = document.querySelector('#sentimentText');
const $SCORE_TAG_VALUE = document.querySelector('#score_tag');
const $AGREEMENT_VALUE = document.querySelector('#agreement');
const $SUBJECTIVITY_VALUE = document.querySelector('#subjectivity');
const $IRONY_VALUE = document.querySelector('#irony');

const $SUBMIT_BUTTON = document.querySelector('#submitButton');

const fetchSentimentData = async(textValue)=>{
    const response = await fetch(`/sentiment?textValue=${textValue}`);
    try {
        const data = await response.json();
        return data;
    }
    catch(error) {
        updateUI(error);
    }
    

}

const updateUI = async(sentimentObject)=>{
    $SCORE_TAG_VALUE.textContent = sentimentObject.scoreTag;
    $AGREEMENT_VALUE.textContent = sentimentObject.agreement;
    $IRONY_VALUE.textContent = sentimentObject.irony;
    $SUBJECTIVITY_VALUE.textContent = sentimentObject.subjectivity;

}


const getSentimentData =(e)=>{

    e.preventDefault();
    
    fetchSentimentData($TEXT_VALUE.value).then(
        data=> updateUI(data)
      )
}

$SUBMIT_BUTTON.addEventListener('click',getSentimentData);
