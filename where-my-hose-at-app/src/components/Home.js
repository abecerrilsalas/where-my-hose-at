import "./Home.css";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { db } from "../firebase-config";
import { getAuth, updateProfile } from "firebase/auth";
import { useAuth, upload, db, getCurrentDriveways } from "../firebase-config";
import { doc, query, where, getDoc, getDocs, collection } from "firebase/firestore";

// import {
//   collection,
//   addDoc,
//   setDoc,
//   doc,
//   query,
//   getDoc,
//   where,
// } from "firebase/firestore";
// import { async } from "@firebase/util";

export default function Home() {
  let navigate = useNavigate();
  const [displayName, setDisplayName] = useState("");
  const currentUser = useAuth();
  const auth = getAuth();
  const user = auth.currentUser;
  // const uid = useState(user.uid);
  const [photo, setPhoto] = useState(null);
  const [loading, setLoading] = useState(false);
  const [photoURL, setPhotoURL] = useState(
    "https://www.veryicon.com/download/png/business/cloud-desktop/user-138?s=256"
  );
  
  const handleLogout = () => {
    sessionStorage.removeItem("Auth Token");
    navigate("/login");
  };

  useEffect(() => {
    let authToken = sessionStorage.getItem("Auth Token");
    if (authToken) {
      navigate("/home");
    }

    if (!authToken) {
      navigate("/login");
    }
  }, [navigate]);

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

  const handleNewName = async () => {
    await updateProfile(auth.currentUser, {
      displayName: prompt("Enter wished display name"),
    })
      .then(() => {
        console.log("Profile updated!");
      })
      .catch((error) => {
        console.log("an error occured");
      });
  };

  useEffect(() => {
    const handleGreeting = async () => {
      const auth = getAuth();
      const user = auth.currentUser;
      if (user !== null) {
        user.providerData.forEach((profile) => {
          setDisplayName(profile.displayName);
        });
      }
    };
    handleGreeting();
  }, []);

  const rentedDriveways = getCurrentDriveways(currentUser)
  console.log(rentedDriveways)

    const handleReturn = () => {
      // const currentUser = useAuth();
      // query to say listing where renterID==currentuserID;
      // reset the renterID
      // change availability to true

      // const q = query(collection(db, "listings"), where("renter_id", "==", currentUser.uid));
      // console.log(currentUser.uid)
      // console.log(q)
    // const querySnapshot = getDocs(q);
    // querySnapshot.forEach((doc) => {
    //   doc.data() is never undefined for query doc snapshots
    //   console.log(doc.id, " => ", doc.data());
    //   console.log(querySnapshot)
    // });
    };

  return (
    <div>
      Home Page
      <div>{displayName}'s Profile</div>
      <div className="home__form">
        <input type="file" onChange={handleChange} />

        {/* <div onLoad={UserHomeDisplay}> </div> */}
        {/* <p onChange={handleGreeting} onClick={handleClick}></p> */}
        <button disabled={loading || !photo} onClick={handleClick}>
          Upload
        </button>
        <img src={photoURL} alt="avatar" className="avatar" />

        <button onClick={handleNewName}>Add/Change name</button>
        {/* <button onClick={handleEdit}>edit profile</button> */}
        {/* <p> {currentUser.email}!</p> */}
        {/* <p> {currentUser?.firstName}</p> */}
      </div>
      <button onClick={handleLogout}>Log out</button>
      <button onClick={handleReturn}>Return Driveway</button>
    </div>
  );
}



  
