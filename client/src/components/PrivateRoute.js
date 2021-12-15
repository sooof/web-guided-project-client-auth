import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({component, ...rest}) => {
    console.log(component);
    console.log(rest);
    return <Route {...rest} render={()=> {
        return(<p>THIS IS A PROTECTED ROUTE</p>);
    }}/>
}

export default PrivateRoute;