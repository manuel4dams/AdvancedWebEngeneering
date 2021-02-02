let mongoose = require('mongoose');
Picture = require('./pictures');

let categorySchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    }
});

let Category = module.exports = mongoose.model('Category', categorySchema);

module.exports.getCategories = function (callback) {
    Category.find(callback, function (err) {
        if (err) return console.log(err);
    });
};

module.exports.addCategory = function (categoryName) {
    Category.create({name: categoryName}, function (err) {
        if (err) return console.log(err);
    });
};

module.exports.updateCategory = function (oldCategoryName, newCategorName, callback) {
    let query = {name: oldCategoryName};
    Category.updateOne(query, {name: newCategorName}, callback, function (err) {
        if (err) return console.log(err);
    });

    query = {category: oldCategoryName};
    Picture.updateMany(query, {category: newCategorName}, callback, function (err) {
        if (err) return console.log(err);
    });

};

module.exports.deleteCategory = function (categoryName) {
    Category.deleteOne({name: categoryName}, function (err) {
        if (err) return console.log(err);
    });

    Picture.deleteAllFromCategory(categoryName);
};
