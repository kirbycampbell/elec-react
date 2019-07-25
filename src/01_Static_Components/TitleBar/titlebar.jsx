import React from "react";
import Logo from "../../00_Public_Files/PNGs/elecLOGO.png";
import FBLogo from "../../00_Public_Files/PNGs/GreenFBLogo.png";
import "./titlebar.css";

const TitleBar = props => {
  return (
    <div className="Outer-Title">
      <div className="Inner-Title">
        <div className="Title-Logo">
          <img className="Main-Logo" src={Logo} alt="ELEC_Logo" />
        </div>
        <div className="Title-Text">
          {" "}
          ENVIRONMENTAL LAW EDUCATION CENTER
          <br />
          <div className="Smaller-Title-Text">
            Cutting Edge Discussions On Timely Environmental Issues
          </div>
        </div>
        <div className="Title-Social-Link">
          <div
            className="Menu-Btn-Mobile"
            onClick={() => {
              props.setMobileMenu(!props.mobileMenu);
            }}
          >
            <div style={{ fontSize: "10px", marginTop: "-3px" }}>menu</div>

            <i className="fas fa-bars" />
          </div>
          <a href="https://www.facebook.com/Environmental-Law-Education-Ctr-159745170712346/">
            <img src={FBLogo} alt="FBLogo" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TitleBar;
