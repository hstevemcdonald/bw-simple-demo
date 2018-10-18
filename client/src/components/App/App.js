import React from 'react';
import Todos from '../Todos/Todos';
import AddTodo from '../../components/AddTodo/AddTodo';

import './App.css';

const App = props => {
  return (
    <div className="App container">
      <div className="App content">
        <div className="App contentBox">
          <AddTodo {...props} />
        </div>
        <div className="App contentBox">
          <Todos onDelete={props.onDelete} />
        </div>
      </div>
    </div>
  );
};

export default App;
