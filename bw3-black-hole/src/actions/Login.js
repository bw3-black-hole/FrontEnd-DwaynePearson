import React from 'react';
import { connect } from 'react-redux';

class Login extends 'React.Component' {
    state = {
        credentials: {
            username: '',
            password: ''
        }
    };

    handleChange = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        });
    };

    render() {
        return {
            <div>
                <h2>Test</h2>
            </div>
        }
    }


}    

export default Login;