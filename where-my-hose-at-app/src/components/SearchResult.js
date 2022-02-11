import React from "react";
import "./SearchResult.css";
// import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
// import StarIcon from "@mui/icons-material/Star";
// import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import EventBusyIcon from '@mui/icons-material/EventBusy';

function SearchResult({ image, title, description, available, handleBooking}) {

  // const handleBooking = () => {
  //   console.log('Click happened');
  // }

  return (
    <div className="searchResult">
      <img src={image} alt="" />
      {/* <h3>{available}</h3> */}
      {/* <FavoriteBorderIcon className="searchResult__heart" /> */}
      <EventAvailableIcon onClick={handleBooking} className="searchResult__car"/>

      <div className="searchResult__info">
      
        <div className="searchResult__infoTop">

          <h3>{title}</h3>
          <p>____</p>
          <p>{description}</p>
        </div>

      </div>
    </div>
  );
}

export default SearchResult;


        {/* <div className="searchResult__infoBottom">
          { <div className="searchResult__stars">
            <StarIcon className="searchResult__star" />
            <p>
              <strong>USE THIS DRIVEWAY</strong>
            </p>
          </div>}
        </div> */}