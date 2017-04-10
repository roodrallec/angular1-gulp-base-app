const express = require('express');
const config = require('./config');
const conversionService = require('./services/conversion-service');

const router = express.Router();

function getConversions(req, res) {
  return conversionService.getConversions().then((err, conversions) => {
    res.json(conversions);
  }).catch(res.send);
}

function postConvertPdf(req, res, next) {
  const file = req.files.file;
  const timeout = config.timoutMs.pdf;

  setTimeout(() => {
    next();
  }, timeout);

  return conversionService.convert(file, 'pdf').then((text) => {
    res.json({ text });
  }).catch(res.send);
}

function postConvertHtml(req, res, next) {
  setTimeout(() => {
    next();
  }, config.timeoutMs.html);

  return conversionService.convert(req, 'html').then((text) => {
    res.json({ text });
  }).catch(res.send);
}

router.get('/conversions', getConversions);
router.post('/convertPdf', postConvertPdf);
router.post('/convertHtml', postConvertHtml);

module.exports = router;
