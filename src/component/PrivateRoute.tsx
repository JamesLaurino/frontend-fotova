import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }: any) => (
    <Route {...rest} render={(props) => {

        // let AuthenticationService.isAuthenticated
        let isAuthenticatedStorage:string|null =  localStorage.getItem("isAuthenticate")
        if (isAuthenticatedStorage != "true") {
            return <Redirect to={{ pathname: '/login' }} />
        }

        return <Component {...props} />
    }} />
);

export default PrivateRoute;