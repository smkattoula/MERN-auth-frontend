import React, { useContext } from 'react';
import UserContext from "../../context/UserContext";

// useHistory allows you to create your own links and change the url which updates the latest history
import { useHistory } from 'react-router-dom';

// Create "login", "logout", and "register" buttons

export default function AuthOptions() {
    const { userData, setUserData } = useContext(UserContext);

    const history = useHistory();

    const register = () => history.push("/register");
    const login = () => history.push("/login");
    const logout = () => {
        setUserData({
            token: undefined,
            user: undefined
        });
        localStorage.setItem("auth-token", "")
    }

    return (
        <nav className="auth-options">
            {userData.user ? (
                <button onClick={logout}>Logout</button>
            ) : (
                <>
                    <button onClick={register}>Register</button>
                    <button onClick={login}>Login</button>
                </>
            )}
        </nav>
    );
}