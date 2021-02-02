const env = require('./environment.config');

// Properties
let options = {};
switch (env.mode) {
    case 'dev':
        options = {
            dialect: 'sqlite',
            storage: 'database.sqlite'
        };
        break;
    case 'prod':
        // TODO
        break;
}

// Database creation / connection
const Sequelize = require('sequelize');
const database = new Sequelize(options);

// Sync the database if in dev mode
if (env.mode === 'dev')
    database.sync({force: false});

// Authenticate
database
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

module.exports = database;
