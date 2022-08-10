const http = require('http');
const moment = require('moment');

const currentTime = () => {
    let time = moment().format('hh:mm:ss')
    if (time >= 6 && time <12) {
        return 'Buenos Dias';
    } else if (time >= 12 && time < 19) {
        return 'Buenas Tardes';
    } else if (time >= 19 && time < 00 || time >= 0 && time < 6) {
        return 'Buenas Noches';
    }
}

const server = http.createServer((request, response) => {
    response.end('hola');
})

const connectedServer = server.listen(3001, () => {
    console.log(`Servidor escuchando por el puerto ${connectedServer.address().port}`);
});