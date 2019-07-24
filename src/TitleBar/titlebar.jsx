import React from 'react';
import Logo from '../PNGs/elecLOGO.png';
import FBLogo from '../PNGs/GreenFBLogo.png';
import './titlebar.css';

const TitleBar = () => {
  return (
    <div className="Outer-Title">
      <div className="Inner-Title">
        <div className="Title-Logo">
          <img src={Logo} alt="ELEC_Logo" />
        </div>
        <div className="Title-Text">
          {' '}
          ENVIRONMENTAL LAW EDUCATION CENTER
          <br />
          <div className="Smaller-Title-Text">
            Cutting Edge Discussions On Timely Environmental Issues
          </div>
        </div>
        <div className="Title-Social-Link">
          {' '}
          <a href="https://www.facebook.com/Environmental-Law-Education-Ctr-159745170712346/">
            <img src={FBLogo} alt="FBLogo" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TitleBar;
