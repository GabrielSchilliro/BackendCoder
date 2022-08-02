let nombres = ["Pedro", "Pablo", "Messi", "Juan"];
const mostrarNombres = () => {
    return Math.floor(Math.random() * nombres.length)
}

for (let i = 0; i < 500; i++) {
    console.log(nombres[mostrarNombres()]);
}
