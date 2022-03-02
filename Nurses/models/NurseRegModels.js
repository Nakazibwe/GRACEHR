/* eslint-disable no-unused-vars */
const express = require('express');
const mongoose = require('mongoose');

// Project Schema.
const NurseRegSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
    trim: true,
  },
  lastname: {
    type: String,
    required: true,
    trim: true,
  },
  dob: {
    type: Date,
    required: true,
    trim: true,
  },
  district: {
    type: String,
    required: true,
    trim: true,
  },
  experience: {
    type: String,
    required: true,
    trim: true,
  },
  nationality: {
    type: String,
    required: true,
    trim: true,
  },
  gender: {
    type: String,
    required: true,
    trim: true,
  },
  qualification: {
    type: String,
    required: true,
    trim: true,
  },

});
module.exports = mongoose.model('NurseReg', NurseRegSchema);
