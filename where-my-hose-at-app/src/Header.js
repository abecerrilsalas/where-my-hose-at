import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function Header() {
  return (
    <div className="header">
      <img className="header__icon" src="/logo_notext.png" alt="hose logo" />
      <div className="header__center">
        <input type="text" />
        <SearchIcon />
      </div>

      <div className="header__right">
        <p>Rent a driveway</p>
        <AccountCircleIcon />
      </div>
    </div>
  );
}

export default Header;
