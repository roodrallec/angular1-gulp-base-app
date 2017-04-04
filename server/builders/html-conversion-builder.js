const HtmlConversionBuilder = require('../models/html-conversion')

class HtmlConversionBuilder {
  constructor(htmlConversion) {
    this.htmlConversion = htmlConversion;
  }

  build() {
    this.htmlConversion.convert();
  }
};

module.exports = HtmlConversionBuilder;
