import React from 'react'

const Counter = (WrapperComponent, { initialCount }) => {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: this.props.initialCount,
      };

      this.incrementCount = this.incrementCount.bind(this);
    }

    incrementCount() {
      this.setState({ count: this.state.count + 1 });
      //const lapse = Date.now() - this.state.count;
      //setInterval(() => this.setState({ count: Date.now() - lapse }), 1000);
    }

    render() {
      return (
        <WrapperComponent increment={this.incrementCount} count={this.state.count} {...this.props} />
      );
    }
  };
}

export default Counter
