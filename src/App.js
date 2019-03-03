import React, { Component } from 'react';
import './App.css';
import ContextHOC from './HOC/ContextHOC';
import ContextSample from './Context/ContextSample';
import NestedContext from './Context/NestedContext';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <ContextHOC /> */}
        {/* <NestedContext /> */}
      </div>
    );
  }
}

export default App;
