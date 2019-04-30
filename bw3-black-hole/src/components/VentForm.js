import React, { Component } from 'react';import { connect } from 'react-redux';
import { addNewVent, toggleVent } from '../actions';

import { Button } from 'reactstrap';

class VentForm extends Component {
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
        this.props.addVent(this.state);
        this.setState({ topic: '', body: '' })
    }

    toggleVent = (e, index) => {
        e.preventDefault();
        this.props.toggleVent(index);
    }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
                Topic:
                <input
                    name="topic"
                    type="text"
                    placeholder="topic"
                    value={this.state.topic}
                    onChange={this.handleChange}
                    
                />
                <br />
                <textarea
                    name="body"
                    type="text"
                    placeholder="description..."
                    rows="12"
                    cols="50"
                    value={this.state.body}
                    onChange={this.handleChange}
                />
                <br />
            <Button type="Submit">Submit</Button>
            <Button>Organize</Button>
      </form>
    )
  }
}

const mapStateToProps = state => {
    return {
        vents: state.vents
    };
};

export default connect(
    mapStateToProps,
    { addNewVent, toggleVent }
)(VentForm);
