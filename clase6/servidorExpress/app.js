const express = require('express');

const app = express();

app.get('/',(req,res)=>{
    res.send('Home');
})
app.get('/usuarios',(req,res)=>{
    res.send('Usuarios');
})
app.post('/usuarios',(req,res)=>{
    res.send(req.query);
})

const PORT = 8080;

app.listen(PORT, () => {
    console.log(`Servidor escuchando por el puerto ${PORT}`);
})