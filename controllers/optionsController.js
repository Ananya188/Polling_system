const Question = require("../models/questions")
const Option = require('../models/options');

// Create options controller 
module.exports.create = async function (req, res) {
    let question = await Question.findById(req.query.id);

    if (!question) {
        return res.json(500, {
            message: "Question ID is not correct"
        })
    }
    let optioninQuery = req.query.option;
    console.log(question.title);
    console.log(optioninQuery);
    let newoption = await Option.create(
        {
            title: optioninQuery,
            votes: 0,

        }
    );
    await newoption.save();
    // to save link dynamically 
    newoption.linktoVote = 'http://localhost:8080/options/addvote/?option=' + newoption.id
    await newoption.save();
    question.options.push(newoption);
    question.save();
    return res.json(200, {
        message: "question is updated with option",
    })
}

// add votes to options controller
module.exports.addvote = async function (req, res) {
    let updateOption = await Option.findById(req.query.option);
    if (!updateOption) {
        return res.json(500, {
            message: "Option is not present for updation"
        })
    }
    let currentVotes = updateOption.votes;
    currentVotes = currentVotes + 1;
    updateOption.votes = currentVotes;
    updateOption.save();
    return res.json(200, {
        message: currentVotes + "vote is added for option",
    })
}

// Delete options controller
module.exports.delete = async function (req, res) {
    let option = req.query.option
    let options = await Option.findByIdAndDelete(option);
    if (!options) {
        return res.json(500, {
            message: "Cannot Delete option"
        })
    }
    return res.json(200, {
        message: "Option Deleted",
    })
}