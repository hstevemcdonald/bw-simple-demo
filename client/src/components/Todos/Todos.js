import React from 'react';
import { connect } from 'react-redux';

import Todo from '../Todo/Todo';
import './Todos.css';

const mapStateToProps = state => {
  return state.todos;
};

const Todos = props => {
  return (
    <div>
      <h4>Todos</h4>
      {props.todos && props.todos.length ? (
        props.todos.filter(todo => todo != null).map(todo => {
          return <Todo key={todo.id} {...todo} onDelete={props.onDelete} />;
        })
      ) : (
        <p>There are no todos!!!</p>
      )}
    </div>
  );
};

export default connect(
  mapStateToProps,
  null
)(Todos);
