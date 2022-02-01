import React from "react";
import "./SearchPage.css";
import Button from "@mui/material/Button";
import SearchResult from "./SearchResult";

function SearchPage() {
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
      <SearchResult
        img="https://i.pinimg.com/originals/70/3a/2d/703a2da61dd6331f0b474adbcceb6dc3.jpg"
        title="Beautiful driveway for all your needs!"
        description="Come on down and have a good time. We have plenty of tools!"
        star={4.73}
      />
      <SearchResult
        img="https://i.pinimg.com/originals/70/3a/2d/703a2da61dd6331f0b474adbcceb6dc3.jpg"
        title="Beautiful driveway for all your needs!"
        description="Come on down and have a good time. We have plenty of tools!"
        star={4.73}
      />
    </div>
  );
}

export default SearchPage;
