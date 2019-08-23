//Create and retrieve data from db

'use strict';
const Sequelize = require('sequelize');


    (async () => {
        await db.sequelize.sync({ force: true });

        try {
            const books = await Books.create ({  })


        } catch (error)  {
          if (error.name === 'SequelizeValidationError') {
            const errors = error.errors.map(err => err.message);
            console.error('Validation errors: ', errors);
          } else {
            throw error;
          }   
        }
    }) ();

    const express = require('express');     //Access all the methods and properties of the Express Module
    const bodyParser = require('body-parser');
    
    const app = express();                  //Create an express application that returns an express application - extend this app using (routes/middleware)
    
    'use strict';                           //The purpose of "use strict" is to indicate that the code should be executed in "strict mode".
                                            //With strict mode, you can not, for example, use undeclared variables.
    
    let jsonData = require('./Data/data.json');                    
    let projects = jsonData.projects
    
    app.use(bodyParser.urlencoded({ extended: false}));     //Body-parser turns string into usable data for our application/ call the body 
    
    app.set('view engine', 'pug');              //Tells express which template to use - the pug template found in directory views
    
                                                //Getting routes, loading the content (e.g. index page) - asking to view or get a webpage (the URL) 
    app.get('/', (req, res) => {                //Takes callback with two parameters.
        res.render('index', { projects });      //Render's the visitor's route and initiates the pug file/JavaScript template language from the view directory
    });  
    
    
    app.use('/static', express.static('public'));       //Requires a middleware- handles data and hands it off
    app.post('/index', (req, res) => {   
        res.render('index');
    });  
    
                                                //Getting routes, loading the content (e.g. about page) - asking to view or get a webpage (the URL) 
    app.get('/about', (req, res) => {   
        res.render('about');
    });  
    app.use('/static', express.static('public'));       //Requires a middleware- handles data and hands it off
    app.post('/about', (req, res) => {   
        res.render('about');
    });  
    
                                                    //Getting routes, loading the content (e.g. individual page) - asking to view or get a webpage (the URL) 
    app.get('/projects/:id', (req, res) => { 
        const{id}= req.params
        const project = projects[id]  
        res.render('project', {project} );
    });  
    
    app.use('/projects', express.static('public'));       //Requires a middleware- handles data and hands it off
    app.post('/projects', (req, res) => {   
        res.render('/project');
    });  
    
    //Handling Errors from get requests
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
    
    app.listen(3000, () =>  {                                               //Set up developer server using the listening method with port - an express app
        console.log('The application is running on localhost:3000!')        //Send request through local host
    })
    
    






   //The associate() method is called in the db/index.js file after each model is imported into the Sequelize instance. 
   //This allows code within the associate() method to access any of the available models.

    Books.associate = (models) =>  {
       Books.hasMany(models.Books);
    };


app.set('view engine', 'pug')

app.get('/', function (req, res) {
    res.render('index', { title: 'Hey', message: 'Hello there!' })
  })
