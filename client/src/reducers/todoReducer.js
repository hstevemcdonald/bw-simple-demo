import { ADD_TODO, DELETE_TODO, FETCH_TODOS } from '../constants/action-types';

const initialState = {
  todos: []
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return { todos: [...state.todos, action.payload] };
    case DELETE_TODO:
      return { todos: state.todos.filter(todo => todo.id !== action.payload) };
    case FETCH_TODOS:
      return { todos: action.payload };
    default:
      return state;
  }
};

export default postReducer;
