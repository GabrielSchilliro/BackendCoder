const fs = require("fs");
const Producto = require("../services/product.js");

exports.MostrarFormulario = async (req, res) => {
	await res.render("index", { productos: Producto.listarProducto() });
};

exports.listaProducto = async (req, res) => {
	await res.json({ productos: Producto.listarProducto() });
};

exports.nuevoProducto = async (req, res) => {
	let toAdd = await req.body
	//console.log(toAdd)
	Producto.nuevoProducto(toAdd)
	res.redirect("/");
};

exports.mostrarProducto = async (req, res) => {
	let id = await req.params.id;
	await res.status(200).json(Producto.mostrarProducto(id));
};

exports.actualizarProducto = async (req, res) => {
	let toChange = await req.body;
	let id = await req.params.id;
	await res.status(200).json(Producto.actualizarProducto(toChange, id));
};

exports.eliminarProducto = async (req, res) => {
	let id = await req.params.id;
	await res.status(200).json(Producto.eliminarProducto(id));
};