const colorRamdon = ():number =>  Math.floor(Math.random() * 255)

let result:string = `El color generado es: (${colorRamdon()},${colorRamdon()},${colorRamdon()})`;
console.log(result);
