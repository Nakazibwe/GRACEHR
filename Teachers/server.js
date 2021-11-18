/* eslint-disable prefer-template */
/* eslint-disable no-path-concat */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable no-console */
/* eslint-disable indent */
/* eslint-disable no-unused-vars */
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const app = express();

// Assigning port.
const port = 3000;

// Configurations.
app.set('view engine', 'pug');
app.set('views', path.join(__dirname + '/views'));

// require dotenv.
require('dotenv').config();

// Mongoose  connection.
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
});

mongoose.connection
    .on('open', () => {
        console.log('Mongoose connection is now open');
    })
    .on('error', (err) => {
        console.log(`Connection error: ${err.message}`);
    });

// Middleware.
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname + '/public')));
app.use('/public/imagefiles', express.static(__dirname + '/public/imagefiles'));

// Requiring the routes.
const TeacherRegRoutes = require('./routes/TeachersRegRoutes');

// Requiring the models.
const TeacherReg = require('./models/TeachersRegModel');

// Routes
app.use('/', TeacherRegRoutes);



// Listening port. 
app.listen(port, () => {
    console.log(`We are now Live on port ${port}`);
});
