import React from 'react';
import './Conferences.css';
import BulletLogo from '../00_Public_Files/PNGs/elecLOGO.png';
import {conferenceList} from '../02_Data/ConferenceData';

const UpcomingConf = () => {
  let confList = {};
  for (var key in conferenceList) {
    if (conferenceList.hasOwnProperty(key)) {
      if (conferenceList[key].date === 'October 25, 2019') {
        confList = conferenceList[key];
      }
      console.log(confList);
    }
  }
  // TODO Convert date to moment format and compare to current data
  return (
    <div>
      <div className="Upcoming-Conf">Upcoming Conferences</div>
      <div className="Double-Column-Conf">
        <img className="bullet-logo" src={BulletLogo} alt="Small-Logo" />
        <div className="Conf-Detail">
          {confList.title} // {confList.date}
        </div>
      </div>
      <div className="Double-Column-Conf">
        <img className="bullet-logo" src={BulletLogo} alt="Small-Logo" />
        <div className="Conf-Detail">Test Info</div>
      </div>
    </div>
  );
};

export default UpcomingConf;
