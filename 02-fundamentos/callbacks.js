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

getUsuarioById(10, (err, usuario)=>{
    if(err){
        return console.log(err);
    }
    console.log(`Usario de base de datos: ${usuario}`);
});