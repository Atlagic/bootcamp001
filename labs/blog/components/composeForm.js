import React from "react";

class ComposeForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "",
            content: ""
        };

        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleContentChange = this.handleContentChange.bind(this);
        this.saveHandler = this.saveHandler.bind(this);
    }

    handleTitleChange(event) {
        let value = event.target.value;

        this.setState({
            title: value
        });
    }

    handleContentChange(event) {
        let value = event.target.value;

        this.setState({
            content: value
        });
    }

    saveHandler(){
        this.props.onSave({
            title: this.state.title,
            content: this.state.content
        });
    }

    render() {
        return (
            <div>
                <label htmlFor="title">Title:</label><br />
                <input type="text" value={this.state.title} onChange={this.handleTitleChange} name="title" /><br />
                <label htmlFor="content">Content:</label><br />
                <textarea value={this.state.content} onChange={this.handleContentChange} name="content" /><br />
                <button onClick={this.saveHandler}>Save</button>
            </div>);
    }
}

export default ComposeForm;