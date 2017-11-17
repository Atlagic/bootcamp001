import { Component } from "react";

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { error: null, errorInfo: null };
    }

    // Component lifecycle methods

    componentDidCatch(error, errorInfo) {
        // Catch errors in any components below and re-render with error message
        this.setState({
            error: error,
            errorInfo: errorInfo
        });
    }

    // Helper methods

    renderErrorView() {
        const myStyle = { whiteSpace: "pre-wrap" };
        return (
            <div>
                <h2>Something went wrong.</h2>
                <details style={myStyle}>
                    {this.state.error && this.state.error.toString()}
                    <br />
                    {this.state.errorInfo.componentStack}
                </details>
            </div>
        );
    }

    // Component render method

    render() {
        // If error is null that means that we 
        // don't have error so just render children
        if (this.state.errorInfo == null) {
            // Normally, just render children
            return this.props.children;
        }

        // Error path
        return this.renderErrorView();
    }

}

export default ErrorBoundary;
