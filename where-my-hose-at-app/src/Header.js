import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LanguageIcon from '@mui/icons-material/Language';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Header() {
  return (
    <div className="header">
      <img className="header__icon" src="/logo_notext.png" alt="hose logo" />
      <div className="header__center">
        <input type="text" />
        <SearchIcon />
      </div>

      <div className="header__right">
        <LanguageIcon />
        <ExpandMoreIcon />
        <p>Share your driveway</p>
        <AccountCircleIcon />
      </div>
    </div>
  );
}

export default Header;
