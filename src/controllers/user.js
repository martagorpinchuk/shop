const Product = require('./../models/user');
//const _ = require('lodash');

module.exports = {
    createProduct
} 

async function createProduct(req, res, next) {
    const fields = [
        'name',
        'prise',
        'category',
        'provider',
        'expirationDate',
        'dimension',
        'quantity'
    ];
    const body = req.body;
    const newProduct = _.pick(body, fields);
    try {
        const product = new Product(newProduct);
        await product.save();
        return res.status(200).json();
    } 
    catch(err) {
        console.log(err);
        next(err);
    }
}