const PdfConversion = require('../models/pdf-conversion')

class PdfConversionBuilder() {
  constructor() {
    this.pdfConversion = new PdfConversion();
  }

  build() {
    this.pdfConversion.convert();
  }
};

module.exports = PdfConversionBuilder;
