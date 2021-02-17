const path = require('path')
const express = require('express')
const mockAPI = require('../../lib/mockAPI.js')
const port = process.env.PORT;
const cors = require('cors');

const app = express()
// const publicDirectoryPath=path.join(__dirname,'../client');
const publicDirectoryPath = './dist';

app.use(express.static(publicDirectoryPath))
app.use(cors());


app.get('/', function (req, res) {
    res.sendFile(path.resolve('src/client/views/index.html'))
})


app.get('/sentiment', (req, res)=> {
    const textValue = req.query.textValue;
    const contentType = req.query.contentType;
    // console.log(textValue);
    // console.log(contentType);
    mockAPI(textValue,contentType,(error,{sentimentData}={})=>{
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

module.exports = { app }