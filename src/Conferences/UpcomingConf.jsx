import React from 'react';
import './Conferences.css';
import BulletLogo from '../PNGs/elecLOGO.png';
const UpcomingConf = () => {
  return (
    <div>
      <div className="Upcoming-Conf">Upcoming Conferences</div>
      {/* TODO: Make this mappable from a javascript file */}
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
