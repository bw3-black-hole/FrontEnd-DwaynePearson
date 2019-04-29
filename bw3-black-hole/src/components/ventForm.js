import React, { Component } from 'react'

export default class ventForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            topic: '',
            body: ''
        };
    };

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();

    }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
                Topic:
                <input
                    type="text"
                    placeholder="topic"
                    value={this.state.topic}
                />
                <textarea
                    type="text"
                    value={this.state.body}
                    onChange={this.handleChange}
                />
            <button type="Submit">Submit</button>
            <button>Organize</button>
      </form>
    )
  }
}
