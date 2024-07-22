
const mongoose = require('mongoose');

const optionsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: false
    },
    question:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Question'
    },
    votes:{
        type:Number,
        required : false
    },
    linktoVote:{
        type:String,
        require: false
    }
}, {
    timestamps: true,
    toJSON: {virtuals: true}
});

const Option = mongoose.model('Option', optionsSchema);

module.exports = Option;