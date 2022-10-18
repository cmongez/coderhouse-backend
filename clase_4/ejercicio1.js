const mostrarLetras = (str) => {
  let i = 0;
  const intervalo = setInterval(() => {
    console.log(str[i]);
    
    if (i === str.length) {
      clearInterval(intervalo);
      fin();
    }
    i++;
  }, 1000);
};
const fin = () => console.log("termine");
setTimeout(mostrarLetras, 0, "hola");
setTimeout(mostrarLetras, 250, "hola");
setTimeout(mostrarLetras, 500, "hola");
