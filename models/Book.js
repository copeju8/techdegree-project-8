//Model in sync with db structure with customValidator https://sequelize.org/master/manual/models-definition.html#validations

'use strict';
module.exports = (sequelize, DataTypes) => {
    const Book = sequelize.define('Book', {
        title: {
            type: DataTypes.STRING,
            allowNull: false, // disallow null
            validate: {
                notEmpty: {
                    msg: 'Please provide a title.',
                max: 30
            }
          }
        },  
        author: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                is: ["^[a-z]+$", 'i'],
                max: 25,
                notEmpty: {
                    msg: 'Please provide a name of an author.'
                }  
            }
        },
        genre: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isAlpha: true,
            }
        },
        year: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                isNumeric: {
                msg: 'Please enter a year - format XXXX.'
                }
            }
        }
    });
        Book.associate = function (models) {
        //associations can be defined here
    }
    return Book;
};  
