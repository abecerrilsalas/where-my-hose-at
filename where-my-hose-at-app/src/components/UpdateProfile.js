import "./UpdateProfile.css";

import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth, upload } from "../firebase-config";
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
      navigate("/updateprofile");
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
    <div className="profile__contents">
      <div className="profile__name">
        <h2 className="profile__greeting">{currentUser && currentUser.displayName != null ? '✨ ' + currentUser.displayName + '\'s profile ✨' : ''}</h2>
        <h3>{currentUser && currentUser.displayName != null ? 'current display name: ' + currentUser.displayName : 'hey, new user! press button below to set your name'}</h3>
        <button onClick={handleNewName}>Add/Change Name</button>
      </div>

      <div className="profile__image">
        <h3>upload/update photo</h3>
        <input type="file" onChange={handleChange} />
        <button disabled={loading || !photo} onClick={handleClick}>
          Upload
        </button>
        </div>

      <div className="homelink">
        <Link to="/home">…go back</Link>
      </div>
    </div>
  );
}

export default UpdateProfile;
