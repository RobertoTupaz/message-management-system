var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var messages = new Schema({
    user_id: {
        type: Schema.Types.ObjectId,
        required: true
    },
    group_id: {
        type: Schema.Types.ObjectId,
        required: true
    },
    message: {
        type: String,
        required: true
    }
});