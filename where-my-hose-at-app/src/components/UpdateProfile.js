import "./UpdateProfile.css";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../firebase-config";
import { updateProfile } from "firebase/auth";


function UpdateProfile( {currentuser}) {
  const navigate = useNavigate();
  const currentUser = useAuth();

  const handleNewName = async ( currentuser ) => {
    await updateProfile(currentUser, {
      displayName: prompt("Enter wished display name"),
    })
      .then(() => {
        console.log("Profile updated!");
      })
      .catch((error) => {
        console.log("an error occurred");
      });
      navigate("/home");
  };

  return (
    <button onClick={handleNewName}>Edit Name</button>
  );
}

export default UpdateProfile;
