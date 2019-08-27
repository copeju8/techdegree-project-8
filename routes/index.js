// Configures the Sequelize ORM
const Book  = require('../models/Book');
const express = require('express');
const router  = express.Router();
const path = require('path');
const Sequelize = require('sequelize')
const Op = Sequelize.Op;

router.get('/books', (req, res, next) => {  
    Book.findAll()
    .then(books => {
      res.render('index', {books: books });
      

    })             
    .catch(err => {
    console.log({err});
  });
});

router.get('/new', (req, res, next) => {
  Book.create({
    title: req.body.title,
    author: req.body.author,
    genre: req.body.genre,
    year: req.body.year
  })

  .then(book => {
    res.redirect("/books");
  })
  .catch(err => {
    const error = Error("Server Error");
    error.status = 500;
    next(error);
  }); 
});   

router.get('/:id', (req, res, next) => {
  Book.findByPk(req.params.id)
      .then(book => {
        if (book) {
          res.render("update-book", {
            book: book,
            title: body.title,
            author: body.author,
            genre: body.genre,
            year: body.year
          })       
      }  
      })
      .catch(err => {
        const error = Error("Server Error");
        error.status = 500;
        next(error);
      }); 
    });    
    /* Delete book form. */
  router.post("/:id/delete",(req, res, next) => {
    Book = findByPk(req.params.id)  
      .then(book =>  {
        if(book) {
          return book.destroy();
        } else {
           res.send(404);
        } 
      })
      .then(()  =>  {
        res.redirect("/books");
      })
      .catch(err => {
        const error = new Error("Server Error");
        error.status = 500;
        next(error);
      });
  });
  
    module.exports = router;

  