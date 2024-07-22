const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: false
    },
    options:[{
        type:mongoose.Schema.Types.ObjectId, // list of options for a individual questions
        ref:'Option' 
    }]
}, {
    timestamps: true,
    toJSON: {virtuals: true}
});

const Question = mongoose.model('Question', questionSchema);

module.exports = Question;