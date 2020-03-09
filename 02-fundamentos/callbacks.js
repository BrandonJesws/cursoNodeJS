setTimeout(() => {
    console.log('Hola Mundo');
}, 3000);

let getUsuarioById = (id, callback) => {
    let usuario = {
        nombre: 'Brandon',
        id
    };
    callback(usuario);
};

getUsuarioById(10, (usuario)=>{
    console.log(`Usario de base de datos: ${usuario}`);
});