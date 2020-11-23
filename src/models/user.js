const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: {
        type: String,
        minlength: 3,
        required: true
    },
    prise: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        value: '',
        required: true
    },
    provider: {
        type: String,
        required: false
    },
    expirationDate: {
        type: Number,
        required: true
    },
    dimension: {
        type: String,
        value: ''
    },
    quantity: {
        type: Number,
        required: true
    }

})

module.exports = mongoose.model('Product', productSchema);