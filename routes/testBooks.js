const Sequelize = require('sequelize');

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
            allowNull: false,
        },
        runtime: { 
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        releaseDate: {
            type: Sequelize.DATEONLY,
            allowNull: false,    
        }, 
        isAvailableOnVHS: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
            defaultValue: false, //set default value
        },
    }, { sequelize });

    return Books;
};