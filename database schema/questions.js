var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var questions = new Schema({
    message_id: {
        type: Schema.Types.ObjectId,
        required: true
    },
    question: {
        type: String,
        required: true
    }
});