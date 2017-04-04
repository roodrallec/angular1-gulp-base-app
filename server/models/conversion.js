const mongoose = require('mongoose');
// Conversion Model
// Schema:
// name: filename
// createdAt:  date of creation
// type: pdf/html
// status: conversion status
// data: conversion data
const CONVERSION_TYPES = ['pdf', 'html'];

const ConversionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  type: {
    type: String,
    required: true,
    enum: CONVERSION_TYPES,
  },
  status: {
    type: Number,
    required: false
  },
  data: {
    type: Schema.Types.Mixed,
    required: true
  },
  text: {
    type: String,
    required: false
  },
});

const Conversion = mongoose.model('conversion', ConversionSchema);

module.exports = Conversion
