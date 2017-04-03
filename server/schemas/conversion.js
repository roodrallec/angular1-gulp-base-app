const mongoose = require('mongoose');
// Conversion Schema
// input the input file type (PDF / HTML)
// output the output file type (Text)
// data
const Schema = mongoose.Schema;
const ConversionSchema = new Schema({
  input: { type: String, required: true },
  output: { type: String, required: true },
  data: { type: Schema.Types.Mixed, required: true },
}, {
  versionKey: false,
});

ConversionSchema.methods.convert = function convert(conversionBuilder) {
  return conversionBuilder.call();
};

module.exports = ConversionSchema;
