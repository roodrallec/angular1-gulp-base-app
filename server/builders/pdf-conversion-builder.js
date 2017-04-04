class PdfConversionBuilder {
  constructor(pdfConversion) {
    this.pdfConversion = pdfConversion;
  }

  build() {
    this.pdfConversion.convert();
  }
}

module.exports = PdfConversionBuilder;
