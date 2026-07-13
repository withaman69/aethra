import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError() {
    return {
      hasError: true,
    };
  }

  componentDidCatch(error, errorInfo) {
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-[#050816]">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-red-400 mb-4">
              Something went wrong
            </h1>

            <button
              onClick={() => window.location.reload()}
              className="
                px-6
                py-3
                rounded-xl
                bg-cyan-500
                text-white
              "
            >
              Reload
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;