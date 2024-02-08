var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var group_members = new Schema({
    group_id: {
        type: Schema.Types.ObjectId,
        required: true
    },
    user_id: {
        type: Schema.Types.ObjectId,
        required: true
    }
});