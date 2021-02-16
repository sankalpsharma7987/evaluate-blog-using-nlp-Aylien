const $SUBMIT_BUTTON = document.querySelector('#submitButton');
const $TEXT_VALUE = document.querySelector('#sentimentText');

const getSentimentData =(e)=>{

    e.preventDefault();
    
    Client.fetchSentimentData($TEXT_VALUE.value).then(
        data=> Client.updateUI(data)
      )
}

$SUBMIT_BUTTON.addEventListener('click',getSentimentData);

export { getSentimentData };