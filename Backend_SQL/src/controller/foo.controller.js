const server = require('../config/server');
const database = require('../config/database');
const Neu = database.import('../model/foo.model');

server.get('/posts', (req, res) =>
    //db.neu.findAll().then(result => res.json(result))
    Neu.findAll().then(result => res.json(result))
);

server.post('/posts', (req, res) => {
    Neu.create({firstname: "sven", lastname: "bomwollen"});
    res.status(200).send();
});
