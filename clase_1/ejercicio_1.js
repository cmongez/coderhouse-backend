//1) Definir variables

let nombre = "pepe";
let edad = 5;
let precio = 99.9;
const seriesFav = ["Dark", "Mr Robot", "Castlevania"];
const peliculasFav = [
  {
    nombre: "Inception",
    año:2012,
    protagonistas:["Leonardo DiCaprio","Tom Hardy"]
  },
  {
    nombre:"Titanic",
    año: 1997,
    protagonistas:["Leonardo DiCaprio", "Kate Winslet"]
  }
]
console.log(`${nombre} tiene ${edad} años`)
console.log(`El precio es: ${precio}`)
console.log(`Mis Series favoritas son: ${seriesFav}`)
console.log(`Mis Peliculas favoritas son: ${seriesFav}`)
edad++
console.log(`${nombre} tiene ${edad} años`)
seriesFav.push("Stranger Things")
console.log(`Mis Series favoritas son: ${seriesFav}`)