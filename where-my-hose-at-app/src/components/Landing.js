import React, { useEffect, useState } from "react";
import "./Landing.css";
import Banner from "./Banner";
import Card from "./Card";

import { getListings } from "../firebase-config";

function Landing() {
  
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
      <Card 
        image={card.image}
        title={card.title}
        description={card.description}
        key={card.id}
      />
    );
  });

  return (
    <div className="landing">

      <Banner />
      <div className="landing__section">
          {getListingCards}
      </div>
    </div>
  );
}

export default Landing;



