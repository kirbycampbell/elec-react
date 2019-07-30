import React, { useState, useEffect } from "react";
import SmallMiddleSection from "../01_Static_Components/SmallMiddleSection/SmallMiddleSection";
import UpcomingConf from "../Conferences/UpcomingConf";
import "./Contact.css";
var mailgun = require("mailgun.js");
var mg = mailgun.client({
  username: "api",
  key: process.env.mailgunAPIKEY
});

const Contact = () => {
  const [emailForm, setEmailForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    cityStateZip: "",
    comment: ""
  });

  const [success, setSuccess] = useState(null);

  const handleFormSubmit = event => {
    event.preventDefault();
    if (
      event.target.name.value === "" ||
      event.target.email.value === "" ||
      event.target.comment.value === ""
    ) {
      setSuccess(false);
    } else {
      setEmailForm({
        name: event.target.name.value,
        email: event.target.email.value,
        phone: event.target.phone.value,
        address: event.target.address.value,
        cityStateZip: event.target.cityStateZip.value,
        comment: event.target.comment.value
      });
      setSuccess(true);
    }
  };

  useEffect(() => {
    if (emailForm.name !== "") {
      //console.log(emailForm);
      mg.messages
        .create("sandboxd7bb518346c5448db819b674cbcc561e.mailgun.org", {
          from: `ELEC User <${emailForm.email}>`,
          to: ["jkirbycampbell@gmail.com"],
          subject: `Message from ${emailForm.name}`,
          text: `<div><h1>Message from ${emailForm.name}</h1><p>${
            emailForm.comment
          }</p><br /> <p>Contact User at: <br />${emailForm.email}<br />${
            emailForm.phone
          }<br />${emailForm.address} ${emailForm.cityStateZip}</p></div>`,
          html: `<div><h1>Message from ${emailForm.name}</h1><p>${
            emailForm.comment
          }</p><br /> <p>Contact User at: <br />${emailForm.email}<br />${
            emailForm.phone
          }<br />${emailForm.address} ${emailForm.cityStateZip}</p></div>`
        })
        .then(msg => console.log(msg)) // logs response data
        .catch(err => console.log(err)); // logs any error
    }
  }, [emailForm]);

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
              <div>
                <p>Contact Me</p>
                <div>
                  <form
                    // action="/action_page.php"
                    onSubmit={handleFormSubmit}
                  >
                    <label>Your Name*</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Your name.."
                    />

                    <label>Email*</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Your email"
                    />
                    <label>Phone</label>
                    <input
                      type="text"
                      id="phone"
                      name="phone"
                      placeholder="Your Phone.."
                    />
                    <label>Address</label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      placeholder="Your Address"
                    />
                    <label>City, State, Zip</label>
                    <input
                      type="text"
                      id="cityStateZip"
                      name="cityStateZip"
                      placeholder="City, State, Zip"
                    />

                    <label>Comment*</label>
                    <textarea
                      id="text"
                      name="comment"
                      placeholder="Write something.."
                    />
                    <input type="submit" value="Submit" />
                    {success && <div>Email Sent</div>}
                    {success === false && (
                      <div>Fill in all required fields...</div>
                    )}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
