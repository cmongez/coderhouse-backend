function dividir(dividendo, divisor){
    return new Promise((resolve, reject)=>{
        if(divisor===0){
            reject('No se puede dividir entre cero')
        }
        resolve(dividendo/divisor)
    })
}
dividir(10,0)
    .then(resultado=>{
        console.log(`resultado:${resultado}`)
    })
    .catch(error=>{
        console.error(`error: ${error}`)
    })
