var axios = require('axios');

var config = {
  method: 'get',
  url: 'https://www.getonbrd.com/api/v0/webhook_endpoints/23020789ebfeafcea8fb72f1510060b9?api_key=D7Wu0CggKM4_ENUzTx__0umkc0Ib-Gt-F8yep_H1okqu',
  headers: { }
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});