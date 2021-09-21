const mongoose = require('mongoose');
const { Schema } = mongoose;

const postSchema = new Schema({
    title: {
        type: String,
        required: true,

    },

    body: {
        type: String,
        required: true,

    },
    catagory: {
        type: String,
        required: true,

    },
    author: {
        type: String,
        required: true,

    }



}, {
    timestamps: true,
    versionKey: false,

});
module.exports = mongoose.model('Post', postSchema);

