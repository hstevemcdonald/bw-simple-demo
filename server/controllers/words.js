const wordModel = require('../models/word');

const add = payload => wordModel.add(payload);

module.exports = {
  add
};
