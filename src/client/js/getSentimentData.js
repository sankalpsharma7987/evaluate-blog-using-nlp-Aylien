const $SUBMIT_BUTTON = document.querySelector('#submitButton');
const $TEXT_VALUE = document.querySelector('#sentimentText');
const $URL_VALUE = document.querySelector('#sentimentUrl');

const getSentimentData =(e)=>{

    e.preventDefault();
    
    
    if(Client.validateTextFields($TEXT_VALUE.value,$URL_VALUE.value)==='txt') {

      Client.updateErrorUI('');// clearUI is not called with updateErrorUI as the updateUI function has call to the clearUI function.
      Client.fetchSentimentData($TEXT_VALUE.value,'txt').then(
        data=> Client.updateUI(data)
      )

    }

    else if(Client.validateTextFields($TEXT_VALUE.value,$URL_VALUE.value)==='url') {

      Client.updateErrorUI('');// clearUI is not called with updateErrorUI as the updateUI function has call to the clearUI function.

      Client.fetchSentimentData($URL_VALUE.value,'url').then(
        data=> Client.updateUI(data)
      )
      
    }

    else if(Client.validateTextFields($TEXT_VALUE.value,$URL_VALUE.value)==='invalid') {

      Client.clearUI();
      Client.updateErrorUI('Cannot use both the fields');
      
    }

    else {

      Client.clearUI();
      Client.updateErrorUI('Cannot leave both text and url empty')
      
    }
    
}

$SUBMIT_BUTTON.addEventListener('click',getSentimentData);

module.exports = { getSentimentData };