import fs from "fs";

class ProductManager{

    constructor(pathFile){
        this.pathFile = pathFile;
    }

    generateNewId(products){
        if(products.length > 0){
            return products[products.length - 1].id + 1;
        }else{
            return 1;
        }
    }

    async addProduct(newProduct){
        try {
            // Recuperamos la data
            const fileData = await fs.promises.readFile(this.pathFile, "utf-8");
            const products = JSON.parse(fileData);

            const newId = this.generateNewId(products);
            const product = {id: newId, ...newProduct};
            products.push(product);

            // Guardamos en el archivo
            await fs.promises.writeFile(this.pathFile, JSON.stringify(products, null, 2), "utf-8");
        } catch (error) {
            throw new Error("Error al agregar un nuevo producto");
        }
    }

    async getProducts(){
        try {
            // Recuperamos la data
            const fileData = await fs.promises.readFile(this.pathFile, "utf-8");
            const products = JSON.parse(fileData);
            
            return products;
        } catch (error) {
            throw new Error("Error al traer los productos");
        }
    }
}

export default ProductManager;