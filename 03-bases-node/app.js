const { crearArchivo } = require('./multiplicar/multiplicar');

const argv = process.argv;
const parametro = argv[2];
const base = parametro.split('=')[1];

crearArchivo(base)
    .then(archivo => console.log(`Archivo creado: ${archivo}`))
    .catch(e => console.log(e));