import React, { useEffect, useState } from "react";
import "./SearchPage.css";
import Button from "@mui/material/Button";
import SearchResult from "./SearchResult";

import { getListings } from "../firebase-config";

function SearchPage() {
  
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
    return (
      <SearchResult 
        image={card.image}
        title={card.title}
        description={card.description}
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
