import React from "react";
import "./LoginDisplay.css";

import { useAuth } from "../firebase-config";

function LoginDisplay() {
    return <UserDisplayLogin />;
}

const UserDisplayLogin = () => {
    const currentUser = useAuth();
    let authToken = sessionStorage.getItem("Auth Token");

    if (currentUser && authToken) {
        return <p>Welcome, {currentUser.email}!</p>;
    } else {
        return <p><a href="/login">Login</a> / <a href="/register">Register</a></p>
    }
};

export default LoginDisplay;