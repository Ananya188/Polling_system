const Questions = require('../models/questions');
const Options = require('../models/options');

// show the individual questions and its options
module.exports.index = async function (req, res) {
    let id = req.query.id;
    let question = await Questions.findById(id);
    if (!question) {
        return res.json(500, {
            message: "Question ID is not correct"
        })
    }
    console.log(question);
    let title = question.title
    let options = question.options
    let listofOptions = [];

    for (let i = 0; i < options.length; i++) {
        let individual = await Options.findById(options[i], 'title votes linktoVote');
        listofOptions.push(individual);
    }
    return res.json(200, {
        message: "question is",
        title: title,
        options: listofOptions,
    })
}

// Create a new questions 
module.exports.create = async function (req, res) {
    try {
        let question = new Questions();
        console.log(req.query.title);
        question.title = req.query.title;
        question.save();
        return res.json(200, {
            message: "question is created"
        })
    } catch (err) {
        return res.json(500, {
            message: "Cannot create question"
        })
    }

}

// Delete the Question
module.exports.delete = async function (req, res) {
    let question = req.query.question
    let questions = await Questions.findByIdAndDelete(question);
    if (!questions) {
        return res.json(500, {
            message: "Cannot Delete question"
        })
    }
    return res.json(200, {
        message: "Question Deleted",
    })

}