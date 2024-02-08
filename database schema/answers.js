var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var answers = new Schema({
    question_id: {
        type: Schema.Types.ObjectId,
        required: true
    },
    answer: {
        type: String,
        required: true
    }
});