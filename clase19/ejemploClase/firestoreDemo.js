import admin from 'firebase-admin';
import fs from 'fs';

const rutaCredenciales = './firebase/ejbasededatos-firebase-adminsdk-3xvgd-b6f3279bb4.json';
const serviceAccount = JSON.parse(await fs.promises.readFile(rutaCredenciales));

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const asObj = doc => ({ id: doc.id, ...doc.data() });

console.log('Base Firebase conectada!');

const db = admin.firestore();
const dbNombres = db.collection('nombres');

const guardado = await dbNombres.add({ nombre: 'pepe' });
console.log(guardado.id);

const doc = await dbNombres.doc(guardado.id).get();
console.dir(asObj(doc));

const result = [];
const snapshot = await dbNombres.get();
snapshot.forEach(doc => {
  result.push(asObj(doc))
});
console.dir(result);

await dbNombres.doc(guardado.id).set({ nombres: 'papa' });
console.dir(asObj(await dbNombres.doc(guardado.id).get()))

/* await dbNombres.doc(guardado.id).delete(); */