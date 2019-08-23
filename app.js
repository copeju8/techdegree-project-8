//Create and retrieve data from db

'use strict';
const Sequelize = require('sequelize');

module.exports = (sequelize) => {
    class Book extends Sequelize.Model {}
    Books.init({
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        author: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        genre: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        year: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
    }, { sequelize });

   //The associate() method is called in the db/index.js file after each model is imported into the Sequelize instance. 
   //This allows code within the associate() method to access any of the available models.

    Books.associate = (models) =>  {
       Books.hasMany(models.Books);
    };
}

