require('dotenv').config();
const express = require('express');
const http = require('http');
const next = require('next');
const PORT = process.env.PORT || 3000;
const dev = 'production' !== 'production';
let bodyParser = require('body-parser');

var fs = require('fs');
const app = next({
    dev,
    dir: __dirname,
});
const handle = app.getRequestHandler();

app.prepare().then(() => {
    const server = express();
    server.use(bodyParser.json());
    server.use(function (request, response, next) {
        response.header('Access-Control-Allow-Origin', '*');
        response.header(
            'Access-Control-Allow-Headers',
            'Origin, X-Requested-With, Content-Type, Accept',
        );
        next();
    });


    server.post('/api/addId', function (request, response) {
            fs.readFile("id.json", (err, buffer) => {
                if (err) return console.error('File read error: ', err)

                const data = JSON.parse(buffer.toString())

                data[request.body.id] = request.body.id;

                fs.writeFile("id.json", JSON.stringify(data), err => {
                    if (err) return console.error('File write error:', err)
                })
            })
        }
    );
    server.post('/api/getId', function (request, response) {
        fs.readFile("id.json", (err, buffer) => {
            if (err) return console.error('File read error: ', err)

            const data = JSON.parse(buffer.toString())
            return response.status(200).send(data);
        })
    });

    server.get('*', handle);

    http.createServer(server).listen(PORT, () => {
        console.log(`listening on port ${PORT}`);
    });
});
