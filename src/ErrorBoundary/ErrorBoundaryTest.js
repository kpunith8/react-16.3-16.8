import React from 'react'
import ErrorBoundary from './ErrorBoundary'
import BuggyCounter from './BuggyCounter'

const ErrorBoundaryTest = () => {
  return (
    <div>
      <ErrorBoundary>
        <p>These two counters are inside the same error boundary. If one crashes, the error boundary will replace both of them.</p>
        <BuggyCounter />
        <BuggyCounter />
      </ErrorBoundary>
      <hr />
      <p>These two counters are each inside of their own error boundary. So if one crashes, the other is not affected.</p>
      <ErrorBoundary><BuggyCounter /></ErrorBoundary>
      <ErrorBoundary><BuggyCounter /></ErrorBoundary>
    </div>
  )
};

export default ErrorBoundaryTest
