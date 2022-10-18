const fs = require('fs')

async function readFile(){
    try {
        const contenido = await fs.promises.readFile('test.txt','utf-8')
        console.log(contenido)
    } catch (error) {
        console.error(error)
    }
}
readFile()