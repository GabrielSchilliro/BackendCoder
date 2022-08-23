const Product = require('../services/product');

exports.ShowForm = async (req, res) => {
    await res.render('index', { products: Product.listProduct });
}

exports.listProduct = async (req, res) => {
    await res.render('productList', { products: Product.listProduct })
}

exports.newProduct = async (req, res) => {
    let dataNewProduct = await req.body;
    Product.newProduct(dataNewProduct);
    res.redirect('/');
}

exports.showProduct = async (req, res) => {
    let id = await req.params.id;
    await res.status(200).json(Product.showProduct(id));
}

exports.updateProduct = async (req, res) => {
    let dataUpdatedProduct = await req.body;
    let id = await req.params.id;
    await res.status(200).json(Product.updateProduct(dataUpdatedProduct, id));
}

exports.deleteProduct = async (req,res) => {
    let id = await req.params.id;
    await res.status(200).json(Product.deleteProduct(id));
}