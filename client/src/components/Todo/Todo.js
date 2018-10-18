import React from 'react';
import Form from '../common/Form/Form';
import './Todo.css';

const Todo = props => {
  return (
    <div className="Todo">
      <p>Title: {props.title}</p>
      <p>
        <i>{props.description}</i>
      </p>
      <Form
        attributes={{
          todoid: props.id,
          id: `todoDeleteId${props.id}`
        }}
        value="Delete Todo"
        type="button"
        click={() => props.onDelete(props.id)}
      />
    </div>
  );
};

export default Todo;
