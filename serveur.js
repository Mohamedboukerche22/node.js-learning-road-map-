const http = require('http');
const serveur = http.createServer((req,res) => {
  res.WriteHead(200, { 'Content-Type' : 'text/plain' });
  res.end('hello , this is my first Node js serveur');
});

serveur.listen(3000, () =>  {
  console.log('serveur runing on at  http://localhost:3000');
});
