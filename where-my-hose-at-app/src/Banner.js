import React, { useState } from "react";
import "./Banner.css";
import Button from "@mui/material/Button";

function Banner() {
  const [showSearch, setShowSearch] = useState(true);

  return (
    <div className="banner">
      <div className="banner__search">
        {showSearch && <Search />}

        <Button
          onClick={() => setShowSearch(!showSearch)}
          className="banner_searchButton"
          variant="outlined"
        >
          Search Dates
        </Button>
      </div>
      <div className="banner__info">
        <h1>clean ur litter box</h1>
        <h5>keep ur bathtub clean </h5>
        <Button variant="outlined">Explore Nearby</Button>
      </div>
    </div>
  );
}

export default Banner;
