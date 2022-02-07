import "./Home.css";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth, upload } from "../firebase-config";

// import { getAuth, onAuthStateChanged } from "firebase/auth";
// import { app, db } from "../firebase-config";
// import { collection, addDoc } from "firebase/firestore";

export default function Home() {
  const handleLogout = () => {
    sessionStorage.removeItem("Auth Token");
    navigate("/login");
  };

  let navigate = useNavigate();
  useEffect(() => {
    let authToken = sessionStorage.getItem("Auth Token");
    console.log(authToken);
    if (authToken) {
      navigate("/home");
    }

    if (!authToken) {
      navigate("/login");
    }
  }, [navigate]);

  const currentUser = useAuth();
  const [photo, setPhoto] = useState(null);
  const [loading, setLoading] = useState(false);
  const [photoURL, setPhotoURL] = useState("https://www.veryicon.com/download/png/business/cloud-desktop/user-138?s=256");

  function handleChange(e) {
    if(e.target.files[0]){
      setPhoto(e.target.files[0])
    }
  }

  function handleClick() {
    upload(photo, currentUser, setLoading);
    
  }

  useEffect(() => {
    if (currentUser?.photoURL) {
      setPhotoURL(currentUser.photoURL);
    }
  }, [currentUser])

  return (
    <div>
      Home Page
      <div className="home__form">
        <input type="file" onChange={handleChange} />
        <button disabled={loading || !photo} onClick={handleClick}>Upload</button>
        <img src={photoURL} 
        alt="avatar" className="avatar" />
      </div>

      <button onClick={handleLogout}>Log out</button>
    </div>
  );
}



  // const usersCollection = collection(db, "users");

  // const auth = getAuth();
  // const user = auth.currentUser;

  // if (user) {
  //   const newDoc = addDoc(collection(db, "users"), {
  //     firstName: "arthur",
  //     lastName: "king",
  //     userEmail: user.email,
  //   });
  //   console.log(`you did it! ${newDoc.path}`);
  // } else {
  //   console.log("you are not signed in");
  // }

  // addNewDoc();