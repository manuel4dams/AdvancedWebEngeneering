let mongoose = require('mongoose');

let pictureSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    url: {
        type: String,
    },
    category: {
        type: String
    }
});

let Picture = module.exports = mongoose.model('pictures', pictureSchema);

module.exports.getPictures = function (callback) {
    Picture.find(callback).limit(function (err) {
        if (err) return console.log(err);
    });
};

module.exports.getPicturesByCategoryName = function (category, callback) {
    Picture.find({category: category}, callback, function (err) {
        if (err) return console.log(err);
    });
};

module.exports.addPicture = function (pictureName, pictureUrl, categoryName) {
    Picture.create({name: pictureName, url: pictureUrl, category: categoryName}, function (err) {
        if (err) return console.log(err);
    });
};

module.exports.updatePicture = function (name, newName, newUrl, newCategory, callback) {
    let query = {name: name};
    Picture.updateOne(query, {name: newName, url: newUrl, category: newCategory}, callback, function (err) {
        if (err) return console.log(err);
    });

};

module.exports.deletePicture = function (pictureName) {
    Picture.deleteOne({name: pictureName}, function (err) {
        if (err) return console.log(err);
    });
};

module.exports.deleteAllFromCategory = function (categoryName) {
    Picture.deleteMany({category: categoryName}, function (err) {
        if (err) return console.log(err);
    });
};
