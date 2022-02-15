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
      <button onClick={() => { handleReturn(rentedID); notify();} }>{rentedID ? 'Return driveway' : 'You are not currently renting a driveway.' }</button>
    <ToastContainer />
    </div>
  );
  
};

export default Return;