const fs = require('fs')
const data = fs.readFileSync('./test.txt','utf8')
console.log(data)

//fs.writeFileSync('./testwrite.txt',"esto es una prueba")
//fs.appendFileSync('./testwrite.txt','¬prueba de texto agregado')
fs.unlinkSync('./testwrite.txt')