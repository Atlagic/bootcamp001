import React from "react";

class Search extends React.Component {
    constructor(props) {
        super(props);

        // Set initial
        this.state = { searchString: "" };

        // Bind event handlers
        this.onInputChanged = this.onInputChanged.bind(this);
        this.onSearchClicked = this.onSearchClicked.bind(this);
    }

    onInputChanged(event) {
        const searchString = event.target.value;
        this.setState({ searchString });

        const instantSearchEnabled = this.props.instant;

        if (instantSearchEnabled) {
            this.props.onSearchRequested(searchString);
        }

    }

    onSearchClicked() {
        let searchString = this.state.searchString;
        this.props.onSearchRequested(searchString);
    }

    render() {
        return (
            <div className="row">
                <input className="col s10"
                    type="text"
                    value={this.state.searchString}
                    onChange={this.onInputChanged} />
                <input className="btn waves-effect waves-light col s2"
                    type="button"
                    value="Search"
                    onClick={this.onSearchClicked} />
            </div>
        );
    }
}

export default Search;
