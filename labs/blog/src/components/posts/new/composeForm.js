import React, { Component } from "react";

class ComposeForm extends Component {
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

    saveHandler() {
        this.props.onSave({
            title: this.state.title,
            content: this.state.content
        });
    }

    render() {
        const { title, content } = this.state;

        return (
            <div>
                <label htmlFor="title">Title:</label><br />
                <input type="text" value={title}
                    name="title"
                    onChange={this.handleTitleChange} /><br />

                <label htmlFor="content">Content:</label><br />
                <textarea value={content}
                    name="content"
                    onChange={this.handleContentChange} /><br />

                <button onClick={this.saveHandler}>Save</button>
            </div>);
    }
}

export default ComposeForm;