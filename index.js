const express= require('express');
const path = require('path');
const app = express();
const port = 8080;
const db = require('./config/mongoose');
app.use('/',require('./routes')); 


// common code for running the node JS server
app.listen(port, function (err) {
    if (err) {
        console.log(err, "There is some error in listen");
        return;
    }
    console.log('server is running on port', port);
})