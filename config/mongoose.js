const mongoose = require('mongoose');
mongoose.set('strictQuery',true)
mongoose.connect('mongodb://localhost:27017/Polling_System');

const db = mongoose.connection;

db.on('err',console.error.bind(console, "error connection to DB"));

db.once('open',function(){
    console.log("connected to DB MONGO DB of Polling System")
})

module.exports = db;