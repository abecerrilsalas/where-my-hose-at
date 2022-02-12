import "./Header.css";
import LoginDisplay from "./LoginDisplay";
import React from "react";
import { Link } from "react-router-dom";

import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function Header() {
  const handlePageChange = () => {
    window.location.href = "/home";
  };

  return (
    <div className="header">
      <Link to="/">
        <img className="header__icon" src="/logo_notext.png" alt="hose logo" />
      </Link>

      <div className="header__center">
        <input type="text" />
        <SearchIcon />
      </div>

      <div className="header__right">
        <LoginDisplay />
        <AccountCircleIcon onClick={handlePageChange} />
      </div>
    </div>
  );
}

export default Header;
