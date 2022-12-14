const express = require('express');
const session = require('express-session');

// //Redis Local
// const redis = require('redis');
// const client = redis.createClient();
// const connectRedis = require('connect-redis');
// const RedisStore = connectRedis(session);

// Redis Cloud
const redis = require('redis');
const client = redis.createClient(
  10997,
  'redis-10997.c261.us-east-1-4.ec2.cloud.redislabs.com'
);
client.auth('orS0gUts5LbKf3tH3x1BEL3ynqlYx7pY', (err) => {
  if (err) {
    throw err;
  }
});
const connectRedis = require('connect-redis');
const RedisStore = connectRedis(session);
const app = express();

app.use(
  session({
    store: new RedisStore({
      client: client,
      ttl: 30,
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
