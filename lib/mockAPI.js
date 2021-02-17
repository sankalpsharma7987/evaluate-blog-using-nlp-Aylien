const apiKey = process.env.API_KEY;
const request = require('request');
const baseURL = process.env.BASE_URL;
// const textValue = 'I like sitting next to you Shawn, makes me look so tough';
const scoreTagArray = require('./scoreTagArray.js');


const mockAPI=(textValue,contentType,callback)=>{

    
    const url = `${baseURL}?key=${apiKey}&of=json&${contentType}=${textValue}&lang=en`;

    const json=true;
    const method='GET';
    request({url,json,method},(error,{body})=>{
        if(error){
            callback('Unable to connect to the MeaningCloud API Services',undefined);
        }
 
 

        else if (body.status.code==103)
        {
            callback('Message exceeds maximum limit of 50000 words',undefined);
        }

        else if (body.status.code===100)
        {
            callback('Cannot access the MeaningCloud API Service.',undefined);
        }

        else if(body.status.code===102)
        {
            callback('Exceeded Maximum number of requests per month',undefined);
        }

        else if(!(body.score_tag===undefined)){
            
            let position = scoreTagArray.findIndex(scoreTag => scoreTag.key === body.score_tag);
            let scoreTag = scoreTagArray[position].value;
            const sentimentData = {
                scoreTag:scoreTag,
                agreement:body.agreement===undefined?'N/A':body.agreement,
                subjectivity:body.subjectivity===undefined?'N/A':body.subjectivity,
                irony:body.irony===undefined?'N/A':body.irony


            }
            callback(undefined,{sentimentData});
        }

        else {
            const sentimentData = {
                scoreTag:'N/A',
                agreement:body.agreement===undefined?'N/A':body.agreement,
                subjective:body.subjective===undefined?'N/A':body.subjective,
                ironic:body.ironic===undefined?'N/A':body.ironic


            }
            console.log(sentimentData);
            callback(undefined,{sentimentData});

        }
        
    
    })
    }

    module.exports=mockAPI;