// let http = require('http');
// let server = http.createServer(function(request, response){
//     response.writeHead(200, {"Content-Type": "text/html"});
//     response.write("<h1>Hello World!");
//     response.end();
// })
// server.listen(3000, function(){
//     console.log('Servidor Hello World rodando!');
// });

let http = require('http');

let atendeRequisicao = function(request, response) {
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("<h1>Hello World!</h1>");
    response.end();
}

let server = http.createServer(atendeRequisicao);

let servidorLigou = function() {
    console.log('Servidor Hello World rodando!');
}
server.listen(3000, servidorLigou);