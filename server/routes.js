const express = require('express');
const Conversion = require('./models').Conversion;
const ConversionBuilder = require('./builders/conversion-builder.js');

const router = express.Router();

function getConversion(req, res) {
  const query = Conversion.find({});
  query.exec((err, conversions) => {
    if (err) res.send(err);
    res.json(conversions);
  });
}

function postConversion(req, res) {
  const conversion = new Conversion(req.body);
  const builder = new ConversionBuilder();
  const text =
  newConversion.save((err, conversion) => {
    if (err) {
      res.send(err);
    } else {
      res.json({ message: 'Conversion added to queue', conversion });
    }
  });
}

router.get('/conversion', getConversion);
router.post('/conversion', postConversion);

module.exports = router;
