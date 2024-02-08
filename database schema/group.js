var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var group = new Schema({
    group_name: {
        type: String,
        required: true
    }
});