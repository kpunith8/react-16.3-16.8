import React, { Component, createContext } from 'react';

const ThemeContext = createContext("blue");
const { Provider, Consumer } = ThemeContext;

class ContextExample extends Component
{
  render() {
    return(
      <Provider value='blue'>
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

export default ContextExample;
