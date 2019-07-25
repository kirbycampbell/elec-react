import React from "react";
import UpcomingConf from "../Conferences/UpcomingConf";
import SmallMiddleSection from "../01_Static_Components/SmallMiddleSection/SmallMiddleSection";
import { Presentations2017 } from "../02_Data/PresentationData";

const Presentations = () => {
  return (
    <React.Fragment>
      <SmallMiddleSection />
      <div className="Main-Section" style={{ minHeight: "34vh" }}>
        <div className="Outer-Body">
          <div className="UpcomingConf">
            <UpcomingConf />
          </div>
          <div className="Body-Right">
            Presentations
            <div>
              {Presentations2017.map(pres => {
                return (
                  <a href={pres.pdf} key={pres.name} target="_blank">
                    {pres.name}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Presentations;
