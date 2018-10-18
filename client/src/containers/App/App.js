import React, { Component } from 'react';
import { connect } from 'react-redux';
import uuidv1 from 'uuid';

import App from '../../components/App/App';
import { addTodo, deleteTodo } from '../../actions/index';

const mapDispatchToProps = dispatch => {
  return {
    addTodo: todo => dispatch(addTodo(todo)),
    deleteTodo: id => dispatch(deleteTodo(id))
  };
};

const newTodo = {
  id: null,
  title: '',
  description: ''
};

class AddTodoContainer extends Component {
  constructor(props) {
    super(props);
    this.state = newTodo;
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
  }

  onChangeHandler(e, key) {
    let newState = { ...this.state };
    newState[key] = e.target.value;
    this.setState(newState);
  }

  onDeleteHandler(id) {
    this.props.deleteTodo(id);
  }

  onSubmitHandler(e) {
    e.preventDefault();
    const { title, description } = this.state;

    if (!title) {
      let newState = { ...this.state };
      newState.formError = true;
      this.setState(newState);
      setTimeout(() => {
        let newState = { ...this.state };
        newState.formError = false;
        this.setState(newState);
      }, 3000);
      return;
    }

    const id = uuidv1();
    this.props.addTodo({
      id,
      title,
      description
    });
    this.setState(newTodo);
    document.getElementById('title').value = '';
    document.getElementById('description').value = '';
  }

  render(props) {
    return (
      <App
        change={this.onChangeHandler}
        onSubmit={this.onSubmitHandler}
        onDelete={this.onDeleteHandler}
        formError={this.state.formError}
        {...props}
      />
    );
  }
}

export default connect(
  null,
  mapDispatchToProps
)(AddTodoContainer);
