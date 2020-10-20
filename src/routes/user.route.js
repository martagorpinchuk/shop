const express= require('express');
const router = express.Router();

const userController = require('../controllers/user');

router.post('/', userController.createProduct); 
router.get('/:productId', userController.getProduct);
router.put('/:productId', userController.updateUser);

module.exports = router;