import React, { Component } from 'react'

class BuggyCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    }

    this.onHandleClick = this.onHandleClick.bind(this);
  }

  onHandleClick() {
    this.setState(prevState => ({ counter: prevState.counter + 1 }))
  }

  render() {
    if (this.state.counter === 5) {
      // Simulate a JS error
      throw new Error('Counter Crashed!!!');
    }

    return (
      <div>
        <button onClick={this.onHandleClick}>{this.state.counter}</button>
      </div>
    )
  }
}

export default BuggyCounter
