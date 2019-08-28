
//importing the express app established in routes/routes.js
const app = require('./routes/routes');

//apply our pug template
const path = require('path');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//establish our server
const portNumber = 3000;
app.listen(portNumber);
console.log("App started on localhost at port " + portNumber);






// const sequelize = require("./models").sequelize;
// const Op = require("sequelize").Op;
// const parser = require("body-parser");

// const port = 3000;
// const Book = require("./models").Book;
// const itemsPerPage = 25;

// app.set("view engine", "pug");
// app.use("/static", express.static("public"));

// app.use(express.json());
// app.use(express.urlencoded({
//   extended: false
// }));

// //Routes

// // Home Route redirect to book route
// app.get("/", (req, res) => {
//   res.redirect("/books");
// });

// //search from the search bar
// app.post("/books", (req, res) => {
//   res.redirect(`/books/?column=${req.body.column}&searchKeyWord=${req.body.searchKeyWord}&&page=1`);
// });

// // search books to get total number of pages.
// app.get("/books", (req, res) => {
//   const column = req.query.column || "title";
//   const searchKeyWord = req.query.searchKeyWord || "";
//   const page = req.query.page || 1;
//   Book.findAll({
//     where: {
//       [column]: {
//         [Op.like]: "%" + searchKeyWord + "%"
//       }
//     }
//   }).then(totalBooks => {
//     Book.findAll({
//         where: {
//           [column]: {
//             [Op.like]: "%" + searchKeyWord + "%"
//           }
//         },
//         offset: page * itemsPerPage - itemsPerPage,
//         limit: itemsPerPage
//       })
//       .then(books => {
//         if (!books || books.length === 0) {
//           const err = new Error("No books found");
//           throw err;
//         }
//         const AmtOfPages = Math.ceil(totalBooks.length / itemsPerPage);
//         res.render("routes", {
//           books,
//           AmtOfPages,
//           column,
//           searchKeyWord
//         });
//       })
//       .catch(err => {
//         res.render("error", {
//           err
//         });
//       });
//   });
// });

// //  show create new book form
// app.get("/books/new", (req, res) => {
//   const book = {
//     title: "",
//     author: "",
//     genre: "",
//     year: ""
//   }
//   // res.render("new-book", {
//   //   book: Book.build(req.body),
//   //   title: "New Book",
//   // });
//   res.render("new-book");
//   console.log("app.get");
// });

// app.post("/books/new", (req, res, next) => {
//   Book.create(req.body)
//     .then(book => {
//       console.log("router.one");
//       res.redirect("/books");
//     })
//     .catch(err => {
//       if (err.name === 'SequelizeValidationError') {
//         console.log("router.two");
//         res.render("new-book", {
//           book: Book.build(req.body),
//           title: "New Book",
//           errors: err.errors
//         });
//       } else {
//         console.log("router.three");
//         throw err
//       }
//     })
//     .catch(err => {
//       console.log("router.four");
//       res.render("error", err)
//     })
// });

// // // app.post("/books/new", (req, res) => {
// // //   const book = {
// // //     title: "",
// // //     author: "",
// // //     genre: "",
// // //     year: ""
// // //   }
// // //   res.redirect("/books", {book}); 
// // //   console.log("app.get");
// // // });


// // //post new book to database
// // // app.post("/books/new", (req, res) => {
// // //   console.log("app.zero");
// // //   Book.create(req.body)
// // //     .then(() => {
// // //       console.log("app.one");
// // //       // res.redirect("/books");
// // //     })
// // //     .catch(err => {
// // //       if (err.name === "SequelizeValidationError") {
// // //         console.log("app.two");
// // //         res.render("new-book", { errors: err.errors, book: req.body});
// // //       } else {
// // //         console.log("app.three");
// // //         throw err;
// // //       }
// // //     })
// // //     .catch(err => {
// // //       console.log("app.four");
// // //       res.render("error", { err });
// // //     });
// // // });

// // //show book detail form
// // app.get("/books/:id", (req, res) => {
// //   Book.findByPk(req.params.id)
// //     .then(book => {
// //       if (!book) {
// //         const err = new Error("Book not found");
// //         throw err;
// //       }
// //       res.render("update-book", {
// //         book,
// //         bookId: req.params.id
// //       });
// //     })
// //     .catch(err => {
// //       res.render("error", {
// //         err
// //       });
// //     });
// // });

// // //update book info into database
// // app.post("/books/:id", (req, res) => {
// //   Book.findByPk(req.params.id)
// //     .then(book => {
// //       if (book) {
// //         return book
// //           .update(req.body)
// //           .then(book => {
// //             res.redirect("/books");
// //           })
// //           .catch(err => {
// //             if (err.name === "SequelizeValidationError") {
// //               res.render("update-book", {
// //                 errors: err.errors,
// //                 book: req.body,
// //                 bookId: req.params.id
// //               });
// //             } else {
// //               res.render("error", {
// //                 err
// //               });
// //             }
// //           });
// //       } else {
// //         const err = new Error("The book doesn't exist");
// //         throw err;
// //       }
// //     })
// //     .catch(err => {
// //       res.render("error", {
// //         err
// //       });
// //     });
// // });

// // //Delete Book
// // app.post("/books/:id/delete", (req, res) => {
// //   Book.findByPk(req.params.id)
// //     .then(book => {
// //       if (book) {
// //         return book.destroy();
// //       } else {
// //         const err = new Error("The book doesn't exist");
// //         throw err;
// //       }
// //     })
// //     .then(book => {
// //       res.redirect("/books");
// //     })
// //     .catch(err => {
// //       res.render("error", {
// //         err
// //       });
// //     });
// // });

// //404 page not found error
// // app.use((req, res, next) => {
// //   let err = new Error("Page not found");
// //   err.status = 404;
// //   next(err);
// // });

// // app.use((err, req, res, next) => {
// //   res.locals.errors = err;
// //   res.status(err.status);
// //   if (err.message === "Page not found") {
// //     res.render("page-not-found");
// //   } else {
// //     res.render("error", {
// //       err
// //     });
// //   }
// // });

// //
// //table creation and port message
// //
// sequelize.sync().then(() => {
//   app.listen(port, () => {
//     console.log(`application running on port ${port}`);
//   });
// });