import "./Return.css";
import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import { useAuth, getCurrentDriveways, db, handleReturn } from "../firebase-config";
import {
  doc,
  query,
  where,
  getDoc,
  getDocs,
  collection,
  updateDoc,
  onSnapshot,
} from "firebase/firestore";

function Return( {currentuser} ) {
  const [driveways, setDriveways] = useState([""]);
  // const navigate = useNavigate();
  const currentUser = useAuth();  

  useEffect(
    () =>
      onSnapshot(collection(db, "listings"), (snapshot) =>
        setDriveways(snapshot.docs.map((docs) => ({ ...doc.data(), id: doc.id })))
      ),
    []
  );

//   useEffect(() => {
//     const loadDriveways = async (currentuser) => {
//       const q = query(collection(db, "listings"), where("renter_id", "==", currentUser.uid));
//       const querySnapshot = await getDocs(q);

//       querySnapshot.forEach((doc) => {
//         const drivewayID = doc.id
//         const drivewayData = doc.data()
//         console.log(drivewayData.renter_id)
//         console.log(drivewayID)
//         console.log(doc.id, " => ", doc.data());
//       });
//       return doc.id
//     };
//     const rentedID = loadDriveways();
//     console.log(rentedID)
// }, []);

  // const handleReturn = async ( currentuser, rentedID ) => {
    // const currentUser = useAuth();
    // query to say listing where renterID==currentuserID;
    // reset the renterID
    // change availability to true
    // console.log(currentUser.uid)
    // const rentedID = loadDriveways()
    // console.log(rentedID)
  // }

  


  return (
    <div>
      <button onClick={handleReturn}>Return Driveway</button>



    </div>
  );
  
};

export default Return;

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
