import React from "react";

class Timer extends React.Component{
    constructor(props){
        super(props);

        this.state = { mountTime: "pending..."};
    }

    componentDidMount(){
        setInterval(()=>{
            this.setState({
                mountTime: new Date().toTimeString()
            });
        }, this.props.interval);


    }

    render(){
        return <h4>Current time: {this.state.mountTime}</h4>;
    }
}

export default Timer;