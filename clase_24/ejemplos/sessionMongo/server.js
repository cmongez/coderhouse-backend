const express = require('express');
const session = require('express-session');

//Mongo Local

const MongoStore = require('connect-mongo');

const app = express();
const advanceOptions = { useNewUrlParser: true, useUnifiedTopology: true };

app.use(
  session({
    store: MongoStore.create({
      mongoUrl:
        'mongodb+srv://cmongez:cmongez2022@cluster0.y0clcyk.mongodb.net/sesiones?retryWrites=true&w=majority',
      mongoOptions: advanceOptions,
    }),
    secret: 'secret',
    resave: false,
    saveUninitialized: false,
  })
);

app.get('/', (req, res) => {
  res.send('Servidor express ok!');
});

app.get('/con-session', (req, res) => {
  if (req.session.contador) {
    req.session.contador++;
    res.send(`Ud ha visitado el sitio ${req.session.contador} veces.`);
  } else {
    req.session.contador = 1;
    res.send('Bienvenido!');
  }
});

app.get('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (!err) res.send('Logout ok!');
    else res.send({ status: 'Logout ERROR', body: err });
  });
});

app.listen(8080);
console.log('server on');
