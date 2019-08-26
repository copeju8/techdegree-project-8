//Configures the Sequelize ORM

const Sequelize = require('sequelize');

const db = {
  sequelize,
  Sequelize,
  models: {},
};

db.models.Book = require('./models/book.js.js')(sequelize);
// import new model
// db.models.Person = require('./models/person.js')(sequelize);

module.exports = db;