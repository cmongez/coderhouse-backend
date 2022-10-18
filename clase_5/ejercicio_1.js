const  obj = {}

for (let i = 0; i < 10000; i++) {
  let randomNumero = Math.ceil(Math.random()*20)
  obj[randomNumero]?  obj[randomNumero]++ : obj[randomNumero] = 1
  }


console.log(obj)