const mongoose = require('mongoose');
mongoose.set('strictQuery',true)
mongoose.connect('mongodb+srv://ananyadutta606:Password1@cluster0.ytq37ej.mongodb.net/?retryWrites=true&w=majority');

const db = mongoose.connection;

db.on('err',console.error.bind(console, "error connection to DB"));

db.once('open',function(){
    console.log("connected to DB MONGO DB of Polling System")
})

module.exports = db;
