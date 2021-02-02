//nodemon to start

let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let mongoose = require('mongoose');

app.use(bodyParser.json());

Category = require('./models/categories');
Picture = require('./models/pictures');

//connect to Mongoose
mongoose.connect('mongodb://localhost/categories', {useNewUrlParser: true});
//CORS
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Methods', 'GET, HEAD, POST, PUT, DELETE, CONNECT, OPTIONS, TRACE');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {

    app.get('/', function (req, res) {
        res.send('get usage');
    });

    app.post('/', function (req, res) {
        res.send('post usage');
    });

    app.put('/', function (req, res) {
        res.send('put usage');
    });

    app.delete('/', function (req, res) {
        res.send('delete usage');
    });

//Category Stuff
    app.get('/api/categories', function (req, res) {
        Category.getCategories(function (err, category) {
            if (err) {
                return console.error(err);
            }
            res.json(category);
        });
    });

    app.post('/api/categories/:name', function (req, res) {
        Category.addCategory(req.params.name, function (err) {
            if (err) {
                return console.error(err);
            }
        });
        res.status(200).send();
    });

    app.put('/api/categories/:categoryName&:newCategoryName', function (req, res) {
        Category.updateCategory(req.params.categoryName, req.params.newCategoryName, {}, function (err, category) {
            if (err) {
                return console.error(err);
            }
            res.json(category);
        });
        res.status(200).send();
    });

    app.delete('/api/categories/:name', function (req, res) {
        Category.deleteCategory(req.params.name, function (err) {
            if (err) {
                return console.error(err);
            }
        });
        res.status(200).send();
    });

//Picture Stuff
    app.get('/api/pictures', function (req, res) {
        Picture.getPictures(function (err, picture) {
            if (err) {
                return console.error(err);
            }
            res.json(picture);
        });
    });

    app.get('/api/pictures/:category', function (req, res) {
        Picture.getPicturesByCategoryName(req.params.category, function (err, picture) {
            if (err) {
                return console.error(err);
            }
            res.json(picture);
        });
    });

    app.post('/api/pictures/:name&:url&:category', function (req, res) {
        // TODO how to send url?
        Picture.addPicture(req.params.name, req.params.url, req.params.category, function (err) {
            if (err) {
                return console.error(err);
            }
        });
        res.status(200).send();
    });

    app.put('/api/pictures/:name&:newName&:newUrl&:newCategory', function (req, res) {
        // TODO how to send url?
        let picture = req.body;
        Picture.updatePicture(
            req.params.name,
            req.params.newName,
            req.params.newUrl,
            req.params.newCategory,
            picture, {}, function (err) {
                if (err) {
                    return console.error(err);
                }
            });
        res.status(200).send();
    });

    app.delete('/api/Pictures/:name', function (req, res) {
        Picture.deletePicture(req.params.name, function (err) {
            if (err) {
                return console.error(err);
            }
        });
        res.status(200).send();
    });

    app.listen(3000);
    console.log('running on port: 3000');
});
