const rp = require('request-promise');
const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const chaiAsPromised = require('chai-as-promised');
const chaiHttp = require('chai-http');
const config = require('../server/config');

chai.use(chaiAsPromised);
chai.use(sinonChai);
chai.use(chaiHttp);

Object.assign(global, { config, chai, sinon, expect: chai.expect });

global.request = function request(url, method = 'GET', body = {}) {
  return rp({
    uri: `${config.expressServer}:${config.expressPort}${url}`,
    method,
    body,
    json: true,
    timeout: 1000,
    resolveWithFullResponse: true,
  });
};
