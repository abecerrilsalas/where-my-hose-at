import "./Home.css";
import UpdateProfile from "./UpdateProfile";
import LoginDisplay from "./LoginDisplay";
import Return from "./Return";

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../firebase-config";

export default function Home() {
  const currentUser = useAuth();
  // console.log(currentUser);

  let navigate = useNavigate();

  useEffect(() => {
    let authToken = sessionStorage.getItem("Auth Token");

    if (!authToken) {
      navigate("/login");
    }
  }, [navigate]);

  // logic to Log Out
  const handleLogout = () => {
    sessionStorage.removeItem("Auth Token");
    navigate("/login");
  };



  return (
    <div className="home__header">
      Welcome <LoginDisplay />!

      <div className="home__contents">
        <ul>
          <li>
            <UpdateProfile currentuser={currentUser} />
            
          </li>
          <li>
            <Return currentuser={currentUser} />
          </li>
          <li>
            <button onClick={handleLogout}>Log out</button>
          </li>
        </ul>
      </div>
    </div>
  );
}
