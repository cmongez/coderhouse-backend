const colorRamdon = () => {
  let ramdon = parseInt(Math.random() * 255);
  return ramdon;
};
let result = `El color generado es: (${colorRamdon()},${colorRamdon()},${colorRamdon()})`;
console.log(result);
