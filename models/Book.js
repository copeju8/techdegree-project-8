//Model in sync with db structure with customValidator https://sequelize.org/master/manual/models-definition.html#validations

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
            validate: {
                notNull: {
                    msg: 'Please provide a value for "title"',
                },
                notEmpty: {
                    msg: ' Error - please re-enter' ,
                },
            },
        },
       author: { 
            type: Sequelize.STRING,
            allowNull: false,
            defaultValue: false,
            validate: {
                notNull: {
                    msg: "Please enter an author's name",
                },   
                notEmpty: {
                    msg: "Please provide a value for 'author'",
                },
            },    
        },
        genre: {
            type: Sequelize.STRING,
            allowNull: false,  
            defaultValue: false,
            validate: {
                notNull: {
                    msg: "Please enter an author's genre",
                },   
                notEmpty: {
                    msg: "Please provide a value for 'genre'",
                },
            }, 
        },    
        year: {
            type: Sequelize.INTEGER,
            allowNull: false,  
            defaultValue: false,
            validate: {
                notNull: {
                    msg: "Please enter a year - YYYY",
                },   
                notEmpty: {
                    msg: "Please provide a value for 'year'- YYYY",
                },
            }, 
        },    

    }, { sequelize });

    return Books;
};

Books.associate = (models) => {
    Books.belongsTo(models.Books);
};
