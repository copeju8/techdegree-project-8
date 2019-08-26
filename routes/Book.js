const Book  = require('./db/models').Book;
const express = require('express');
const router  = express.Router();
const path = require('path');
const Sequelize = require('sequelize');


function find(id) {
    var matchedbooks = books.filter(function(book) { return book.id == id; });
    return matchedbooks[0];
}
  
/* GET books listing. */
router.get('/', function(req, res, next) { 
    Book.findAll().then(function(books) {
     res.render("books/index", {articles: article, title: "The Harry Potter Library"}) 
    });  
});
  
  /* POST create book. */
  router.post('/', function(req, res, next) {
    Book.create(req.body).then(function(book) {
    res.redirect("/books/" + book.id);
  });
})
  /* Create a new book form. */
  router.get('/new', function(req, res, next) {
    res.render("books/new", {book: Book(), title: "New Book"});
  });
  
  /* Edit book form. */
  router.get("/:id/edit", function(req, res, next){
    const book = find(req.params.id);  
  
    res.render("books/edit", {book: book, title: "Edit book"});
  });
  
  
  /* Delete book form. */
  router.get("/:id/delete", function(req, res, next){
    var book = find(req.params.id);  
    
    res.render("books/delete", {book: book, title: "Delete book"});
  });
  
  
  /* GET individual book. */
  router.get("/:id", function(req, res, next){
    var book = findById(req.params.id).then(function(book) {
    res.render("books/show", {book: book, title: book.title});
  });
})
  
  /* PUT update book. */
  router.put("/:id", function(req, res, next){
    var book = find(req.params.id);
    book.title = req.body.title;
    book.body = req.body.body;
    book.author = req.body.author;
    
    res.redirect("/books/" + book.id);    
  });
  
  /* DELETE individual book. */
  router.delete("/:id", function(req, res, next){
    var book = find(req.params.id);  
    var index = books.indexOf(book);
    books.splice(index, 1);
  
    res.redirect("/books");
  });

  
  
  module.exports = router;










// module.exports = {
//     'config': path.resolve('config', 'config.js')
// }

// const bodyParser = require('body-parser');

// const app = express();                  //Create an express application that returns an express application - extend this app using (routes/middleware)

// 'use strict';                           //The purpose of "use strict" is to indicate that the code should be executed in "strict mode".
//                                         //With strict mode, you can not, for example, use undeclared constiables.

// let list = require('./db/index.js');                    
// let projects = list.projects

// // create all tables... now!
// sequelize.sync() // will emit success or failure

// app.use(bodyParser.urlencoded({ extended: false}));     //Body-parser turns string into usable data for our application/ call the body 

// app.set('view engine', 'pug');              //Tells express which template to use - the pug template found in directory views

//                                             //Getting routes, loading the content (e.g. index page) - asking to view or get a webpage (the URL) 
// app.get('/', (req, res) => {                //Takes callback with two parameters.
//     res.render('index', { projects });      //Render's the visitor's route and initiates the pug file/JavaScript template language from the view directory
// });  


// app.use('/static', express.static('public'));       //Requires a middleware- handles data and hands it off
// app.post('/index', (req, res) => {   
//     res.render('index');
// });  

//                                             //Getting routes, loading the content (e.g. about page) - asking to view or get a webpage (the URL) 
// app.get('/about', (req, res) => {   
//     res.render('about');
// });  
// app.use('/static', express.static('public'));       //Requires a middleware- handles data and hands it off
// app.post('/about', (req, res) => {   
//     res.render('about');
// });  

//                                                 //Getting routes, loading the content (e.g. individual page) - asking to view or get a webpage (the URL) 
// app.get('/projects/:id', (req, res) => { 
//     const{id}= req.params
//     const project = projects[id]  
//     res.render('project', {project} );
// });  

// app.use('/projects', express.static('public'));       //Requires a middleware- handles data and hands it off
// app.post('/projects', (req, res) => {   
//     res.render('/project');
// });  

// //Handling Errors from get requests
// app.use((req, res, next) => {
//     const error = new Error('Sorry, your request is not working!');
//     error.status = 404
//     next(error);
// });

// app.use((error, req, res, next) => {
//     res.locals.error = error;
//     res.status(error.status);
//     res.render('error');
// });

// app.listen(3000, () =>  {                                               //Set up developer server using the listening method with port - an express app
//     console.log('The application is running on localhost:3000!')        //Send request through local host
// })
    
    





