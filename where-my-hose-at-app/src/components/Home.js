import "./Home.css";
import LoginDisplay from "./LoginDisplay";

import React, { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Home() {
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
      Welcome, <LoginDisplay />!

      <div className="home__contents">
        <ul>
          <li>
            <Link to="/updateprofile">Update Profile</Link>
          </li>
          <li>
            <Link to="/driveways">Manage Driveways</Link>
          </li>
          <li>
            <button className="button" onClick={handleLogout}>Log out</button>
          </li>
        </ul>
      </div>
    </div>
  );
}
