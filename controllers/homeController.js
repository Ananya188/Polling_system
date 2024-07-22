const Questions = require('../models/questions');

// Home controller for showing list of questions 
module.exports.allques = async function(req, res){
    let questions = await Questions.find({},'title');
    return res.json(200, {
        message: "List of questions",
        questions : questions
    })
}