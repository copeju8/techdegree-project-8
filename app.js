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

//Global error handler for page-not-found & non-existent route
app.use((req, res, next) => {
  const err = new Error('Page Not Found');
  err.status = 404;
  console.error(err);
  res.status(404);
  res.render('page-not-found');
});
//Logs server error
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500);
  res.render('error');
});



