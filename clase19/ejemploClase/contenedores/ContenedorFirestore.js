import admin from 'firebase-admin';
import fs from 'fs';

const rutaCredenciales = './firebase/ejbasededatos-firebase-adminsdk-3xvgd-b6f3279bb4.json';
const serviceAccount = JSON.parse(await fs.promises.readFile(rutaCredenciales));

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

const asObj = doc => ({ id: doc.id, ...doc.data() })

export class ContenedorFirestore {
    constructor(nombreColeccion) {
        this.elementos = db.collection(nombreColeccion)
    }

    async obtenerTodas() {
        const result = []
        const snapshot = await this.elementos.get();
        snapshot.forEach(doc => {
            result.push(asObj(doc))
        })
        return result
    }
}