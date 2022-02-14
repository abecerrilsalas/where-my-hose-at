import "./Return.css";
import React, {useEffect, useState} from "react";
import { useAuth, getRentedDriveway, db } from "../firebase-config";
import { doc, updateDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Return( {currentuser} ) {
  const currentUser = useAuth();
  const [rentedID, setRentedID] = useState([""]);
  const navigate = useNavigate();

  const notify = () => toast("Thanks for returning the driveway!");

  useEffect(() => {
    const loadDriveways = async (currentuser) => {
      const rentedDriveway = await getRentedDriveway(currentUser);
      setRentedID(rentedDriveway);
      };
    loadDriveways();
  }, [currentUser]);

  const handleReturn = async (rentedID) => {
    const docRef = doc(db, "listings", rentedID);
    const payload = { available: true, renter_id: null}
    updateDoc(docRef, payload);
    console.log('Driveway has been returned')
    navigate("/home")
  };


  return (
    <div>
      <button onClick={() => { handleReturn(rentedID); notify();} }>{rentedID ? 'Checked one thing off my to-do list. Return driveway!' : 'You are not currently renting a driveway.' }</button>
    <ToastContainer />
    </div>
  );
  
};

export default Return;

// {(() => {
//   if (isUserRenting === false) {
//     return ('You are not currently renting a driveway.');
//   } else {
//     return <button onClick={() => handleReturn(rentedID)}>Return Driveway {rentedID}</button>;
//   }
  
// })()}

 // <button onClick={() => handleReturn(rentedID)}>Return Driveway</button>


  // useEffect( () => {
  //   const loadCurrentDriveways = async () => {
  //     const userDriveways = await getCurrentDriveways(currentuser);
  //     setDriveways(userDriveways);
  //   };
  //   loadCurrentDriveways();
  // }, []);
  
  // console.log(driveways);

// const returnDriveways = async ( currentuser ) => {
//   const userDriveways = await getCurrentDriveways(currentUser);
//   setDriveways(userDriveways);
// };
// returnDriveways();



      // const drivewayRef = doc(db, "listings", drivewayID);
    

      // if (drivewayData.renter_id == currentUser.uid) {
      //   updateDoc(drivewayRef, {
      //     available: true,
      //     renter_id: null
      // })
      // console.log('driveway returned')
      // } else {
      //   console.log('something went wrong')
      // }
      // return drivewayData, drivewayID;
    

    // console.log(drivewayID)



          // querySnapshot.forEach((doc) => {
        // const drivewayID = doc.id
        // const drivewayData = doc.data()
        // console.log(drivewayData.renter_id)
        // console.log(drivewayID)
        // console.log(doc.id, " => ", doc.data());
      // });







      // useEffect( (currentuser) => {
      //   const loadDriveways = async (currentuser) => {
      //     const q = query(collection(db, "listings"), where("renter_id", "==", currentUser.uid));
      //     const querySnapshot = await getDocs(q);
      //     const queryList = querySnapshot.docs.map((doc) => doc.data());
      //     console.log(queryList)
      //     return queryList;
      //   };
      //   loadDriveways();
      // }, []);








  //       const loadDriveways = async (currentuser) => {
  //   const q = query(collection(db, "listings"), where("renter_id", "==", currentUser.uid));
  //   const querySnapshot = await getDocs(q);

  //   querySnapshot.forEach((doc) => {
  //     const drivewayID = doc.id
  //     const drivewayData = doc.data()
  //     console.log(drivewayData.renter_id)
  //     console.log(drivewayID)
  //     console.log(doc.id, " => ", doc.data());
  //   });
  // };



    // useEffect(
  //   () =>
  //     onSnapshot(collection(db, "listings"), (snapshot) =>
  //       setDriveways(snapshot.docs.map((docs) => ({ ...doc.data(), id: doc.id })))
  //     ),
  //   []
  // );

//   useEffect(() => {
//     const loadDriveways = async (currentuser) => {
//       const q = query(collection(db, "listings"), where("renter_id", "==", currentUser.uid));
//       const querySnapshot = await getDocs(q);
//       querySnapshot.forEach((doc) => {

//         const drivewayID = doc.id
//         const drivewayData = doc.data()
//         console.log(drivewayData.renter_id)
//         console.log(drivewayID)

//         return drivewayID;
//       });
//       let documentID = loadDriveways()
//       console.log(documentID)
//     };
// }, []);