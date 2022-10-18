// const express = require('express')
// const { Router } = express

// const app = express()
// app.use(express.json())

// const routerMascotas = new Router()
// const routerPersonas = new Router()
// const mascotas = []
// const personas = []

// routerMascotas.get('/', (req, res) =>{
//     res.send(mascotas)
// })

// routerMascotas.post('/', (req, res) => {
//     console.log(req.body)
//     mascotas.push(req.body)
//     res.send(mascotas)
// })

// routerPersonas.get('/', (req, res) => {
//     res.send(personas)
// })

// routerPersonas.post('/', (req, res) => {
//     console.log(personas)
//     personas.push(req.body)

//     res.send(personas)
// })

// app.use('/mascotas', routerMascotas)

// app.use('/personas', routerPersonas)

// app.listen(8080)

const express = require('express');
const app = express();
app.use(express.static('public'));
