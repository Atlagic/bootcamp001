import React from "react";

class Timer extends React.Component {
    constructor(props) {
        super(props);

        this.state = { mountTime: "pending...", onoff: false };
        this.handleClick = this.handleClick.bind(this);
    }

    startTimer(){
        return setInterval(() => {
            if (this.state.onoff) {
                this.setState({
                    mountTime: new Date().toTimeString()
                });
                this.props.onTimeElapsed(this.state.mountTime);
            }
        }, this.props.interval);
    }

    componentDidMount() {
        this.timerId = this.startTimer();
    }

    handleClick() {
        this.setState(
            (oldState) => ({ onoff: !oldState.onoff })
        );
    }

    render() {
        return (
            <div>
                <h4>Current time: {this.state.mountTime}</h4>
                <button onClick={this.handleClick}>{this.state.onoff ? "Stop" : "Start"}</button>
            </div>);
    }
}

export default Timer;