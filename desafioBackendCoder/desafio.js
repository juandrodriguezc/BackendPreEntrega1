//Desafio 1 Backend CoderHouse
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
}
//Creando los productos
const manager = new ProductManager();

manager.addProduct('Pizza', '2x1 Todos los Lunes y Martes', 200, 'thumbnail1.jpg', 'code1', 100);
manager.addProduct('Rolls', '3x2 Todos los Miercoles y Jueves', 100, 'thumbnail1.jpg', 'code1', 200 );
manager.addProduct('Postres', '4x3 Todos los viernes', 150, 'thumbnail1.jpg', 'code1', 50 );
//Producto sin nombre para arrojar el log de 'Complete todos los datos'
manager.addProduct('2x1 Todos los Lunes y Martes', 200, 'thumbnail1.jpg', 'code1', 100);

const products = manager.getProduct();
console.log('Lista de productos:', products);
