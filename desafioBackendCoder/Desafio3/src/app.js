const express = require('express');
const ProductManager = require('./productManager');

const PORT = 3000;
const app = express();

// Crear una instancia de ProductManager
const productsFile='productos.json';
const manager = new ProductManager(productsFile);

app.get('/', (req, res) => {
    res.send('Servidor con Express');
});

app.get('/productos', (req, res) => {
    const { limit, skip } = req.query;

    let resultado = manager.getProduct(); // Obtener todos los productos usando la instancia 'manager'

    if (skip && skip > 0) {
        resultado = resultado.slice(skip); // OJO: Solo usar skip debería ser verificado.
    }

    if (limit && limit > 0) {
        resultado = resultado.slice(0, limit);
    }

    res.json(resultado);
});

app.get('/productos/:id', (req, res) => {
    const productId = parseInt(req.params.id);
    const producto = manager.getProductById(productId); // Obtener producto por su ID usando la instancia 'manager'

    if (producto) {
        res.json(producto);
    } else {
        res.status(404).send('Error 404. Producto no encontrado');
    }
});

app.get('*', (req, res) => {
    res.status(404).send('Error. 404 Not Found');
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
});