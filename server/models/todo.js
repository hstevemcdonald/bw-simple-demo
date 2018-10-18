let todos = [];

const add = todo => {
  if (todo && todo.id) {
    todos.push(todo);
  }
  return todo;
};

const deleteById = id => {
  let origLength = todos.length;
  todos = todos.filter(todo => todo.id !== id);
  if (origLength == todos.length) {
    return false;
  } else {
    return true;
  }
};

const getAll = () => todos;

module.exports = {
  add,
  deleteById,
  getAll
};
