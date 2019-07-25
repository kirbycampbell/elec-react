import React from "react";
import SmallMiddleSection from "../01_Static_Components/SmallMiddleSection/SmallMiddleSection";
import UpcomingConf from "../Conferences/UpcomingConf";
import "./Contact.css";

const Contact = () => {
  const sendEmail = () => {
    console.log("Sending Email");

    // sgMail.send(msg);
  };
  return (
    <div>
      <SmallMiddleSection />
      <div className="Main-Section">
        <div className="Outer-Body">
          <div className="UpcomingConf">
            <UpcomingConf />
          </div>

          <div className="Body-Right">
            <h1>Contact Us</h1>
            <br />
            <strong>Environmental Law Education Center</strong>
            <br />
            PO Box 40748
            <br />
            Portland, OR 97240
            <br />
            <br />
            phone: (503) 282-5220
            <br />
            fax: (503) 282-8520
            <br />
            email: hduncan@elecenter.com
            <br />
            <br />
            <div className="Contact-Form-Outer">
              <div className="Form-Title">Contact Us Online</div>
              <div>Form Area</div>
              <button onClick={sendEmail}>Send Test Email</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
