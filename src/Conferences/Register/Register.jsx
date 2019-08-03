import React from "react";
import { Link } from "react-router-dom";
import SmallMiddleSection from "../../01_Static_Components/SmallMiddleSection/SmallMiddleSection";
import UpcomingConf from "../UpcomingConf";

const Register = props => {
  console.log(props);
  return (
    <div>
      {" "}
      <SmallMiddleSection />
      <div className="Main-Section">
        <div className="Outer-Body">
          <div className="UpcomingConf">
            <div>Something</div>
          </div>

          <div className="Body-Right">
            <div>{props.conf.title}</div>
            <div>
              {props.conf.org} | {props.conf.info} | {props.conf.topic}
            </div>
            <div>{props.conf.date}</div>
            <div>{props.conf.location}</div>
            <div>{props.conf.city}</div>{" "}
            <Link
              to={`/Conferences/${props.conf.id}`}
              onClick={() => props.setConf}
            >
              Conference Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
