import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({component:Component, ...rest}) => {
    return <Route {...rest}/>
}

export default PrivateRoute;