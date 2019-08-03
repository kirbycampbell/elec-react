import React, { useState } from "react";
import "./Conferences.css";
import UpcomingConf from "./UpcomingConf";
import SmallMiddleSection from "../01_Static_Components/SmallMiddleSection/SmallMiddleSection";
// import conferenceList from '../02_Data/ConferenceData';
import { Link } from "react-router-dom";

const Conferences = props => {
  const [more, setMore] = useState(4);
  const handleMore = () => {
    setMore(more + 2);
  };
  return (
    <React.Fragment>
      <SmallMiddleSection />
      <div className="Main-Section" style={{ minHeight: "34vh" }}>
        <div className="Outer-Body">
          <div className="UpcomingConf">
            <UpcomingConf setConf={props.setConf} />
          </div>
          <div className="Body-Right">
            <div>
              {/* :::::::::::::: UPCOMING CONFERENCES ::::::::::::::: */}

              <div className="ConfTitle">Upcoming Conferences</div>
              {props.confList.map(conf => {
                return (
                  <div className="Conf-Card" key={conf.date}>
                    <div className="Conf-Card-Title">
                      {conf.schedule && (
                        <Link
                          to={`/Conferences/${conf.id}`}
                          onClick={() => props.setConf}
                        >
                          {conf.title}
                        </Link>
                      )}
                      {/* <a
                        href={
                          process.env.PUBLIC_URL +
                          `/pdf-agendas/${conf.pdf}`
                        }
                        className="pres-link"
                      >
                        {conf.title}
                      </a> */}
                      {!conf.schedule && (
                        <a
                          href={
                            process.env.PUBLIC_URL + `/pdf-agendas/${conf.pdf}`
                          }
                          className="pres-link"
                        >
                          {conf.title}
                        </a>
                      )}
                    </div>
                    <div>{conf.org}</div>
                    <div>{conf.info}</div>
                    <div>{conf.topic}</div>
                    <div>{conf.date}</div>
                    <div>{conf.location}</div>
                    <div>{conf.city}</div>
                  </div>
                );
              })}
            </div>
            {/* :::::::::::::: PAST CONFERENCES ::::::::::::::: */}
            <div className="ConfTitle">Past Conferences</div>
            {props.pastConfs.slice(0, more).map(conf => {
              return (
                <div className="Conf-Card" key={conf.date}>
                  <div className="Conf-Card-Title">
                    {conf.schedule && (
                      <Link
                        to={`/Conferences/${conf.id}`}
                        onClick={() => props.setConf}
                      >
                        {conf.title}
                      </Link>
                    )}
                    {!conf.schedule && <div>{conf.title}</div>}
                  </div>
                  <div>{conf.org}</div>
                  <div>{conf.info}</div>
                  <div>{conf.topic}</div>
                  <div>{conf.date}</div>
                  <div>{conf.location}</div>
                  <div>{conf.city}</div>
                </div>
              );
            })}
            {more < props.pastConfs.length && (
              <div className="more-btn" onClick={handleMore}>
                More Conferences
              </div>
            )}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Conferences;
