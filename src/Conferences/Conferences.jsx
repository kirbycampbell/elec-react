import React from 'react';
import './Conferences.css';
import UpcomingConf from './UpcomingConf';
import MiddleSection from '../01_Static_Components/MiddleSection/MiddleSection';
// import conferenceList from '../02_Data/ConferenceData';

const Conferences = () => {
  return (
    <React.Fragment>
      <MiddleSection />
      <div className="Main-Section" style={{minHeight: '34vh'}}>
        <div className="Outer-Body">
          <div className="UpcomingConf">
            <UpcomingConf />
          </div>
          <div className="Body-Right">
            The Environmental Law Education Center produces top quality
            education opportunities for environmental professionals. Our
            comprehensive conferences and intensive workshops bring together
            diverse professionals to explore environmental laws, science, public
            policies and complex technical solutions. We focus on the most
            timely and important environmental issues.
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Conferences;
