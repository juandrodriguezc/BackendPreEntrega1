//Desafio 3 Coderhouse Backend

const express = require('express');
const productos = require('./productos');

const PORT = 3000;
const app = express();

app.get('/', (req, res) => {
    res.send('Servidor con Express');
});

app.get('/productos', (req, res) => {
    
    let{limit,skip}=req.query

    let resultado=productos
    if(skip && skip>0){
        resultado=resultado.slice(skip)
    }
        if(limit && limit>0){
            resultado=resultado.slice(0, limit)
    }
    

    res.json(resultado);
});

app.get('/productos/:id', (req, res) => {
    const productId = parseInt(req.params.id);
    
    
    const producto = productos.find(producto => producto.id === productId);
    
    if (producto) {
        res.json(producto); 
    } else {
        res.send('Error 404. Producto no encontrado');
    }
});

app.get('*', (req, res) => {
    res.send('Error. 404 Not Found');
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
});