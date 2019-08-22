const Sequelize = require('sequelize');  
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'library.db'
});

const express = require('express');
const app = express();

// async IIFE
(async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection to the database successful!');
    } catch (error) {
        console.error("Error connecting to the database: ", error);
    }
}) ();