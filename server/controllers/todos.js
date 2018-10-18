const todoModel = require('../models/todo');

const add = todo => todoModel.add(todo);

const deleteById = id => todoModel.deleteById(id);

const getAll = () => todoModel.getAll();

module.exports = {
  add,
  deleteById,
  getAll
};
