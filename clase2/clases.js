class Usuario {
    constructor(nombre, apellido, libros, mascotas) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
        this.nombresADevolver = [];
    }
    getFullname() {
        return console.log(`El usuario se llama ${this.nombre} y su apellido es ${this.apellido}`);
    }
    addMascota(nombreMascota) {
        this.mascotas.push(nombreMascota);

    }
    countMascotas() {
        return console.log(`El usuario cuenta con ${this.mascotas.length} Mascotas`);
    }
    addBook(libro) {
        this.libros.push(libro);
    }
    getBookNames() {
        this.libros.forEach((libro) => {
            this.nombresADevolver.push(libro.nombre);
        })
        console.log(this.nombresADevolver);
    }
}
let usuario1 = new Usuario('Lionel', 'Messi', [{ nombre: 'libro1', autor: 'autor1' }, { nombre: 'libro2', autor: 'autor2' }], ['Perro']);
usuario1.getFullname();
usuario1.addMascota('Gato');
usuario1.countMascotas();
usuario1.addBook({ nombre: 'libro3', autor: 'autor3' });
usuario1.getBookNames();