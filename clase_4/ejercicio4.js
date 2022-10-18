const fs = require('fs')

fs.readFile('package.json','utf-8',(error, contenido)=>{
    console.log("hola")
    if(error){
        throw new Error('error de lectura')
    }
    console.log('Lectura exitosa')
    const info = {
        contenidoStr: contenido,
        contenidoObj: JSON.parse(contenido),
        size: contenido.length
    }
    
    fs.writeFile('info.txt',  JSON.stringify(info, null, 2), error=>{
        if (error){
            throw new Error('Error de escritura')
        }
        console.log('Escritura exitosa')
    })
})


