import React from 'react';
import SmallMiddleSection from '../01_Static_Components/SmallMiddleSection/SmallMiddleSection';
import UpcomingConf from '../Conferences/UpcomingConf';
const Locations = () => {
  return (
    <div>
      <SmallMiddleSection />
      <div className="Main-Section">
        <div className="Outer-Body">
          <div className="UpcomingConf">
            <UpcomingConf />
          </div>

          <div className="Body-Right">
            <h1>Locations ELEC</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Locations;
