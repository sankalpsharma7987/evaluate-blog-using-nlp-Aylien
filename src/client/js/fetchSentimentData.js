const fetchSentimentData = async(textValue)=>{
    const response = await fetch(`http://localhost:8080/sentiment?textValue=${textValue}`);
    console.log(response);
    try {
        const data = await response.json();
        return data;
    }
    catch(error) {
        console.log(error);
    }
}

export {fetchSentimentData};