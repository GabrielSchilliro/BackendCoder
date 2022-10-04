import { contenedorPersonas } from "./contenedores";


export async function getController(req, res) {
    const productos = await contenedorPersonas.obtenerTodas();
    res.json(productos);
}
