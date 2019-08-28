// Configures the Sequelize ORM
const Book  = require('../models/Book');
const express = require('express');
const router  = express.Router();
const path = require('path');
const Sequelize = require('sequelize')
const Op = Sequelize.Op;

// router.get("/", (req, res) => {   
//   res.redirect("/books");
// });

//Find book list
router.get('/', (req, res, next) => {  
    Book.findAll()
    .then(books => {
      res.render('index', {
        books: books 
      });     
    })             
    .catch(err => console.log(err))
});

// //Create book form
// router.get('/books/new', (req, res, next) => {
//   res.render("new-book");
// });

// router.post('/books/new', (req, res, next) => {
//   Book.create(req.body) 
//   .then(book => {
//     res.redirect("/books");
//   })
//   .catch(err => {
//     if (err.name === 'SequelizeValidationError') {
//     res.render("new-book", {
//       book: Book.build(req.body),
//       title: "New Book",
//       errors: err.errors
//     });
//     } else {
//       throw err
//     } 
//   }) 
//   .catch(err => {
//     next({status: 500, message: "Internal server error, try again."})
//   })
// });   

// //Update Create book form
// router.get('/:id', (req, res, next) => {
//   Book.findByPk(req.params.id)
//       .then(function (book) {
//         if (book) {
//          return book.update(req.body);      
//         }  
//       })
//       .then (() => {
//         res.redirect("/books");
//       })
//       .catch(err => {
//         if (err.name === 'SequelizeValidationError') {
//           const book = Book.build(req.body);
//           book.id = req.params.id;
//           res.render("update-book", {
//             book: book,
//             title: book.title,
//             author: book.author,
//             genre: book.genre,
//             year: book.year,
//             errors: err.errors
//           }) 
//         } else {
//           throw error;
//         }
//     })
//       .catch((err) =>  {
//         const error = new Error("Server Error");
//         error.status = 500;
//         next(error);
//       })   
//     });
    
//     /* Delete book form. */
//   router.post("/:id/delete",(req, res, next) => {
//     Book = findByPk(req.params.id)  
//       .then(book =>  {
//         if(book) {
//           return book.destroy();
//         } else {
//            res.send(404);
//         } 
//       })
//       .then(()  =>  {
//         res.redirect("/books");
//       })
//       .catch(err => {
//         const error = new Error("Server Error");
//         error.status = 500;
//         next(error);
//       });
//   });

    module.exports = router;

 