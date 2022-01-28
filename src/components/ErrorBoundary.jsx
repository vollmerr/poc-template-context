import React from "react";

import { sendEvent } from "../services/analytics";

const initialState = { error: null };

// https://reactjs.org/docs/error-boundaries.html
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  // use for rendering fallback ui
  static getDerivedStateFromError(error) {
    return { error };
  }

  // use for logging to service etc
  componentDidCatch(error, errorInfo) {
    sendEvent("error", error);
  }

  render() {
    const { children } = this.props;
    const { error } = this.state;

    if (error) return <div>[ErrorBoundary] error: {JSON.stringify(error)}</div>;
    return children;
  }
}

export default ErrorBoundary;
