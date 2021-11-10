import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({component:Component, ...rest}) => {
    return <Route {...rest}   render={()=>{
        //return <h2>THIS IS THE PROTECTED ROUTE!!!</h2>
        return <Component />
    }}/>//component={Component}/>
}

export default PrivateRoute;