class ProductManager {
    constructor() {
        this.products = [];
        this.nextId = 1;
    }

    addProduct(title, description, price, thumbnail, code, stock) {
        // Validar que todos los campos sean obligatorios
        if (!title || !description || !price || !thumbnail || !code || !stock) {
            console.error("Todos los campos son obligatorios.");
            return;
        }

        // Validar que el código no se repita
        if (this.products.some(product => product.code === code)) {
            console.error(`El código "${code}" ya está en uso.`);
            return;
        }

        // Agregar el producto con un id autoincrementable
        const newProduct = {
            id: this.nextId++,
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        };

        this.products.push(newProduct);
    }

    getProducts() {
        return this.products;
    }

    getProductById(id) {
        const product = this.products.find(product => product.id === id);
        return product ? product : console.error("Not found");
    }
}

// Ejemplo de uso
const manager = new ProductManager();
manager.addProduct("Laptop", "Alta gama, 16GB RAM", 1500, "ruta/laptop.jpg", "ABC123", 5);
manager.addProduct("Smartphone", "Pantalla OLED, 128GB almacenamiento", 800, "ruta/phone.jpg", "XYZ456", 10);

console.log(manager.getProducts());
console.log(manager.getProductById(1)); // Devuelve el producto con ID 1
console.log(manager.getProductById(99)); // "Not found"