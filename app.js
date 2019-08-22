const Sequelize = require('sequelize');  
const sequelize = new Sequelize({books});

    // dialect: 'sqlite',
    // storage: 'library.db'
class books extends Sequelize.Model{}
books.init({
    title: Sequelize.STRING
}, { sequelize });


// const express = require('express');
// const app = express();

// async IIFE
(async () => {

await books.sync();

try{

}   catch(error)    {
    console.error('Error connecting to the database: ', error);
    }   
}) ();


const portNumber = 3000;
app.listen(portNumber);
console.log("App start on localhost at port" + portNumber);