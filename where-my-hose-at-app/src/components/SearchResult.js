import React from "react";
import "./SearchResult.css";
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import EventBusyIcon from '@mui/icons-material/EventBusy';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function SearchResult({ image, title, description, available, handleBooking}) {

  const notify = () => toast("You are now renting " + title + "!");

  return (
    <div className="searchResult">
      <img src={image} alt="" />
      <EventAvailableIcon onClick={() => { handleBooking(); notify();}}  className="searchResult__car"/>
      <ToastContainer />

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