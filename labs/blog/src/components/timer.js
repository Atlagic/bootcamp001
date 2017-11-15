import React, { Component } from "react";

class Timer extends Component {
    constructor(props) {
        super(props);

        this.state = { mountTime: "Pending..." };
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                mountTime: new Date().toTimeString()
            });
        }, this.props.interval);
    }

    render() {
        return <h5>Current time: {this.state.mountTime}</h5>;
    }
}

export default Timer;
