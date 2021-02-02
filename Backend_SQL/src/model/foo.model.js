const Sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    class Foo extends Sequelize.Model {}

    Foo.init(
        {
            firstname: DataTypes.STRING,
            lastname: DataTypes.STRING
        },
        {
            sequelize
        }
    );

    return Foo;
};
