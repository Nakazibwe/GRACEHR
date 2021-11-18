/* eslint-disable no-undef */
const express = require('express');
const mongoose = require('mongoose');

const TeacherSchema = new mongoose.Schema({
  firstname: {
    type: String,
    trim: true,
    required: true,
  },
  lastname: {
    type: String,
    trim: true,
    required: true,
  },
  teacherdob: {
    type: Date,
    trim: true,
    required: true,
  },
  district: {
    type: String,
    trim: true,
    required: true,
  },
  experience: {
    type: String,
    trim: true,
    required: true,
  },
  nationality: {
    type: String,
    trim: true,
    required: true,
  },
  gender: {
    type: String,
    trim: true,
    required: true,
  },
  qualification: {
    type: String,
    trim: true,
    required: true,
  },
});
module.exports = mongoose.model('TeacherReg', TeacherSchema);
