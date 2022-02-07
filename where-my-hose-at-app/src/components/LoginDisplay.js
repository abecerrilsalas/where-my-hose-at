import React from "react";
import "./LoginDisplay.css";

import { getAuth } from "firebase/auth";

function LoginDisplay() {
    return <UserDisplayLogin />;
}

const UserDisplayLogin = () => {
    const auth = getAuth();
    const user = auth.currentUser;
    let authToken = sessionStorage.getItem("Auth Token");

    if (user && authToken) {
        return <p>Welcome, {user.email}</p>;
    } else {
        return <p><a href="/login">Login</a> / <a href="/register">Register</a></p>
    }
};

export default LoginDisplay;