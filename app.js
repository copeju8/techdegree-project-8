//Entry point - create and retrieve data from db
const Sequelize = require('sequelize');
// const sqlite = require('sqlite');
const express = require('express');
const bodyParser = require('body-parser');
const Book = require("./models").Book;
const db = require('./config/config');
const app = express();
const path = require('path');

// const sequelizeModels = require('./models').sequelize;

app.use(express.json());
app.use(express.urlencoded({ extended: false}));

app.set('view engine', 'pug'); 

app.get('/', (req, res) => {                
  res.redirect('/Books');      
});  

app.use((req, res, next) => {
  const error = new Error('Sorry, your request is not working!');
  error.status = 404
  next(error);
});

app.use((error, req, res, next) => {
  res.locals.error = error;
  res.status(error.status);
  res.render('error');
});



    const PORT = process.env.PORT || 3000;
      app.listen(PORT, () =>  {
        console.log(`application is running on port ${PORT}` );
    });


