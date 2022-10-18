const express = require('express')

const app = express()

app.use(express.json())

const palabras = ['Frase', 'Inicial']

app.get('/api/frase',(req, res) =>{
    const fraseCompleta = palabras.join(' ')
    res.send({
        frase: fraseCompleta
    })
})

app.get('/api/palabras/:pos', (req, res) =>{
    const { pos } = req.params
    res.send({
        buscada: palabras[parseInt(pos)-1]
    })
})

app.post('/api/palabras', (req, res) =>{
    console.log(req.body)
    const { palabra } = req.body
    palabras.push(palabra)
    res.send({
        palabraInsertada: palabra
    })
})

app.put('/api/palabras/:pos', (req, res) =>{
    const { palabra } = req.body
    const { pos } = req.params

    const palabraAnterior = palabras[parseInt(pos) - 1]
    palabras[parseInt(pos) - 1] = palabra
    res.send({ actualizada:palabra, anterior:palabraAnterior})
})
app.delete('/api/palabras/:pos', (req, res) => {
    const { pos } = req.params
    const palabra = palabras.splice(parseInt(pos) - 1, 1)
    console.log(palabra)
    res.send({borrada: palabra})


})

app.listen(8080)