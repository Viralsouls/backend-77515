import fs from "fs";

class ProductManager {
  constructor(pathFile) {
    this.pathFile = pathFile;

    // Create file if it doesn't exist
    if (!fs.existsSync(this.pathFile)) {
      fs.writeFileSync(this.pathFile, "[]", "utf-8");
    }
  }

  async getProducts() {
    try {
      const fileData = await fs.promises.readFile(this.pathFile, "utf-8");
      const products = JSON.parse(fileData);
      return products;
    } catch (error) {
      throw new Error(`Error al traer los productos - ${error.message}`);
    }
  }

  generateNewId(products) {
    return products.length > 0 ? products[products.length - 1].id + 1 : 1;
  }

  async addProduct(newProduct) {
    try {
      const fileData = await fs.promises.readFile(this.pathFile, "utf-8");
      const products = JSON.parse(fileData);

      const newId = this.generateNewId(products);
      const product = { id: newId, ...newProduct };
      products.push(product);

      await fs.promises.writeFile(this.pathFile, JSON.stringify(products, null, 2), "utf-8");
      return products;
    } catch (error) {
      throw new Error(`Error al añadir el producto - ${error.message}`);
    }
  }

  async deleteProductById(idProduct) {
    try {
      const fileData = await fs.promises.readFile(this.pathFile, "utf-8");
      const data = JSON.parse(fileData);
      const productIndex = data.findIndex((prod) => prod.id === parseInt(idProduct));

      if (productIndex === -1) throw new Error(`Producto con id: ${idProduct} no encontrado`);
      data.splice(productIndex, 1);

      await fs.promises.writeFile(this.pathFile, JSON.stringify(data, null, 2), "utf-8");

      return data;
    } catch (error) {
      throw new Error(`Error al eliminar el producto: ${error.message}`);
    }
  }

  async updateProductById(idProduct, updatedProduct) {
    try {
      const fileData = await fs.promises.readFile(this.pathFile, "utf-8");
      const data = JSON.parse(fileData);
      const productIndex = data.findIndex((prod) => prod.id === parseInt(idProduct));
      if (productIndex === -1) throw new Error(`Producto con id: ${idProduct} no encontrado`);

      data[productIndex] = { ...data[productIndex], ...updatedProduct };
      await fs.promises.writeFile(this.pathFile, JSON.stringify(data, null, 2), "utf-8");

      return data;
    } catch (error) {
      throw new Error(`Error al actualizar el producto: ${error.message}`);
    }
  }
}

export default ProductManager;