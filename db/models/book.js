//Model in sync with db structure with customValidator https://sequelize.org/master/manual/models-definition.html#validations
const Sequelize = require('sequelize');

module.exports = (sequelize) => {
  class Book extends Sequelize.Model {}
  Book.init({
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
            msg: 'Please provide a title.',
            max: 30
        }
    },
    author: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            is: ["^[a-z]+$",'i'],
            notEmpty: true, 
            msg: 'Please provide a name of an author.',
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
            msg: 'Please enter a year - format XXXX.',        
        }      
    }, 
   // Model options object
    book: 'my_movies_table', // table name change
    sequelize 
  },
    }, { sequelize });
  
    return Book;
};  
