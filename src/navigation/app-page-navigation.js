import React from 'react'
import { Route } from 'react-router-dom';

function AppPageNavigation({ children, ...rest }) {
    return (
        <Route {...rest} render={({ location }) => (children)}  />
    );
}

export default AppPageNavigation
