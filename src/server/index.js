const path = require('path')
const express = require('express')
const mockAPI = require('./mockAPI.js')
const port = process.env.PORT;

const app = express()
const publicDirectoryPath=path.join(__dirname,'../client');

app.use(express.static(publicDirectoryPath))



app.get('/', function (req, res) {
    res.sendFile(path.resolve('src/client/views/index.html'))
})


app.get('/sentiment', (req, res)=> {
    const textValue = req.query.textValue;
    console.log(textValue);
    mockAPI(textValue,(error,{sentimentData}={})=>{
        if(error)
        {   
            res.send(error);
        }
        else {
            res.send(sentimentData);
        }

    })
})

app.listen(port, function () {
    console.log(`Server is listening on port ${port}`)
})