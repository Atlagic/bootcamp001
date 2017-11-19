import React, { Component } from "react";

class ComposeForm extends Component {
    constructor(props) {
        super(props);
        this.state = this.initState();
        this.bindEventHandlers();
    }

    initState() {
        return {
            title: "",
            content: ""
        };
    }

    bindEventHandlers() {
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleContentChange = this.handleContentChange.bind(this);
        this.saveHandler = this.saveHandler.bind(this);
    }

    handleTitleChange(event) {
        const value = event.target.value;

        this.setState({
            title: value
        });
    }

    handleContentChange(event) {
        const value = event.target.value;

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
            <div className="row">
                <form className="col s12" onSubmit={this.saveHandler}>
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="input_text" type="text" data-length="10"
                                value={title}
                                onChange={this.handleTitleChange} />
                            <label htmlFor="input_text">Post title</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <textarea id="textarea" className="materialize-textarea" data-length="120"
                                value={content}
                                onChange={this.handleContentChange} />
                            <label htmlFor="textarea">Post content</label>
                        </div>
                    </div>
                    <button className="btn waves-effect waves-light" type="submit" name="action">
                        Submit
                        <i className="material-icons right">send</i>
                    </button>
                </form>
            </div>
        );
    }
}

export default ComposeForm;
