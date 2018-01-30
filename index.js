const express = require('express');
const app = express();
const mongoose = require('mongoose');
const config = require('./config/database');
const path = require('path');


mongoose.Promise = global.Promise; 
mongoose.connect(config.uri, (err)=> {
    if(err){
        console.log('Could Not connect', err);
    }else{
        console.log('hell ya connected', + config.db);
    }
});

app.use(express.static(__dirname + '/client/dist/'));
// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res)=> {
    res.sendFile(path.join(__dirname + 'client/dist/index.html'));
  });

app.listen(8080, () => {
    console.log(config.secret);
    console.log(' we ya i am listening');
});