// REQUIREDS

// Vienen en los paquetes de node
const fs = require('fs');
// No vienen en los paquetes de node
   // const fs = require('express');
// Son archivos que nosotros creamos
   // const fs = require('./fs');

const crearArchivo = base => {
    return new Promise((resolve, reject)=>{
        if(!Number(base)){
            reject('El valor introducido no es un número');
            return
        }
        let data = '';

        for(let i = 1; i<=10; i++){
            data += `${base} * ${i} = ${i * base}\n`;
        }
        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
        if (err) 
            reject(err)
        else
            resolve(`tabla-${base}.txt`);
        });
    });
}

module.exports = {
    crearArchivo
}
