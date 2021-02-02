const env = require("./environment.config");

// Initialize
const Express = require("express");
const BodyParser = require("body-parser");
const server = Express();

// Add json parser
server.use(BodyParser.json());

// Disable CORS
server.use(function (req, res, next) {
    //res.setHeader('Access-Control-Allow-Methods', 'GET, HEAD, POST, PUT, DELETE, CONNECT, OPTIONS, TRACE');
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
});

// Start the server
server.listen(env.port, function () {
    console.log("Listening on port 3000!");
});

module.exports = server;
