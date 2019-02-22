import React, { Component, createContext } from 'react';

const ApplicationContext = createContext();
const { Provider, Consumer } = ApplicationContext;

const initialState = {
  users: ["Punith", "Ram"],
}

class ContextHOC extends Component {
  render() {
    return (
      <Provider value={initialState}>
        <Header />
        <Footer />
      </Provider>
    );
  }
}

const WithConsumer = BaseComponent => {
  return class extends Component {
    render() {
      return (
        <Consumer>
          {
            context => {
              return (
                <BaseComponent {...context} {...this.props} {...this.state} />
              );
            }
          }
        </Consumer>
      );
    }
  }
}

// HOC - Higher Order Component
const ComponentFromUI = ui => {
  return class extends Component {
    render() {
      return (
        <div>
          {ui}
          {this.props.users.map(user =>
            (
              <h3 key={user}> {user} </h3>
            )
          )}
        </div>
      );
    }
  }
}

const Header = WithConsumer(ComponentFromUI(<h1>Header</h1>));
const Footer = WithConsumer(ComponentFromUI(<h1>Footer</h1>));

export default ContextHOC;
