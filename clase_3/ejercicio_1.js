const escribiryLoguear = (texto, callbackParaLoguear)=>{
    //simulacion de escribir un archivo
    console.log(texto)
    callbackParaLoguear('archivo proceso con éxito')
}

escribiryLoguear('Hola estoy usando callbacks', (mensajeParaLoguear)=>{
    const fecha = new Date().toLocaleDateString();
    console.log(`${fecha}: ${mensajeParaLoguear}`)
})