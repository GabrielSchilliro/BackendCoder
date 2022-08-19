const express = require('express');
const routerProductos = express.Router();

const DB_PRODUCTOS = [];

routerProductos.get('/', (req, res) => {
    res.status(200).json(DB_PRODUCTOS);
});

routerProductos.get('/:id', (req, res) => {
    let id = Number(req.params.id);
    const productoBuscado = DB_PRODUCTOS.find(producto => producto.id === id);

    if (productoBuscado !== undefined) {
        res.status(200).json(productoBuscado)
    } else {
        res.status(404).json({
            error: "Producto no encontrado"
        });
    };
});

routerProductos.post('/', (req, res) => {
    let producto = req.body;
    if(DB_PRODUCTOS.length === 0){
        let id = 1;
        DB_PRODUCTOS.push({id: id, producto})
    } else {
        DB_PRODUCTOS.push({id: DB_PRODUCTOS.length + 1, producto});
    }

    res.status(201).json(DB_PRODUCTOS);
});

routerProductos.put('/:id', (req, res) => {
    let producto = req.body;
    let id = Number(req.params.id);
    DB_PRODUCTOS.find(producto => producto.id === id) = producto;
    res.status(200).json({
        msg: `Producto: ${id} modificado`
    });
});

routerProductos.delete('/:id', (req, res) => {
    let id = req.params.id;
    DB_PRODUCTOS.splice(id - 1, 1);
    res.status(202).json({
        msg: `Producto ${id} eliminado`
    });
});

module.exports = routerProductos;