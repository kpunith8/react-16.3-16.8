import React, { Component, createContext } from 'react';

const ThemeContext = createContext("red");
const { Provider, Consumer } = ThemeContext;

class ContextSample extends Component
{
  render() {
    return(
      <Provider value='red'>
        <Toolbar />
      </Provider>
    );
  }
}

const Toolbar = (props) => {
  return(
    <ThemedButton />
  );
};


const ThemedButton = (props) => {
  return(
    <Consumer>
      {theme => <button style={{backgroundColor: theme}}>Sample Button</button>}
    </Consumer>
  );
};

export default ContextSample;
