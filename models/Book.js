//Model in sync with db structure with customValidator https://sequelize.org/master/manual/models-definition.html#validations

'use strict';
module.exports = (sequelize, DataTypes) => {
    const Book = sequelize.define('Book', {
        title: {
            type: DataTypes.STRING,
            allowNull: false, // disallow null
            validate: {
                notEmpty: {
                    msg: 'Please provide a title.'
                }
            }
        },
        author: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                // is: ["^[a-z]+$", 'i'],
                notEmpty: {
                    msg: "Please provide an author's name."
                }
            }
        },
        genre: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: "Please provide a literary genre (e.g. Classic, SciFi. etc..)."
                }
            }
        },
        year: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                isNumeric: {
                    msg: 'Please enter a year - numbers only.'
                }
            }
        }
    });
    Book.associate = function (models) {
        //associations can be defined here
    }
    return Book;
};