const express = require('express');
const session = require('express-session');
const app = express();

app.use(
  session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false,
  })
);

// app.get('/session', (req, res) => {
//   if (req.session.contador) {
//     req.session.contador++;
//     res.send(`Usted ha visitado el sitio ${req.session.contador} veces.`);
//   } else {
//     req.session.contador = 1;
//     res.send('Bienvenido');
//   }
// });

function auth(req, res, next) {
  if (req.session?.user === 'alex' && req.session.admin === true) {
    return next();
  }
  return res.status(401).send('error de autorizacion');
}

app.get('/private', auth, (req, res) => {
  res.send('Si estas viendo esto es porque ya te logueaste');
});

app.get('/login', (req, res) => {
  const { username, password } = req.query;

  if (username !== 'alex' || password !== 'alexpass') {
    return res.send('Login failded!');
  }
  req.session.user = username;
  req.session.admin = true;
  res.send('Login success!!');
});

app.get('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      res.json({ status: 'Logout Error', body: err });
    } else {
      res.send('Logout ok!!');
    }
  });
});

app.listen(8080);
