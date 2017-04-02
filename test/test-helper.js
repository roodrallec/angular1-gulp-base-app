const rp = require('request-promise');
const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const chaiAsPromised = require('chai-as-promised');
const server = require('../server');
const config = require('../server/config');

chai.use(chaiAsPromised);
chai.use(sinonChai);

Object.assign(global, { config, server, chai, sinon, expect: chai.expect });

global.request = function request(url, method = 'GET', body = {}) {
  return rp({
    uri: `http://localhost:${config.expressPort}${url}`,
    method,
    body,
    json: true,
    timeout: 1000,
  });
};
