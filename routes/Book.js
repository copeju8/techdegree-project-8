//Configures the Sequelize ORM
const Sequelize = require('sequelize');

const db = {
  sequelize,
  Sequelize,
  models: {},
};

db.models.Book = require('./models/Book.js')(sequelize);
db.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = db;
