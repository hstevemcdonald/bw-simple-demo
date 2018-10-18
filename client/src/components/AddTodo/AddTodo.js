import React from 'react';
import Form from '../common/Form/Form';

const Addtodo = props => {
  return (
    <div>
      <h4>Add Todo</h4>
      {props.formError ? <p>Please enter a title for your todo.</p> : ''}
      <br />
      <Form
        label="Title"
        attributes={{
          id: 'title',
          name: 'title'
        }}
        type="text"
        placeholder="Enter todo title"
        change={e => {
          props.change(e, 'title');
        }}
        value={props.title}
      />
      <Form
        label="Description"
        type="textarea"
        name="description"
        attributes={{
          id: 'description',
          rows: '10',
          cols: '40'
        }}
        placeholder="Enter todo description"
        change={e => {
          props.change(e, 'description');
        }}
        value={props.description}
      />
      <Form
        attributes={{
          id: 'addTodoButton'
        }}
        value="Add Todo"
        type="button"
        click={props.onSubmit}
      />
    </div>
  );
};

export default Addtodo;
