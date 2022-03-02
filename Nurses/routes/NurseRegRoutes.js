/* eslint-disable no-console */
const express = require('express');
const mongoose = require('mongoose');

// Require the model.
const NurseReg = require('../models/NurseRegModels');

const router = express.Router();

// get route.
router.get('/', (req, res) => {
  res.render('index');
});

// post route.

router.post('/', async (req, res) => {
  try {
    const nurseReg = new NurseReg(req.body);
    
    await nurseReg.save((err) => {
      if (err) {
        throw err;
      }
      res.redirect('/');
    });
  } catch (error) {
    console.log(error);
    res.status(400).send('Data not sent to DB');
  }
});
module.exports = router;

