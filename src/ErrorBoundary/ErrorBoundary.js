import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      errorInfo: null,
    };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
  }

  render() {
    const { errorInfo, error } = this.state;

    if (errorInfo) {
      return (
        <div>
          <h2>Something went wrong!!</h2>
          <details style={{ whiteSpace: 'pre-wrap' }}>
            <div>{error && error.toString()}</div>
            {errorInfo.componentStack}
          </details>
        </div>
      );
    }

    // Render the component normally, if no errors
    return this.props.children;
  }
}

export default ErrorBoundary;
