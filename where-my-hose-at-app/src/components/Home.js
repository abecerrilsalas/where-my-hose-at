import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

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

  return (
    <div>
      Home Page
      <button onClick={handleLogout}>Log out</button>
    </div>
  );
}
