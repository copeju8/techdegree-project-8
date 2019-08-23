//Model in sync with db structure
const Sequelize = require('sequelize');

const connection = new Sequelize('Books');

module.exports = (sequelize) => {
    class Books extends Sequelize.Model  {}
    Books.init({
        //Set custom primary key column
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: Sequelize.STRING,
            allowNull: false, // disallow null
            defaultValue: false, //set default value
        },
       author: { 
            type: Sequelize.STRING,
            allowNull: false,
            defaultValue: false,
        },
        genre: {
            type: Sequelize.STRING,
            allowNull: false,  
            defaultValue: false,  
        },
    }, { sequelize });

    return Books;
};

Books.associate = (models) => {
    Books.belongsTo(models.Books);
};
