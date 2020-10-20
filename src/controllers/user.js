const Product = require('./../models/user');
//const _ = require('lodash');

module.exports = {
    createProduct, 
    getProduct,
    updateUser,
    deleteUser
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

async function getProduct(req, res, next) {
    const productId = req.params.productId;
    const body = req.body;
    try {
        const existingProduct = await Product.findOne({id: productId});
        if(!existingProduct) {
            console.log("There is no such product");
        } else {
            return res.status(200).json(existingProduct);
        }
    }
    catch(err) {
        console.log(err);
        next(err);
    }
}

async function updateUser(req, res, next) {
     
}

async function deleteUser(req, res, next) {

}