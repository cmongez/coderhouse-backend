const fs = require("fs");

fs.readFile("./test.txt", "utf8", (error, contenido) => {
  if (error) {
    throw new Error("error de Lectura");
  }
  console.log("Lectura Exitosa");

});
fs.writeFile("./fyh.txt", "Estoy escribiendo", (error) => {
  if (error) {
    throw new Error("error de escritura");
  }
  console.log("Escritura exitosa");
});
fs.mkdir("./carpetaNueva", (error) => {
  if (error) {
    throw new Error("Error en la creacion de directorio");
  }
  console.log("Directorio creado");
});

fs.readdir("./", (error, nombres) => {
  if (error) {
    throw new Error("Error de lectura de dirctorio");
  }
  console.log("Lectura de directorio");
  console.log(nombres);
});
