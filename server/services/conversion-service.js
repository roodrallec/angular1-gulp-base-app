const Conversion = require('./models/conversion-request.js')
const HtmlConversionBuilder = require('./builders/html-conversion-builder.js');
const PdfConversionBuilder = require('./builders/pdf-conversion-builder.js');

class ConversionService {
  constructor() {}

  getConversions() {
    return Conversion.find({});
  }

  convert(request, type) {
    const conversion = new Conversion(request);

    if (conversion.validateSync()) throw new Error('Conversion Request not valid');

    switch (type) {
      case 'pdf':
        return new HtmlConversionBuilder(conversion).build();
      case 'html':
        return new PdfConversionBuilder(conversion).build();
    }
  }
}

module.exports = new ConversionService();
