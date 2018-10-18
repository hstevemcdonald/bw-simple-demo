import axios from 'axios';

import {
  ADD_TODO,
  DELETE_TODO,
  FETCH_TODOS,
  TODO_API_URL
} from '../constants/action-types';

const addTodoSuccess = todo => ({ type: ADD_TODO, payload: todo });
export const addTodo = todo => {
  return dispatch => {
    return axios.post(`${TODO_API_URL}/todo`, todo).then(response => {
      dispatch(addTodoSuccess(response.data));
    });
  };
};

const deleteTodoSuccess = id => ({ type: DELETE_TODO, payload: id });
export const deleteTodo = id => {
  return dispatch => {
    return axios.delete(`${TODO_API_URL}/todo/${id}`).then(response => {
      dispatch(deleteTodoSuccess(id));
    });
  };
};

const getAllTodosSuccess = todos => ({
  type: FETCH_TODOS,
  payload: todos
});
export const getAllTodos = () => {
  return dispatch => {
    return axios
      .get(`${TODO_API_URL}/todo`)
      .then(response => {
        dispatch(getAllTodosSuccess(response.data));
      })
      .catch(() => {
        dispatch(getAllTodosSuccess([]));
      });
  };
};
