import React, {FunctionComponent, useEffect, useState} from 'react';
import AuthenticationService from "../service/AuthentificationService";

const Login:FunctionComponent = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        AuthenticationService.login("admin","admin").then(response => {
            AuthenticationService.isAuthenticated = response.authenticate;
            localStorage.setItem('isAuthenticate', "true");
            setIsLoggedIn(response.authenticate)
        })
    }, [])

    return (
        <>
            {
                isLoggedIn ? (<p>Welcome</p>) : (<p>Pas connecté</p>)
            }
        </>
    )
}

export default Login;