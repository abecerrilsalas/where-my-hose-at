import React from "react";
import "./LoginDisplay.css";

import { useAuth } from "../firebase-config";

function LoginDisplay() {
  return <UserDisplayLogin />;
}

const UserDisplayLogin = () => {
  const currentUser = useAuth();
  let authToken = sessionStorage.getItem("Auth Token");

  const handlePageChange = () => {
    window.location.href = "/home";
  };

  if (currentUser && authToken) {
    // return <p>&nbsp;{currentUser.displayName}</p>;
    return <p>&nbsp;{currentUser.displayName != null ? currentUser.displayName : "new user"}
    <img src={currentUser.photoURL != null ? currentUser.photoURL : "https://www.veryicon.com/download/png/business/cloud-desktop/user-138?s=256"} alt="" className="avatar" onClick={handlePageChange}/></p>;
  } else {
    return (
      <p>
        <a href="/login">Login</a> / <a href="/register">Register</a>
      </p>
    );
  }
};

export default LoginDisplay;
