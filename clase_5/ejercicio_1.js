function getRandomArbitrary(min, max) {
  return Math.trunc(Math.random() * (max - min) + min);
}
const  objetoNumeros = {}

for (let i = 0; i < 10000; i++) {
  let randomNumero = getRandomArbitrary(1, 20);
  objetoNumeros[randomNumero]?  objetoNumeros[randomNumero]++ : objetoNumeros[randomNumero] = 1
  }


console.log(objetoNumeros)