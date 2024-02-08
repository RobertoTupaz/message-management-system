var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var group_category = new Schema({
    group_id: {
        type: Schema.Types.ObjectId,
        required: true
    },
    category_name: {
        type: String,
        required: true
    }
});