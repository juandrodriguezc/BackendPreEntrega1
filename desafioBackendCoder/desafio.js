class ProductManager {
    constructor() {
        this.products = [];
    }

    getProduct() {
        return this.products;
    }

    addProduct(nombre, description, price = 0, thumbnail, code, stock = 0) {
        if (!nombre || !description || !price || !thumbnail || !code || !stock) {
            console.log("Complete todos los datos");
            return; // Deberías salir de la función si los datos no están completos
        }

        let id = 1; // Mueve la declaración del id dentro de la función addProduct

        if (this.products.length > 0) {
            id = this.products[this.products.length - 1].id + 1;
        }

        const newProduct = { id, nombre, description, price, thumbnail, code, stock };
        this.products.push(newProduct);
    }
}
const manager = new ProductManager();

manager.addProduct('Pizza', '2x1 Todos los Lunes y Martes', 200, 'thumbnail1.jpg', 'code1', 100);
manager.addProduct('Rolls', '3x2 Todos los Miercoles y Jueves', 100, 'thumbnail1.jpg', 'code1', 200 );
manager.addProduct('Postres', '4x3 Todos los viernes', 150, 'thumbnail1.jpg', 'code1', 50 );
manager.addProduct('Pizza', '2x1 Todos los Lunes y Martes', 200, 'thumbnail1.jpg', 'code1', 100);

const products = manager.getProduct();
console.log('Lista de productos:', products);
