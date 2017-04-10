const Conversion = require('../models/conversion.js');
const HtmlConversionBuilder = require('../builders/html-conversion-builder.js');
const PdfConversionBuilder = require('../builders/pdf-conversion-builder.js');

export default {
  getConversions: () => {
    Conversion.find({});
  },

  convert: (request, type) => {
    const conversion = new Conversion(request);

    if (conversion.validateSync()) throw new Error(conversion.validateSync());

    switch (type) {
      case 'pdf':
        return new HtmlConversionBuilder(conversion).build();
      case 'html':
        return new PdfConversionBuilder(conversion).build();
      default:
        return conversion;
    }
  },
};
