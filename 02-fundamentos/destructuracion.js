let deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneración',
    getNombre: function() {
        return `${this.nombre} ${this.apellido} - poder: ${this.poder}`
    }
};

let { nombre: primerNombe, apellido, poder } = deadpool;

console.log(primerNombe, apellido, poder);