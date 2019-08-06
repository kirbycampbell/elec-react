import React from "react";
import { Link } from "react-router-dom";
import "./MobileNav.css";
const MobileNav = props => {
  return (
    <div
      className={"Outer-MobileNav " + (props.mobileMenu ? "show" : "hidden")}
    >
      <Link
        className="Mobile-nav-link"
        to="/Conferences/"
        onClick={() => {
          props.setMobileMenu(false);
        }}
      >
        Conferences
      </Link>
      <Link
        className="Mobile-nav-link"
        to="/About/"
        onClick={() => {
          props.setMobileMenu(false);
        }}
      >
        About ELEC
      </Link>
      <Link
        className="Mobile-nav-link"
        to="/Locations/"
        onClick={() => {
          props.setMobileMenu(false);
        }}
      >
        Locations
      </Link>
      <Link
        className="Mobile-nav-link"
        to="/Contact/"
        onClick={() => {
          props.setMobileMenu(false);
        }}
      >
        Contact Us
      </Link>
      <Link
        className="Mobile-nav-link"
        to="/Presentations/"
        onClick={() => {
          props.setMobileMenu(false);
        }}
      >
        Presentations
      </Link>
      <Link
        className="Mobile-nav-link"
        to="/online-reg/conference.htm"
        onClick={() => {
          props.setMobileMenu(false);
        }}
      >
        Register
      </Link>
    </div>
  );
};

export default MobileNav;
