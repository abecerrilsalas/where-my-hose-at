import "./Header.css";
import LoginDisplay from "./LoginDisplay";
import React from "react";
import { Link } from "react-router-dom";

import SearchIcon from "@mui/icons-material/Search";

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img className="header__icon" src="/mother.png" alt="hose logo" />
      </Link>

      <div className="header__center">
        <input type="text" />
        <SearchIcon />
      </div>

      <div className="header__right">
        <LoginDisplay />
      </div>
    </div>
  );
}

export default Header;
