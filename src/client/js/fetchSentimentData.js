const fetchSentimentData = async(textValue,contentType)=>{
    const response = await fetch(`http://localhost:8080/sentiment?textValue=${textValue}&contentType=${contentType}`);
    try {
        const data = await response.json();
        return data;
    }
    catch(error) {
        console.log(error);
    }
}

module.exports = { fetchSentimentData };