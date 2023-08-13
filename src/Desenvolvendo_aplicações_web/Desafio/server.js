let http = require('http')
let fs = require('fs')
let url = require('url')
let path = require('path')

const rotear = function (pathname) {
    if (pathname && pathname !== '/') {
        const arquivo = path.join(__dirname, `${pathname}.html`);
        const existe = fs.existsSync(arquivo);
        if (existe) {
            return arquivo;
        }
        return path.join(__dirname, 'erro.html');
    }
    return path.join(__dirname, 'artigos.html');
};

const server = http.createServer((request, response) => {
    const pathname = url.parse(request.url).pathname;
    const pagina = rotear(pathname);

    fs.readFile(pagina, (err, html) => {
        response.writeHead(200, { "Context-Type": "text/html" });
        response.end(html);
    });
});

server.listen(3000, function () {
    console.log('Executando Desafio')
});