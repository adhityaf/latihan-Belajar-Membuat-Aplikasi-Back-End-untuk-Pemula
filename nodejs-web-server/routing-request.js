const http = require('http');

const requestListener = (request, response) => {
    response.setHeader('Content-Type', 'text/html');
    response.statusCode = 200;
 
    const { method, url } = request;
 
    if(url === '/') {
        // TODO 2: logika respons bila url bernilai '/'
        if(method === 'GET'){
            response.end('<h1>Ini adalah Home Page!</h1>');
        }else{
            response.end(`<h1>Halaman ini tidak dapat diakses dengan ${method} request!</h1>`);
        }
    } else if(url === '/about') {
        // TODO 3: logika respons bila url bernilai '/about'
        if (method === 'GET'){
            response.end('<h1>Ini adalah about!</h1>');
        } else if (method === 'POST'){

            let body = [];
 
            request.on('data', (chunk) => {
                body.push(chunk);
            });
    
            request.on('end', () => {
                body = Buffer.concat(body).toString();
                const {name} = JSON.parse(body);
                response.end(`<h1>Halo, ${name}! Ini adalah halaman about</h1>`);
            });
        } else {
            response.end(`<h1>Halaman ini tidak dapat diakses dengan ${method} request!</h1>`);
        }
    } else {
        // TODO 1: logika respons bila url bukan '/' atau '/about'
        response.end('<h1>Halaman tidak ditemukan!</h1>');
    }

    /** Kode komentar disembunyikan agar lebih ringkas */
}

const server = http.createServer(requestListener);
 
const port = 5000;
const host = 'localhost';
 
server.listen(port, host, () => {
    console.log(`Server berjalan pada http://${host}:${port}`);
});