import React, { Component, createContext } from 'react';

export const themes = {
  light: {
    foreground: '#000000',
    background: '#eeeeee',
  },
  dark: {
    foreground: '#ffffff',
    background: '#222222',
  },
};

const ThemeContext = createContext({
  theme: themes.dark,
  toggleTheme: () => {},
});

const { Provider, Consumer } = ThemeContext;

class NestedContext extends Component {
  constructor(props) {
    super(props);

    this.toggleTheme = () => {
      this.setState(state => ({
        theme:
          state.theme === themes.dark
            ? themes.light
            : themes.dark,
      }));
    };

    // State also contains the updater function so it will
    // be passed down into the context provider
    this.state = {
      theme: themes.light,
      toggleTheme: this.toggleTheme,
    };

    this.toggleTheme = this.toggleTheme.bind(this);
  }

  render() {
    // The entire state is passed to the provider
    return (
      <Provider value={this.state}>
        <Content />
      </Provider>
    );
  }
}

const Content = () => {
  return (
    <div>
     <Consumer>
      {({theme, toggleTheme}) => (
        <button
          onClick={toggleTheme}
          style={{backgroundColor: theme.background}}>
          Toggle Theme
        </button>
      )}
    </Consumer>
    </div>
  );
}

export default NestedContext;