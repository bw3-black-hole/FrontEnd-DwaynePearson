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

    handleLogin = e => {
        e.preventDefault();
        this.props.login(this.state.credentials)
        this.props.history.push('/vents')
    };

    render() {
        return (
            <div>
                <form onSubmit={this.handleLogin}>
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
                {this.props.error && <p className="error">{this.props.error}</p>}
            </div>
        );
    }


}    

const mapStateToProps = ({ isLoggingIn}) => ({
    isLoggingIn
})

export default connect(mapStateToProps, { login })(Login);