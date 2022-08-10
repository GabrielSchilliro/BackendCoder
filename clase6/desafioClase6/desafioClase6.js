const express = require('express');
const app = express();
const Contenedor = require('./contenedor');
const productos = new Contenedor('productos.txt')

app.get('/',(req,res)=>{
  res.send("<h1> Que onda loco, pone /productos o /productoRandom </h1>");
})
app.get('/productos', async (req,res)=>{
  try {
    const resultado = await productos.getAll()
    res.send(resultado);
  } catch (error) {
    res.send(error);
  }
})
app.get('/productoRandom', async (req,res)=>{
  const data = await productos.getAll()
  const random = Math.floor(Math.random() * data.length)
  res.send(await productos.getById(parseInt(random + 1)))
})

const PORT = 8080;

const server = app.listen(PORT, () => {
  console.log(`Servidor http escuchando en el puerto ${server.address().port}`);
})
server.on('error', error => console.log(`Error en servidor ${error}`));