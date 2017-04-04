const express = require('express');
const timeout = require('connect-timeout');
const config = require('./config')
const conversionService = require('./services/conversion-service');

const router = express.Router();

router.get('/conversions', getConversions);
router.post('/convertPdf', postConvertPdf);
router.post('/convertHtml', postConvertHtml);

function getConversions(req, res) {
  return conversionService.getConversions().then((err, conversions) => {
    res.json(conversions);
  }).catch(res.send)
}

function postConvertPdf(req, res) {
  setTimeout(function() {
      next();
  }, config.timeoutMs.pdf)

  return conversionService.convert(req, 'pdf').then((text) => {
    return res.json({ text });
  }).catch(res.send)
}

function postConvertHtml(req, res) {
  setTimeout(function() {
      next();
  }, config.timeoutMs.html)

  return conversionService.convert(req, 'html').then((text) => {
    return res.json({ text });
  }).catch(res.send)
}

module.exports = router;
