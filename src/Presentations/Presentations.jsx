import React from "react";
import UpcomingConf from "../Conferences/UpcomingConf";
import SmallMiddleSection from "../01_Static_Components/SmallMiddleSection/SmallMiddleSection";
import { Presentations2017 } from "../02_Data/PresentationData";
// import "../02_Data/pdf-presentations";

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
                  <div key={pres.name}>
                    <a
                      href={
                        process.env.PUBLIC_URL +
                        `/pdf-presentations/${pres.pdf}`
                      }
                    >
                      {pres.name}
                    </a>
                  </div>
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
