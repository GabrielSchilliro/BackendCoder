let { products } = require('../data');
const ids = products.map((product) => product.id);

class Product {
    products = products
    id = ids.length

    newProduct(product) {
        this.products.push({
            title: product.title,
            price: product.price,
            thumbnail: product.thumbnail,
            id: ++this.id
        })

        return this.products[this.id];
    }

    showProduct(id) {
        let prod = this.products.find((product) => {
            return product.id == id
        })
        if (prod == undefined) {
            return '{error: "Producto no encontrado}';
        }

        return prod;
    }

    get listProduct() {
        if (this.products.length == 0) {
            return [];
        }

        return this.products;
    }

    updateProduct(changes, id) {
        let indexProd = this.products.findIndex(() => {
            return prod.id == id;
        })
        let prodUpdated = { ...changes, id: id }
        return (this.products[indexProd] = prodUpdated);
    }

    deleteProduct(id) {
        let indexProd = this.products.findIndex((prod) => {
            if (prod.id == id) {
                return prod;
            }
        })
        if (indexProd == -1) {
            return '{error: "Producto no encontrado."}'
        }
        return this.products.splice(indexProd)
    }
}

module.exports = new Product();