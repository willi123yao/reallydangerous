// Base64 WebSafe encoding and decoding helper functions

const utils = require('./utils');

const encode = (data) => {
  const enc = Buffer.from(data).toString('base64');
  return enc.split('/').join('_').split('+').join('-').split('=').join('');
}

const decode = (payload, buffer = false) => {
  return buffer ? utils.b64decode(payload) : utils.b64decode(payload).toString();
}

module.exports = {
  encode,
  decode
}