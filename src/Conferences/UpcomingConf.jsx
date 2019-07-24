import React from 'react';
import './Conferences.css';
import BulletLogo from '../00_Public_Files/PNGs/elecLOGO.png';
const UpcomingConf = () => {
  return (
    <div>
      <div className="Upcoming-Conf">Upcoming Conferences</div>
      <div className="Double-Column-Conf">
        <img className="bullet-logo" src={BulletLogo} alt="Small-Logo" />
        <div className="Conf-Detail">Test Info</div>
      </div>
      <div className="Double-Column-Conf">
        <img className="bullet-logo" src={BulletLogo} alt="Small-Logo" />
        <div className="Conf-Detail">Test Info</div>
      </div>
    </div>
  );
};

export default UpcomingConf;
