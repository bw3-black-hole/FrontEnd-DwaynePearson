import React from 'react';
import Loader from 'react-loader-spinner';
import { connect } from 'react-redux';
import { login } from '../actions';

class Login extends React.Component {
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

    login = e => {
        e.preventDefault();
        this.props.login(this.state.credentials)
            .then(() => this.props.history.push('/vents'));
    };

    render() {
        return (
            <div>
                <form onSubmit={this.login}>
                    <input
                        type="text"
                        name="username"
                        placeholder="username"
                        value={this.state.credentials.username}
                        onChange={this.handleChange}
                    />
                    <br />
                    <input
                        type="password"
                        name="password"
                        placeholder="password"
                        value={this.state.credentials.password}
                        onChange={this.handleChange}
                    />
                    <br />
                    <button>
                        {this.props.isLoggingIn ? (
                            <Loader type="TailSpin" />
                        ) : ( 
                            'Log In'
                        )}
                    </button>
                </form>
            </div>
        );
    }


}    

const mapStateToProps = state => {
    return {
        isLoggingIn: state.isLoggingIn
    };
};

export default connect(mapStateToProps, { login })(Login);