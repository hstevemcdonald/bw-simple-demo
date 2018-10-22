import React from 'react';
import Words from '../Words/Words';
import AddWord from '../../components/AddWord/AddWord';

import './App.css';

const App = props => {
  return (
    <div className="App container">
      <div className="App content">
        <div className="App contentBox">
          <AddWord {...props} />
        </div>
        <div className="App contentBox">
          <Words />
        </div>
      </div>
    </div>
  );
};

export default App;
