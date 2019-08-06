import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SmallMiddleSection from "../../01_Static_Components/SmallMiddleSection/SmallMiddleSection";
import SmallRegistrationBox from "./SmallRegistrationBox";
import "./Register.css";
import * as emailjs from "emailjs-com";
const uuidv1 = require("uuid/v1");

const RegisterOffline = props => {
  const regId = uuidv1();
  const [emailForm, setEmailForm] = useState({
    regOrg: "",
    regFirstName: "",
    regLastName: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    suite: "",
    city: "",
    State: "",
    Zip: "",
    company: "",
    tuition: "",
    regCode: regId
  });
  const [success, setSuccess] = useState(null);
  const handleFormSubmit = event => {
    event.preventDefault();
    if (
      event.target.lastName.value === "" ||
      event.target.email.value === "" ||
      event.target.tuition.value === ""
    ) {
      setSuccess(false);
    } else {
      setEmailForm({
        firstName: event.target.firstName.value,
        lastName: event.target.lastName.value,
        email: event.target.email.value,
        phone: event.target.phone.value,
        address: event.target.address.value,
        suite: event.target.suite.value,
        city: event.target.city.value,
        state: event.target.state.value,
        zip: event.target.zip.value,
        regOrg: event.target.regOrg.value,
        regFirstName: event.target.regFirstName.value,
        regLastName: event.target.regLastName.value,
        company: event.target.company.value,
        tuition: event.target.tuition.value
      });
    }
  };

  useEffect(() => {
    if (emailForm.name !== "") {
      const emailTheForm = async () => {
        if (emailForm.email.length > 4) {
          emailjs
            .send(
              "mailgun",
              "registration_form",
              {
                from: emailForm.email,
                to: "johnkirbycampbell@gmail.com",
                name: emailForm.firstName + " " + emailForm.lastName,
                firstName: emailForm.firstName,
                lastName: emailForm.lastName,
                email: emailForm.email,
                phone: emailForm.phone,
                address: emailForm.address,
                suite: emailForm.suite,
                city: emailForm.city,
                state: emailForm.state,
                zip: emailForm.zip,
                regOrg: emailForm.regOrg,
                regFirstName: emailForm.regFirstName,
                regLastName: emailForm.regLastName,
                company: emailForm.company,
                tuition: emailForm.tuition,
                regCode: regId,
                conf: props.conf.title,
                confDate: props.conf.date
              },
              "user_EhT27SOB4XRGLQuTd22hG"
            )
            .then(
              response => {
                console.log("SUCCESS!", response.status, response.text);
                setSuccess(true);
              },
              err => {
                console.log("FAILED...", err);
              }
            );
        }
      };
      emailTheForm();
    }
  }, [emailForm]);
  return (
    <div>
      {" "}
      <SmallMiddleSection />
      <div className="Main-Section">
        <div className="Outer-Body">
          <div className="UpcomingConf">
            <div className="Single-Col">
              <SmallRegistrationBox
                agenda={props.conf.agenda}
                reg={props.conf.registration}
              />
            </div>
          </div>

          <div className="Body-Right">
            <div className="Topic-Title-Reg">{props.conf.title}</div>
            <div className="Top-Topic">
              {props.conf.org} | {props.conf.info} | {props.conf.topic}
            </div>
            <div className="Info-Section">
              <div>{props.conf.date}</div>
              <div>{props.conf.location}</div>
              <div>{props.conf.city}</div>
            </div>
            <Link
              to={`/Conferences/${props.conf.id}`}
              onClick={() => props.setConf}
            >
              Conference Details
            </Link>
            <div className="Outer-Form">
              {!success && (
                <form id="myForm" onSubmit={handleFormSubmit}>
                  <div>
                    <div>
                      <h1 className="Register-Title">
                        Register Online & Mail Check
                      </h1>
                      Reference Number: {regId}
                      <div className="Tiny-Text">
                        Important: Write this number down or print page before
                        clicking the Register Now button
                      </div>
                      <input
                        className="Input-Style"
                        name="regOrg"
                        id="regOrg"
                        type="text"
                        maxLength="40"
                        placeholder="Organization"
                      />
                      <input
                        className="Input-Style"
                        name="regFirstName"
                        id="regFirstName"
                        type="text"
                        maxLength="20"
                        placeholder="Registrant First Name"
                      />
                      <input
                        className="Input-Style"
                        name="regLastName"
                        id="regLastName"
                        type="text"
                        maxLength="30"
                        placeholder="Registrant Last Name"
                      />
                      <input
                        className="Input-Style"
                        name="email"
                        id="email"
                        type="email"
                        maxLength="50"
                        placeholder="Registrant's E-mail address"
                      />
                      <div className="Bigger-Text">Card Holder Information</div>
                      <input
                        className="Input-Style"
                        name="company"
                        id="company"
                        type="text"
                        maxLength="40"
                        placeholder="Company or Organization"
                      />
                      <input
                        className="Input-Style"
                        name="firstName"
                        id="firstName"
                        type="text"
                        maxLength="40"
                        placeholder="First Name"
                      />
                      <input
                        className="Input-Style"
                        name="lastName"
                        id="lastName"
                        type="text"
                        maxLength="40"
                        placeholder="Last Name"
                      />
                      <input
                        className="Input-Style"
                        name="address"
                        id="address"
                        type="text"
                        maxLength="40"
                        placeholder="Billing Address"
                      />
                      <input
                        className="Input-Style"
                        name="suite"
                        id="suite"
                        type="text"
                        maxLength="40"
                        placeholder="Suite"
                      />
                      <input
                        className="Input-Style"
                        name="city"
                        id="city"
                        type="text"
                        maxLength="40"
                        placeholder="City"
                      />
                      <input
                        className="Input-Style"
                        name="state"
                        id="state"
                        type="text"
                        maxLength="40"
                        placeholder="State"
                      />
                      <input
                        className="Input-Style"
                        name="zip"
                        id="zip"
                        type="text"
                        maxLength="12"
                        placeholder="Zip"
                      />
                      <input
                        className="Input-Style"
                        name="phone"
                        id="phone"
                        type="text"
                        maxLength="14"
                        placeholder="Phone"
                      />
                      <div className="Radio-Section">
                        <input
                          type="radio"
                          name="tuition"
                          id="tuition"
                          value="550.00"
                        />
                        $550 early registration
                        <br />
                        <input
                          type="radio"
                          name="tuition"
                          id="tuition"
                          value="595.00"
                        />
                        $595 if received after August 30, 2019
                        <br />
                        <input
                          type="radio"
                          name="tuition"
                          id="tuition"
                          value="450.00"
                        />
                        $450 government &amp; non-profit rate
                        <br />
                        <input
                          type="radio"
                          name="tuition"
                          id="tuition"
                          value="495.00"
                        />
                        $495 government & non-profit received after August 30,
                        2019
                        <br />
                        <div className="Tiny-Text">
                          QUESTIONS: 503/282-5220 <br />
                          Please mail check asap and include reference number on
                          check
                          <br />
                          Cancellation: Refunds, less $50, will be made for
                          cancellations received in writing by September 6,
                          2019.
                          <br />
                          <br />
                          Write down reference number, or print page, before
                          clicking Register Now button. Include reference number
                          on check. Thank you.
                        </div>
                        {!success && (
                          <input
                            name="submit"
                            type="submit"
                            value="Submit Offline Registration"
                          />
                        )}
                        {success && (
                          <input
                            name="submit"
                            type="submit"
                            value="Successfully Submitted Registration!"
                            disabled={true}
                          />
                        )}
                      </div>
                    </div>
                  </div>
                </form>
              )}
              {success && (
                <div className="Successful Registration">
                  You Have successfully registered for {props.conf.title}!
                  <br />
                  Your Registration info has been emailed to you at{" "}
                  {emailForm.email}. Keep your registration code: {regId}
                  <br />
                  Thank you!
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterOffline;
