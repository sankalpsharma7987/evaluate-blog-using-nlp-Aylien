const $SUBMIT_BUTTON = document.querySelector('#submitButton');
const $TEXT_VALUE = document.querySelector('#sentimentText');
const $URL_VALUE = document.querySelector('#sentimentUrl');

const getSentimentData =(e)=>{

    e.preventDefault();
    
    
    if(Client.validateTextFields()==='txt')
    {
      Client.updateErrorUI('');
      Client.fetchSentimentData($TEXT_VALUE.value,'txt').then(
        data=> Client.updateUI(data)
      )

    }

    else if(Client.validateTextFields()==='url')
    {
      Client.updateErrorUI('');
      Client.fetchSentimentData($URL_VALUE.value,'url').then(
        data=> Client.updateUI(data)
      )

    }

    else if(Client.validateTextFields()==='invalid'){
      Client.clearUI('');
      Client.updateErrorUI('Cannot use both the fields');
      
    }

    else {
      Client.updateErrorUI('Cannot leave both text and url empty')
    }
    
}

$SUBMIT_BUTTON.addEventListener('click',getSentimentData);

export { getSentimentData };