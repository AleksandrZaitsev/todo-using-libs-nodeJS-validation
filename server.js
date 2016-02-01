var http = require('http'),
    qs = require('querystring');

function requestCallback (request, response) {
    if (request.method == 'POST') {
        var body = '';

        request.on('data', function (data) {
            body += data;

            // Too much POST data, kill the connection!
            // 1e6 === 1 * Math.pow(10, 6) === 1 * 1000000 ~~~ 1MB
            if (body.length > 1e6)
                request.connection.destroy();
        });

        request.on('end', function () {
            var statusCode = JSON.parse(body).title ? 200 : 404;

            response.writeHead(statusCode, {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "X-Requested-With"
            });
            response.end();
        });
    }
}

http.createServer(requestCallback).listen(1337);
console.log('Server running at http://127.0.0.1:1337/');