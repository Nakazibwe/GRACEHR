/* eslint-disable no-empty */
/* eslint-disable no-console */
const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();

// Requiring collection.
const TeacherReg = require('../models/TeachersRegModel');

// Route to get the registration form.
router.get('/', (req, res) => {
  res.render('index');
});

// Route to post registration form.
router.post('/', async (req, res) => {
  try {
    const teacherReg = new TeacherReg(req.body);
    
    await teacherReg.save((err) => {
      if (err) {
        throw err;
      }
      res.redirect('/');
    });
  } catch (error) {
    res.status(400).send('Cannot send data to DB');
    console.log(error);
  }
});

module.exports = router;
