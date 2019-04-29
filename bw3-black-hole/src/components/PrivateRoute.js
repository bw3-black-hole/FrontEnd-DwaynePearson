import React from 'react'
import { Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({ component: Component, errorStatusCode, ...rest }) => {
    return (
        <Route
            {...rest}
            render={() => {
                if (localStorage.getItem('token') && errorStatusCode !== 403) {
                    return <Component />;
                } else {
                    console.log('redirecting!!!');
                    alert('Please Login')
                    return <Redirect to="/login" />;
                }
            }}
        />
    );
};

const mapStateToProps = state => ({
    errorStatusCode: state.errorStatusCode
});

export default withRouter(
    connect(
        mapStateToProps,
        {} 
    )(PrivateRoute)
    
);