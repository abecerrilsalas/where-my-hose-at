import "./UpdateProfile.css";
import LoginDisplay from "./LoginDisplay";

import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth, upload, db } from "../firebase-config";
import { updateProfile } from "firebase/auth";


function UpdateProfile( {currentuser}) {
  const currentUser = useAuth();
  const navigate = useNavigate();

  const [photo, setPhoto] = useState(null);
  const [loading, setLoading] = useState(false);
  const [photoURL, setPhotoURL] = useState(
    "https://www.veryicon.com/download/png/business/cloud-desktop/user-138?s=256"
  );

  // logic for editing name
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

  // logic for uploading a profile picture
  function handleChange(e) {
    if (e.target.files[0]) {
      setPhoto(e.target.files[0]);
    }
  }

  function handleClick() {
    upload(photo, currentUser, setLoading);
  }

  useEffect(() => {
    if (currentUser?.photoURL) {
      setPhotoURL(currentUser.photoURL);
    }
  }, [currentUser]);

  return (
    <div>
      <div>
      Hello, <LoginDisplay />!
      </div>
      <div>
      <button onClick={handleNewName}>Edit Name</button>
      </div>
      <div>
        <input type="file" onChange={handleChange} />
        <button disabled={loading || !photo} onClick={handleClick}>
          Upload
        </button>
        <img src={photoURL} alt="avatar" className="avatar" />
        </div>
      <div>
        <Link to="/home">…go back</Link>
      </div>
    </div>
  );
}

export default UpdateProfile;
