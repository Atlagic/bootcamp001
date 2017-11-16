import React from "react";

class Search extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            searchString: ""
        };

        this.inputChangeHandler = this.inputChangeHandler.bind(this);
        this.onSearchClick = this.onSearchClick.bind(this);
    }

    inputChangeHandler(event){
        const searchString = event.target.value;

        this.setState({
            searchString : searchString
        });

        if (this.props.instant){
            this.props.onSearchRequested(searchString);
        }
    }

    onSearchClick(){
        let searchString = this.state.searchString;
        this.props.onSearchRequested(searchString);
    }

    render(){
        return (
            <div>
                Filter blogs <input value={this.state.searchString} onChange={this.inputChangeHandler} />
                { !this.props.instant ? <button onClick={this.onSearchClick}>Search now!</button> : " instant search is on."}
            </div>
        );
    }
}

export default Search;