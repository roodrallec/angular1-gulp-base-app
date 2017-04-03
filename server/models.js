const mongoose = require('mongoose');
const ConversionSchema = require('./schemas/conversion');

function loadSchema(name, schema) {
  let model;
  try {
    model = mongoose.model(name, schema);
  } catch (error) {
    if (error.name !== 'OverwriteModelError') throw error;
    model = mongoose.model(name);
  }
  return model;
}

module.exports = {
  Conversion: loadSchema('conversion', ConversionSchema),
};
