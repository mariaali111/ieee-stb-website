import React from "react";

export default class AppErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            minHeight: "100vh",
            background: "#050806",
            color: "#f5f7f5",
            padding: "48px",
            fontFamily: "system-ui, sans-serif",
          }}
        >
          <h1 style={{ color: "#4ade80" }}>Website runtime error</h1>
          <p>The page loaded, but the React application encountered an error.</p>
          <pre style={{ whiteSpace: "pre-wrap", color: "#c5cbc6" }}>
            {String(this.state.error?.message || this.state.error)}
          </pre>
        </div>
      );
    }
    return this.props.children;
  }
}
