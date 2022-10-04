import { MongoClient } from "mongodb";

const host = 'localhost';
const port = '27017';

const username = 'root';
const password = 'gismongo';

/* const uri = `mongodb://${host}:${port}`;

const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    authSource: "admin",
    auth: {
        username,
        password,
    }
}); */

const uri = `mongodb://${username}:${password}@${host}:${port}?authSource=admin`;

const client = new MongoClient(uri);

await client.connect();

const dbEcommerce = client.db("ecommerce");

const dbProductos = dbEcommerce.collection("productos");

await dbProductos.insertOne({ title: 'Producto 12', price: 5500, thumbnail: 'Url12.com', stock: 0 });

const productos = await dbProductos.find().toArray();

console.log(productos);

await client.close();