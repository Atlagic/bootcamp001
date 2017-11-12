import React from "react";
import ReactDOM from "react-dom";
import "babel-polyfill";

class App extends React.Component {
    render() {
        return (
            <div>
                <h4>Belgrade Institute of Technology</h4>
                <h1>Hello from react!</h1>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("app"));