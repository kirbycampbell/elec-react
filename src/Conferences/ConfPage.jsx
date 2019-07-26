import React from 'react';
import './Conferences.css';
import UpcomingConf from './UpcomingConf';
import SmallMiddleSection from '../01_Static_Components/SmallMiddleSection/SmallMiddleSection';
import {conferenceList} from '../02_Data/ConferenceData';

const ConfPage = ({match}) => {
  let conf = {};

  for (var key in conferenceList) {
    if (conferenceList.hasOwnProperty(key)) {
      if (conferenceList[key].id === parseInt(match.params.id, 10)) {
        conf = conferenceList[key]; // Assigns conf to upcoming conference
      }
    }
  }

  return (
    <React.Fragment>
      <SmallMiddleSection />
      <div className="Main-Section" style={{minHeight: '34vh'}}>
        <div className="Outer-Body">
          <div className="UpcomingConf">
            <UpcomingConf />
          </div>
          <div className="Body-Right">
            <div>{conf.title}</div>
            <div>{conf.org}</div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ConfPage;
