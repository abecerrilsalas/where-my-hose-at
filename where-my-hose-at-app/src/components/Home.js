import "./Home.css";
import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../firebase-config";

export default function Home() {
  const currentUser = useAuth();
  console.log(currentUser);

  let navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem("Auth Token");
    navigate("/login");
  };

  useEffect(() => {
    let authToken = sessionStorage.getItem("Auth Token");

    if (!authToken) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div>
      {/* <div>{currentUser.displayName}'s Profile</div> */}

      <ul>
        <li>
          <Link to="/updateprofile">Update Profile</Link>
        </li>
        <li>
          <Link to="/return">Return Driveway</Link>
        </li>
        <li>
          <button onClick={handleLogout}>Log out</button>
        </li>
      </ul>
    </div>
  );
}
