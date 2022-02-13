import React, { useEffect, useState } from "react";
import "./SearchPage.css";
import Button from "@mui/material/Button";
import SearchResult from "./SearchResult";
import { useNavigate } from "react-router-dom";

import { getListings, db, useAuth } from "../firebase-config";
import { doc, updateDoc } from "firebase/firestore";

function SearchPage() {
  const currentUser = useAuth();
  
  const navigate = useNavigate();
  const [listings, setListings] = useState([])
  const [clickedListing, setClickedListing] = useState("")

  useEffect(() => {
    const loadListings = async () => {
      const userListings = await getListings();
      setListings(userListings);
    };
    loadListings();
  }, []);
  
  console.log(listings)

  const getListingCards = listings.map((card) => {

    const handleBooking = () => {
      const listingsRef = doc(db, "listings", "0CtwPj1wHLRdwOu0SGWE");
      // console.log(card.available);
      if (card.available == true) {
          updateDoc(listingsRef, {
          available: false,
          renter_id: currentUser.uid
        })
        console.log("You got it!");
        navigate("/home");
      } else {
          console.log("Sorry, driveway is occupied.");
      }
    }
  
    return (
      <SearchResult 
        image={card.image}
        title={card.title}
        description={card.description}
        available={card.available}
        handleBooking={handleBooking}
      />
    );
  });
  
  return (
    <div className="searchPage">
      <div className="searchPage__info">
        <p>62 driveways • 28 January to 31 January</p>
        <h1>Driveways nearby</h1>
        <Button variant="outlined">Tools included</Button>
        <Button variant="outlined">Hose available</Button>
        <Button variant="outlined">Flat surface</Button>
        <Button variant="outlined">More filters</Button>
      </div>
      {getListingCards}
    </div>
  );
}

export default SearchPage;
