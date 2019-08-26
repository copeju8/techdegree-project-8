//Model in sync with db structure with customValidator https://sequelize.org/master/manual/models-definition.html#validations

'use strict';
module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define('Book', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false, // disallow null
        validate: {
            notEmpty: true, 
            max: 30
        }
    },
    author: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            is: ["^[a-z]+$",'i'],
            notEmpty: true, 
            max: 25
        }      
    }, 
    genre: {
        type: Sequelize.STRING,
        allowNull: false, 
        validate: {
            isAlpha: true,                   
        }     
    }, 
    year: {
        type: Sequelize.INTEGER,
        allowNull: false, 
        validate: {
            isNumeric: true,          
        }      
    } 
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    },
    instanceMethods: {
      publishedAt: function() {
        return dateFormat(this.createdAt, "dddd, mmmm dS, yyyy, h:MM TT");
      },
      shortDescription: function(){ 
        return this.body.length > 30 ? this.body.substr(0, 30) + "..." : this.body;
      }
    }
  });
  return Book;
  v
};