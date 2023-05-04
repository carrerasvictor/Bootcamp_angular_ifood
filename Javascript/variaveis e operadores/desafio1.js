const precoCombustivel = 5.79;
const gastoMedio = 12;
const distanciaKm = 1580;
 
const litrosConsumidos = distanciaKm / gastoMedio;
const valorGasto = litrosConsumidos * precoCombustivel;


console.log(valorGasto.toFixed(2))