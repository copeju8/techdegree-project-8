//Entry point - create and retrieve data from db
const Sequelize = require('sequelize');
const express = require('express');
const db = require('config/config.js');
const app = express();
const path = require('path');


(async () => {
  await db.sequelize.sync({ force: true });

  try {
    const book = await Book.create({ book });
    console.log(book.toJSON());


    // // New Person record
    // const newBook = await Book.create({
    //   firstName: 'Tom',
    //   lastName: 'Hanks',
    // });
    // console.log(book.toJSON());

  } catch (error) {
    if (error.name === 'SequelizeValidationError') {
      const errors = error.errors.map(err => err.message);
      console.error('Validation errors: ', errors);
    } else {
      throw error;
    }
  }
})();