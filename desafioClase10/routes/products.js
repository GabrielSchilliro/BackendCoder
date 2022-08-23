const express = require('express');
const apiRouter = express.Router();

const productController = require('../controller/products');

apiRouter.get('/', productController.ShowForm);

apiRouter.get('/products', productController.listProduct);

apiRouter.post('/products', productController.newProduct);

apiRouter.get('/products', productController.showProduct);

apiRouter.put('/products', productController.updateProduct);

apiRouter.delete('/products', productController.deleteProduct);

module.exports = apiRouter;