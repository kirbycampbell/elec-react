import React from "react";
import UpcomingConf from "../Conferences/UpcomingConf";
import SmallMiddleSection from "../01_Static_Components/SmallMiddleSection/SmallMiddleSection";
import {
  Presentations2017,
  Presentations2016,
  Presentations2015,
  Presentations2014
} from "../02_Data/PresentationData";
import "./Presentations.css";

const Presentations = props => {
  return (
    <React.Fragment>
      <SmallMiddleSection />
      <div className="Main-Section" style={{ minHeight: "34vh" }}>
        <div className="Outer-Body">
          <div className="UpcomingConf">
            <UpcomingConf setConf={props.setConf} />
          </div>
          <div className="Pres-Body-Right">
            <div>
              <h1>Presentations</h1>
              <div className="Ind-Pres">
                <h3>2017 Oregon Source Control Conference, in Portland</h3>
                {Presentations2017.map(pres => {
                  return (
                    <li key={pres.name} className="pres-sec">
                      <a
                        href={
                          process.env.PUBLIC_URL +
                          `/pdf-presentations/${pres.pdf}`
                        }
                        className="pres-link"
                      >
                        {pres.name}
                      </a>
                    </li>
                  );
                })}
              </div>
              <div className="Ind-Pres">
                <h3>2016 Advanced Air Quality Seminar, in Portland</h3>
                {Presentations2016.map(pres => {
                  return (
                    <li key={pres.name} className="pres-sec">
                      <a
                        href={
                          process.env.PUBLIC_URL +
                          `/pdf-presentations/${pres.pdf}`
                        }
                        className="pres-link"
                      >
                        {pres.name}
                      </a>
                    </li>
                  );
                })}
              </div>
              <div className="Ind-Pres">
                <h3>2015 Environmental Cleanup Conference, in Seattle</h3>
                {Presentations2015.map(pres => {
                  return (
                    <li key={pres.name} className="pres-sec">
                      <a
                        href={
                          process.env.PUBLIC_URL +
                          `/pdf-presentations/${pres.pdf}`
                        }
                        className="pres-link"
                      >
                        {pres.name}
                      </a>
                    </li>
                  );
                })}
              </div>
              <div className="Ind-Pres">
                <h3>2014 Toxics Reduction Conference</h3>
                {Presentations2014.map(pres => {
                  return (
                    <li key={pres.name} className="pres-sec">
                      <a
                        href={
                          process.env.PUBLIC_URL +
                          `/pdf-presentations/${pres.pdf}`
                        }
                        className="pres-link"
                      >
                        {pres.name}
                      </a>
                    </li>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Presentations;
