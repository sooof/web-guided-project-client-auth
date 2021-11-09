import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({component, ...rest}) => {
    return <Route {...props}/>
}

export default PrivateRoute;