const Sequelize = require('sequelize');  
const sequelize = new Sequelize({Books});

    // dialect: 'sqlite',
    // storage: 'library.db'
class Books extends Sequelize.Model{}
Books.init({
    title: Sequelize.STRING,
    author: Sequelize.STRING,
    genre: Sequelize.STRING,
    year: Sequelize.integer,
    id: Sequelize.integer,
}, { sequelize });


// const express = require('express');
// const app = express();

// async IIFE
(async () => {

await Books.sync({ force: true});

try{

}   catch(error)    {
    console.error('Error connecting to the database: ', error);
    }   
}) ();


const portNumber = 3000;
app.listen(portNumber);
console.log("App start on localhost at port" + portNumber);