import ProductManager from "./productManager.js";

const main = async() => {
    try {
        const productManager = new ProductManager("./products.json");
        await productManager.addProduct({title: "Campera Adidas", description: "Campera de invierno"});
        const products = await productManager.getProducts();
        console.log(products);
    } catch (error) {
        console.log(error.message);
    }
}

main();