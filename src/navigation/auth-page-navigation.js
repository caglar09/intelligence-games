import React from 'react'
import { Route } from 'react-router-dom';

function AuthPageNavigation({ children, ...rest }) {
    return (
        <Route {...rest} render={({ location }) => (children)}  />
    );
}

export default AuthPageNavigation
