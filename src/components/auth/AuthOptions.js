import React from 'react';

// useHistory allows you to create your own links and change the url which updates the latest history
import { useHistory } from 'react-router-dom';

// Create "login", "logout", and "register" buttons

export default function AuthOptions() {
    const history = useHistory();

    const register = () => history.push("/register");
    const login = () => history.push("/login");

    return (
        <nav className="auth-options">
            <button onClick={register}>Register</button>
            <button onClick={login}>Log in</button>
        </nav>
    );
}