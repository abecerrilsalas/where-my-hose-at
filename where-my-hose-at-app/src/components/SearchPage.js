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
      const listingsRef = doc(db, "listings", card.id);
      // console.log(card.available);
      if (card.available == true) {
          updateDoc(listingsRef, {
          available: false,
          renter_id: currentUser.uid
        })
        console.log("Now renting " + card.title + "!");
        navigate("/home");
      } else {
          console.log("Sorry, " + card.title + "is occupied.");
      }
    }
  
    return (
      <SearchResult 
        image={card.image}
        title={card.title}
        description={card.description}
        available={card.available}
        handleBooking={handleBooking}
        key={card.id}
      />
    );
  });
  
  return (
    <div className="searchPage">
      <div className="searchPage__info">
        <p>6 driveways • 14 February to 18 February</p>
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
