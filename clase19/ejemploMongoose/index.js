import mongoose from "mongoose";

const host = 'localhost';
const port = '27017';

const username = 'root';
const password = 'gismongo';

const database = 'ecommerce';

const uri = `mongodb://${username}:${password}@${host}:${port}/${database}?authSource=admin`;

await mongoose.connect(uri);

const productoSchema = new mongoose.Schema({
    title: { type: String, required: true },
    price: { type: Number, required: true },
    thumbnail: { type: String, required: true }
});

/* const dbEcommerce = mongoose.model('productos', productoSchema);

await dbEcommerce.deleteMany({});

await dbEcommerce.create({ title: 'Producto 13', price: 5800, thumbnail: 'Url13.com'});

const productos = await dbEcommerce.find();

console.log(productos); */

// ----------------------------------------------------------

/* function nuevoId() {
    return `${Date.now()}`
} */

const Producto = mongoose.model('productos', productoSchema);

/* const producto = new Producto({ title: 'Producto 14', price: 5800, thumbnail: 'Url14.com' });
await producto.save(); */

const productos = await Producto.find().lean()/* .select({ _id:0, __v: 0}).lean(); */
/* console.log(productos); */

const producto = productos[0];

producto.title = 'Producto12';

await producto.save();

const productos2 = await Producto.find()//.select({ _id:0, __v: 0}).lean();

console.log(productos2);

mongoose.disconnect();