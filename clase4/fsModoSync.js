const fs = require('fs');

fs.writeFileSync('./test.txt', 'Hola manola\n');
fs.appendFileSync('./test.txt', 'Tu nariz contra mis bolas')
const data = fs.readFileSync('./test.txt', 'utf-8');
console.log(data);
fs.unlinkSync('./test.txt') // Comment this line to prove and then uncomment it and try again.