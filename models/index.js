//Configures the Sequelize ORM

const options = {
    dialect: 'sqlite',
    storage: 'library.db',  //Set the file path or storage engine
    define: {
        timestamps: false,
    },
};

//Loading books.js

const db = {
    sequelize,
    Sequelize,
    models: {},
};

//import new model and 
//The file exports the db object, which holds the Sequelize and database configurations, as well as all the models.

db.models.Books = require('./models/books.js')(sequelize);

module.exports = db;

