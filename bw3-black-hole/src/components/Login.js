import React from 'react';
import Loader from 'react-loader-spinner';
import { connect } from 'react-redux';

class Login extends React.Component {
    state = {
        credentials: {
            username: '',
            password: '',
            // name: '',
            // email: '',
            // email2: ''
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
        this.props
            .login(this.state.credentials)
            .then(() => this.props.history.push('/protected'));
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
                {/* <br />
                    <h2>SignUp Below</h2>
                <br />
                <form onSubmit={this.signUp}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        value={this.state.credentials.fullName}
                        onChange={this.handleChange}
                    />
                    <br />
                    <input
                        type="email"
                        name="email"
                        placeholder="email"
                        value={this.state.credentials.email}
                        onChange={this.handleChange}
                    />
                    <br />
                    <input
                        type="email"
                        name="email2"
                        placeholder="verify email"
                        value={this.state.credentials.email2}
                        onChange={this.handleChange}
                    />
                    <br />
                    <button>{this.props.isLoggingIn ? (
                            <Loader type="TailSpin" />
                        ) : ( 
                            'Sign up'
                        )}</button>
                </form> */}
            </div>
        );
    }


}    

const mapStateToProps = state => {
    return {
        isLoggingIn: state.isLoggingIn
    };
};

export default connect(mapStateToProps, { Login })(Login);