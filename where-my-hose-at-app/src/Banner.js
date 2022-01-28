import React, { useState } from "react";
import "./Banner.css";
import Button from "@mui/material/Button";
import DatePicker from "./DatePicker";

function Banner() {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div className="banner">
      <div className="banner__search">
        {showSearch && <DatePicker />}

        <Button
          onClick={() => setShowSearch(!showSearch)}
          className="banner__searchButton"
          variant="outlined"
        >
          {showSearch ? "Hide" : "Search Dates"}
        </Button>
      </div>
      <div className="banner__info">
        <h1>No hose? No woes.</h1>
        <h5>Apartment-dwellers may have space in the sky, but we all occasionally need a driveway. 
          <b>WHERE MY HOSE AT</b> connects you to rentable driveways for all your litter box cleaning, houseplant repotting, personal automechanic needs, and more.
        </h5>
        <Button variant="outlined">Explore nearby</Button>
      </div>
    </div>
  );
}

export default Banner;
