// function sumar(a, b){
//     return a + b;
// }

let sumar = (a, b) => a + b;
let saludar = () => 'Hola Mundo';

let deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneración',
    getNombre() {
        return `${this.nombre} ${this.apellido} - poder: ${this.poder}`
    }
};

console.log(sumar(10, 30));
console.log(saludar());
console.log(deadpool.getNombre());