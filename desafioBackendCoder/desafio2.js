//Desafio 2 Backend CoderHouse
class ProductManager {
    constructor() {
        this.products = [];
    }

    getProduct() {
        return this.products;
    }

    addProduct(nombre, description, price = 0, thumbnail, code, stock = 0) {
        if (!nombre || !description || !price || !thumbnail || !code || !stock) {
            console.log(" Por favor complete todos los datos");
            return; // Funciona para salir de la función si los datos no están completos
        }
        //Para agregar el ID que se autoincremente
        let id = 1; 
        
        if (this.products.length > 0) {
            id = this.products[this.products.length - 1].id + 1;
        }
        
        //Variable para agregar los productos
        const newProduct = { id, nombre, description, price, thumbnail, code, stock };
        this.products.push(newProduct);
    }
    getProductById(id) {
        const product = this.products.find(product => product.id === id);
        if (product) {
            return product;
        } else {
            console.log("Error: Producto no encontrado");
            return null;
        }
    }

    updateProduct(id, NuevaInfo) {
        const index = this.products.findIndex(product => product.id === id);
        if (index !== -1) {
            // Crear una copia del producto actual y fusionarla con los nuevos datos
            const updatedProduct = { ...this.products[index], ...NuevaInfo };
            // Para no sobreescribir el ID
            updatedProduct.id = id;
            // Actualizar el producto en el array de productos
            this.products[index] = updatedProduct;
            console.log("Producto actualizado correctamente");
            return true;
        } else {
            console.log("No se pudo actualizar, ya que el producto no se encontró");
            return false;
        }
    }
    deleteProduct(id) {
        const initialLength = this.products.length;
        this.products = this.products.filter(product => product.id !== id);
        if (this.products.length === initialLength) {
            console.log("Error: Producto no encontrado");
        } else {
            console.log("Producto eliminado correctamente");
        }
    }
}
//Creando los productos
const manager = new ProductManager();

manager.addProduct('Pizza', '2x1 Todos los Lunes y Martes', 200, 'thumbnail1.jpg', 'code1', 100);
manager.addProduct('Rolls', '3x2 Todos los Miercoles y Jueves', 100, 'thumbnail2.jpg', 'code2', 200 );
manager.addProduct('Postres', '4x3 Todos los viernes', 150, 'thumbnail3.jpg', 'code3', 50 );
//Producto sin nombre para arrojar el log de 'Complete todos los datos'
manager.addProduct('2x1 Todos los Lunes y Martes', 200, 'thumbnail1.jpg', 'code1', 100);
manager.addProduct('Cafeteria', 'Todos los dias', 105, 'thumbnail4.jpg', 'code5', 300   )

const products = manager.getProduct();
console.log('Lista de productos:', products);

const productoEncontrado = manager.getProductById(1);{
    console.log('Producto encontrado:', productoEncontrado);
}

// Actualizar un producto existente
const idProductoActualizar = 1;
const nuevosDatos = {
    precio: 250,
    stock: 120 
};

manager.updateProduct(idProductoActualizar, nuevosDatos);

setTimeout(() =>{
    const productoEliminado = 4; // Id del producto que se desea eliminar
manager.deleteProduct(productoEliminado);

console.log('Lista de productos actualizada:', manager.getProduct());
},3000)