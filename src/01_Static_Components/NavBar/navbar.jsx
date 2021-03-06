import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
const NavBar = () => {
  return (
    <div className="Outer-NavBar">
      <Link className="nav-link" to="/Conferences/">
        Conferences
      </Link>
      <Link className="nav-link" to="/About/">
        About ELEC
      </Link>
      <Link className="nav-link" to="/Locations/">
        Locations
      </Link>
      <Link className="nav-link" to="/Contact/">
        Contact Us
      </Link>
      <Link className="nav-link" to="/Presentations/">
        Presentations
      </Link>
      <Link className="nav-link" to="/online-reg/conference.htm">
        Register
      </Link>
    </div>
  );
};

export default NavBar;
