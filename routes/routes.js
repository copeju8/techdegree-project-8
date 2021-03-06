// Configures the Sequelize ORM
const express = require('express');
const app = express();
// const Book = app.get("models").Book;


//Specify path to pug
const path = require('path');

//Set Public folder via route /static
app.use('/static', express.static(path.join(__dirname, '../public')));

//Body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
  extended: true
}));

//Sequelize DB object typical way to get Sequelize DB object
app.set('models', require('../models'));

//Import Sequelize module to use Sequelize.Op in search action and lets us chain together logical statements
const Sequelize = require('sequelize');

app.get('/', (req, res, next) => {
  res.redirect('/books');
});


//Find book list
app.get('/books', (req, res, next) => {
  const Book = app.get('models').Book;

  Book.findAll()
    .then(bookList => {
      res.render('index', {
        bookList: bookList
      });
    })
    .catch(err => console.log(err))
});

//Create new book 
app.get('/books/new', (req, res, next) => {
  res.render("new-book");
});

//ROUTE: defining post /books/new route
app.post("/books/new", (req, res) => {
  const Book = app.get('models').Book;
  Book.create({
      title: req.body.title,
      author: req.body.author,
      genre: req.body.genre,
      year: req.body.year,
    })
    .then(() => {
      res.redirect("/books");
    })
    .catch(err => {
      if (err.name === "SequelizeValidationError") {
        res.render("new-book", {
          book: Book.build(req.body),
          errors: err.errors
        });
      } else {
        throw err;
      }
    })
    .catch(err => {
      res.render("error", {
        err
      });
    });
});

//ROUTE: Define route to display update form
app.get("/books/:id", (req, res, next) => {
  const Book = app.get("models").Book;
  Book.findByPk(req.params.id)
    .then(function (book) {
      if (book) {
        res.render('update-book', {
          book: book
        });
      } else {
        next({
          status: 400,
          message: " This book is not available"
        })
      }
    })
    .catch((err) => {
      const error = new Error("Non-existent book - please click on home link and try again.");
      error.status = 400;
      next(error);
    })
});

//Update book info into database
app.post("/books/:id", (req, res) => {
  const Book = app.get("models").Book;
  Book.findByPk(req.params.id)
    .then(function (book) {
      if (book) {
        return book.update(req.body)
      }
    })
    .then(function () {
      res.redirect("/books");
    })
    .catch(err => {
      if (err.name === "SequelizeValidationError") {
        const book = Book.build(req.body);
        book.id = req.params.id;
        res.render("update-book", {
          book: book,
          title: book.title,
          author: book.author,
          genre: book.genre,
          year: book.year,
          errors: err.errors
        })
      } else {
        throw err;
      }
    })
    .catch(err => {
      res.render("error", {
        err
      });
    });
});

/* Delete book form. */
app.post("/books/:id/delete", (req, res, next) => {
  const Book = app.get("models").Book;
  Book.findByPk(req.params.id)
    .then(book => {
      if (book) {
        return book.destroy();
      } else {
        res.send(404);
      }
    })
    .then(() => {
      res.redirect("/books");
    })
    .catch(err => {
      const error = new Error("Server Error");
      error.status = 500;
      next(error);
    });
});

module.exports = app;