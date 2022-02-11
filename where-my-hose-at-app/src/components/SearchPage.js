import React, { useEffect, useState } from "react";
import "./SearchPage.css";
import Button from "@mui/material/Button";
import SearchResult from "./SearchResult";

import { getListings, db } from "../firebase-config";
import { doc, updateDoc } from "firebase/firestore";

function SearchPage() {

  
  const [listings, setListings] = useState([])

  useEffect(() => {
    const loadListings = async () => {
      const userListings = await getListings();
      setListings(userListings);
    };
    loadListings();
  }, []);
  
  // console.log(listings)

  const getListingCards = listings.map((card) => {

    const handleBooking = () => {
      const listingsRef = doc(db, "listings", "0CtwPj1wHLRdwOu0SGWE");
      // console.log(card.available);
      if (card.available == true) {
          updateDoc(listingsRef, {
          available: false
        });
      } else {
          updateDoc(listingsRef, {
          available: true
          });
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
