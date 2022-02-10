import "./Home.css";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import UserHomeDisplay from "./homeGreeting";

// import { getAuth, onAuthStateChanged } from "firebase/auth";
// import { app, db } from "../firebase-config";
import { db } from "../firebase-config";
import { getAuth, updateProfile } from "firebase/auth";
import { useAuth, upload } from "../firebase-config";
import {
  collection,
  addDoc,
  setDoc,
  doc,
  query,
  getDoc,
  where,
} from "firebase/firestore";
import { async } from "@firebase/util";
// import { db } from "./firebase-config";

export default function Home() {
  const handleLogout = () => {
    sessionStorage.removeItem("Auth Token");
    navigate("/login");
  };

  let navigate = useNavigate();
  useEffect(() => {
    let authToken = sessionStorage.getItem("Auth Token");
    if (authToken) {
      navigate("/home");
    }

    if (!authToken) {
      navigate("/login");
    }
  }, [navigate]);
  const [displayName, setDisplayName] = useState("");
  const currentUser = useAuth();
  const auth = getAuth();
  const user = auth.currentUser;
  const uid = useState(user.uid);
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setlastName] = useState("");
  const [photo, setPhoto] = useState(null);
  const [loading, setLoading] = useState(false);
  const [photoURL, setPhotoURL] = useState(
    "https://www.veryicon.com/download/png/business/cloud-desktop/user-138?s=256"
  );

  function handleChange(e) {
    if (e.target.files[0]) {
      setPhoto(e.target.files[0]);
    }
  }

  function handleClick() {
    upload(
      photo,
      currentUser,
      setLoading,
      uid
      // setFirstName,
      // setlastName,
      // firstName,
      // lastName
    );
  }
  // useEffect(
  //   () =>
  //     onSnapshot(collection(db, "users"), (snapshot) =>
  //       setFirstName(
  //         snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
  //       )
  //     ),
  //   []
  // );

  useEffect(() => {
    if (currentUser?.photoURL) {
      setPhotoURL(currentUser.photoURL);
    }
  }, [currentUser]);

  // useEffect(() => {
  //   if (currentUser?.uid) {
  //     setPhotoURL(currentUser.photoURL);
  //   }
  // }, [currentUser]);

  // const handleNewName = async () => {
  //   const displayName = prompt("Enter wished display name");

  //   // const collectionRef = collection(db, "users");

  //   const payload = { displayName };
  //   const docRef = await addDoc(collectionRef, payload);

  //   // console.log(firstName);
  //   console.log("The new ID is: " + docRef.id);
  // };

  const handleNewName = async () => {
    await updateProfile(auth.currentUser, {
      displayName: prompt("Enter wished display name"),
    })
      .then(() => {
        // Profile updated!
        // ...
        console.log("Profile updated!");
      })
      .catch((error) => {
        // An error occurred
        // ...
        console.log("an error occured");
      });
    // UserHomeDisplay();
  };

  // *******below is the code i wrote before useeffect
  // const auth = getAuth();
  // const user = auth.currentUser;
  // updateProfile(auth.currentUser, {
  //   displayName: prompt("Enter wished display name"),
  // })
  //   .then(() => {
  //     // Profile updated!
  //     // ...
  //     console.log("Profile updated!");
  //     // console.log(displayName);
  //   })
  //   .catch((error) => {
  //     // An error occurred
  //     // ...
  //     console.log("an error occured");
  //   });
  // ************
  // useEffect(() => {
  //   const auth = getAuth();

  //   updateProfile(auth.currentUser, {
  //     displayName: prompt("Enter wished display name"),
  //   })
  //     .then(() => {
  //       // Profile updated!
  //       // ...
  //       console.log("Profile updated!");
  //     })
  //     .catch((error) => {
  //       // An error occurred
  //       // ...
  //       console.log("an error occured");
  //     });

  //   // call func~ handleGreeting();
  // });
  // *************
  // below is modified function
  useEffect(() => {
    const handleGreeting = async () => {
      const auth = getAuth();
      const user = auth.currentUser;

      if (user !== null) {
        user.providerData.forEach((profile) => {
          // return <p>{profile.displayName}'s profile</p>;
          setDisplayName(profile.displayName);
        });
      }
    };
    handleGreeting();
  }, []);
  // ***********
  // const handleGreeting = async () => {
  //   // const currentUser = useAuth();
  //   const auth = getAuth();
  //   const user = auth.currentUser;
  //   // let authToken = sessionStorage.getItem("Auth Token");

  //   if (user !== null) {
  //     return <p>{currentUser.displayName}'s Profile</p>;
  //   } else {
  //     return <p>please sign in</p>;
  //   }
  // };

  // const UserHomeDisplay = () => {
  //   const currentUser = useAuth();
  //   let authToken = sessionStorage.getItem("Auth Token");

  //   if (currentUser && authToken) {
  //     // console.log("FOX");
  //     return <p> {currentUser.displayName}'s profile!</p>;
  //   } else {
  //     <p>please login</p>;
  //   }
  // };
  // UserHomeDisplay();
  // const handleEdit = async (id) => {
  //   const firstName = prompt("Enter first name");
  //   const lastName = prompt("Enter last name");

  //   const docRef = doc("user", id);
  //   const payload = { firstName, lastName };

  //   setDoc(docRef, payload);
  //   console.log(firstName);
  // };

  // const UserDisplayLoginHome = () => {
  //     const currentUser = useAuth();
  //     let authToken = sessionStorage.getItem("Auth Token");

  //     if (currentUser && authToken) {
  //         return <p>Welcome, {currentUser.email}!</p>;
  //     } else {
  //         return <p><a href="/login">Login</a> / <a href="/register">Register</a></p>
  //     }
  // };

  //   useEffect(() => {
  //   const handleGreeting = async (id) => {
  //     console.log(currentUser);
  //     const q = query(
  //       collection(db, "user"),
  //       where("firstName", "==", currentUser.firstName)
  //     );
  //     const querySnapshot = await getDoc(q);
  //     querySnapshot.forEach((doc) => {
  //       // doc.data() is never undefined for query doc snapshots
  //       console.log(doc.id, " => ", ...doc.data());
  //     });
  //   };
  //   handleGreeting();
  // },[]);

  return (
    <div>
      Home Page
      {/* <p>{currentUser?.firstName}Profile</p> */}
      <div>{displayName} Profile</div>
      {/* <p>You clicked {lastName} times</p>; */}
      {/* <p>{firstName + lastName}'s Profile</p> */}
      <div className="home__form">
        <input type="file" onChange={handleChange} />

        {/* <div onLoad={UserHomeDisplay}> </div> */}
        {/* <p onChange={handleGreeting} onClick={handleClick}></p> */}
        <button disabled={loading || !photo} onClick={handleClick}>
          Upload
        </button>
        <img src={photoURL} alt="avatar" className="avatar" />

        <button onClick={handleNewName}>Add name</button>
        {/* <button onClick={handleEdit}>edit profile</button> */}
        {/* <p> {currentUser.email}!</p> */}
        {/* <p> {currentUser?.firstName}</p> */}
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

//
//
// below is the first draft
//
//

// import "./Home.css";
// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useAuth, upload } from "../firebase-config";

// // import { getAuth, onAuthStateChanged } from "firebase/auth";
// // import { app, db } from "../firebase-config";
// import { db } from "../firebase-config";

// import {
//   collection,
//   addDoc,
//   setDoc,
//   doc,
//   onSnapshot,
//   query,
//   getDoc,
//   where,
// } from "firebase/firestore";
// // import { db } from "./firebase-config";

// export default function Home() {
//   const handleLogout = () => {
//     sessionStorage.removeItem("Auth Token");
//     navigate("/login");
//   };

//   let navigate = useNavigate();
//   useEffect(() => {
//     let authToken = sessionStorage.getItem("Auth Token");
//     // console.log(authToken);
//     if (authToken) {
//       navigate("/home");
//     }

//     if (!authToken) {
//       navigate("/login");
//     }
//   }, [navigate]);

//   const currentUser = useAuth();
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setlastName] = useState("");
//   const [photo, setPhoto] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [photoURL, setPhotoURL] = useState(
//     "https://www.veryicon.com/download/png/business/cloud-desktop/user-138?s=256"
//   );

//   function handleChange(e) {
//     if (e.target.files[0]) {
//       setPhoto(e.target.files[0]);
//     }
//   }

//   function handleClick() {
//     upload(
//       photo,
//       currentUser,
//       setLoading,
//       setFirstName,
//       setlastName,
//       firstName,
//       lastName
//     );
//   }
//   useEffect(
//     () =>
//       onSnapshot(collection(db, "users"), (snapshot) =>
//         setFirstName(
//           snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
//         )
//       ),
//     []
//   );
//   // useEffect(() => {
//   //   if (currentUser?.firstName) {
//   //     setFirstName(currentUser.firstName);
//   //   }
//   // }, [currentUser]);

//   useEffect(() => {
//     if (currentUser?.photoURL) {
//       setPhotoURL(currentUser.photoURL);
//     }
//   }, [currentUser]);

//   const handleNewName = async () => {
//     const firstName = prompt("Enter first name");
//     const lastName = prompt("Enter last name");

//     const collectionRef = collection(db, "users");

//     const payload = { firstName, lastName };
//     const docRef = await addDoc(collectionRef, payload);

//     // console.log(firstName);
//     console.log("The new ID is: " + docRef.id);
//   };

//   const handleEdit = async (id) => {
//     // const firstName = useState("");
//     // const lastName = useState("");
//     // const collectionRef = collection(db, "users");
//     const firstName = prompt("Enter first name");
//     const lastName = prompt("Enter last name");

//     const docRef = doc("user", id);
//     const payload = { firstName, lastName };

//     setDoc(docRef, payload);
//     console.log(firstName);
//   };

//   // const nameDisplay = async () => {
//   //   // const collectionRef = collection(db, "users");
//   //   const firstName =
//   //   // const payload = { firstName, lastName };
//   //   // const docRef = await addDoc(collectionRef, payload);
//   //   // console.log(firstName);
//   //   // setDoc(docRef, payload);
//   // };
//   //   function LoginDisplayHome() {
//   //     return <UserDisplayLoginHome />;
//   // }

//   // const UserDisplayLoginHome = () => {
//   //     const currentUser = useAuth();
//   //     let authToken = sessionStorage.getItem("Auth Token");

//   //     if (currentUser && authToken) {
//   //         return <p>Welcome, {currentUser.email}!</p>;
//   //     } else {
//   //         return <p><a href="/login">Login</a> / <a href="/register">Register</a></p>
//   //     }
//   // };
//   useEffect(() => {

//   const handleGreeting = async (id) => {
//     console.log(currentUser);
//     const q = query(
//       collection(db, "user"),
//       where("firstName", "==", currentUser.firstName)
//     );
//     const querySnapshot = await getDoc(q);
//     querySnapshot.forEach((doc) => {
//       // doc.data() is never undefined for query doc snapshots
//       console.log(doc.id, " => ", ...doc.data());
//     });
//   };
//   handleGreeting();
// },[]);

//   return (
//     <div>
//       Home Page
//       {/* <p>{currentUser?.firstName}Profile</p> */}
//       {/* <div>Fox Mulder's Profile</div> */}
//       {/* <p>You clicked {lastName} times</p>; */}
//       {/* <p>{firstName + lastName}'s Profile</p> */}
//       <div className="home__form">
//         <input type="file" onChange={handleChange} />
//         <p onChange={handleGreeting} onClick={handleClick}></p>
//         <button disabled={loading || !photo} onClick={handleClick}>
//           Upload
//         </button>
//         <img src={photoURL} alt="avatar" className="avatar" />

//         <button onClick={handleNewName}>Add name</button>
//         <button onClick={handleEdit}>edit profile</button>
//         {/* <p> {currentUser.email}!</p> */}
//         {/* <p> {currentUser?.firstName}</p> */}
//       </div>
//       <button onClick={handleLogout}>Log out</button>
//     </div>
//   );
// }

// // const usersCollection = collection(db, "users");

// // const auth = getAuth();
// // const user = auth.currentUser;

// // if (user) {
// //   const newDoc = addDoc(collection(db, "users"), {
// //     firstName: "arthur",
// //     lastName: "king",
// //     userEmail: user.email,
// //   });
// //   console.log(`you did it! ${newDoc.path}`);
// // } else {
// //   console.log("you are not signed in");
// // }

// // addNewDoc();
