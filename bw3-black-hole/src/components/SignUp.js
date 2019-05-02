import React, { Component } from 'react';
import { Loader } from 'react-loader-spinner';
import { connect } from 'react-redux';

export class SignUp extends Component {
    state = {
        signup: {
            fullName: '',
            email: '',
            email2: ''
        }
    }

    handleChange = e => {
        this.setState({
            signup: {
                ...this.state.signup,
                [e.target.name]: e.target.value
            }
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        
    };
    
    render() {
        return (
            <>           
                <h2>SignUp Below</h2>
                <br />
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        name="fullName"
                        placeholder="Full Name"
                        value={this.state.signup.fullName}
                        onChange={this.handleChange}
                    />
                    <br />
                    <input
                        type="email"
                        name="email"
                        placeholder="email"
                        value={this.state.signup.email}
                        onChange={this.handleChange}
                    />
                    <br />
                    <input
                        type="email"
                        name="email2"
                        placeholder="verify email"
                        value={this.state.signup.email2}
                        onChange={this.handleChange}
                    />
                    <br />
                    <button>                    {this.props.isLoggingIn     ? (
                            <Loader type="TailSpin" />
                        ) : ( 
                            'Sign up'
                        )}
                    </button>
                </form>
            </>
        );
    };
}

const mapStateToProps = state => {
    return {
  
    }
  }
  
export default connect(mapStateToProps, {})(SignUp);

