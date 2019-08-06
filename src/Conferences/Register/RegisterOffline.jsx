import React from "react";
import { Link } from "react-router-dom";
import SmallMiddleSection from "../../01_Static_Components/SmallMiddleSection/SmallMiddleSection";
import SmallRegistrationBox from "./SmallRegistrationBox";
import "./Register.css";

const RegisterOffline = props => {
  return (
    <div>
      {" "}
      <SmallMiddleSection />
      <div className="Main-Section">
        <div className="Outer-Body">
          <div className="UpcomingConf">
            <SmallRegistrationBox agenda={props.conf.agenda} />
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
              <form
                action={
                  process.env.PUBLIC_URL +
                  "/check-submit-2019-09-12-advanced-superfund.php"
                }
                method="post"
              >
                <div>
                  <input type="hidden" name="ssl_merchant_id" value="514710" />
                  <input type="hidden" name="ssl_user_id" value="website" />
                  <input
                    type="hidden"
                    name="ssl_pin"
                    value="62RTPVBJ9Y3CSNRYJQ458Q7V3M3V27N1FO60ZLY3S30KBITBC4T5KUW9OUOS3YLP"
                  />
                  <input type="hidden" name="ssl_show_form" value="true" />
                  <input
                    type="hidden"
                    name="ssl_transaction_type"
                    value="ccsale"
                  />
                  <input
                    type="hidden"
                    name="ssl_description"
                    value="2019 Adanced Superfund Conference"
                  />
                  <input type="hidden" name="ssl_customer_code" value="1" />
                  <input type="hidden" name="ssl_salestax" value="0.00" />
                  <input
                    type="hidden"
                    name="ssl_cvv2cvc2_indicator"
                    value="present"
                  />
                  <div>
                    <h1 className="Register-Title">Register</h1>
                    <div className="Tiny-Text">
                      Registration Secured by Evalon
                    </div>

                    <input
                      className="Input-Style"
                      name="ssl_organization"
                      type="text"
                      maxLength="40"
                      placeholder="Organization"
                    />
                    <input
                      className="Input-Style"
                      name="ssl_reg_first_name"
                      type="text"
                      maxLength="20"
                      placeholder="Registrant First Name"
                    />
                    <input
                      className="Input-Style"
                      name="ssl_reg_last_name"
                      type="text"
                      maxLength="30"
                      placeholder="Registrant Last Name"
                    />
                    <input
                      className="Input-Style"
                      name="ssl_email"
                      type="email"
                      maxLength="50"
                      placeholder="Registrant's E-mail address"
                    />
                    <input
                      className="Input-Style"
                      name="ssl_organization"
                      type="text"
                      maxLength="40"
                      placeholder="Organization"
                    />
                    <div className="Bigger-Text">Card Holder Information</div>
                    <input
                      className="Input-Style"
                      name="ssl_company"
                      type="text"
                      maxLength="40"
                      placeholder="Company or Organization"
                    />
                    <input
                      className="Input-Style"
                      name="ssl_first_name"
                      type="text"
                      maxLength="40"
                      placeholder="First Name"
                    />
                    <input
                      className="Input-Style"
                      name="ssl_last_name"
                      type="text"
                      maxLength="40"
                      placeholder="Last Name"
                    />
                    <input
                      className="Input-Style"
                      name="ssl_avs_address"
                      type="text"
                      maxLength="40"
                      placeholder="Billing Address"
                    />
                    <input
                      className="Input-Style"
                      name="ssl_address2"
                      type="text"
                      maxLength="40"
                      placeholder="Suite"
                    />
                    <input
                      className="Input-Style"
                      name="ssl_city"
                      type="text"
                      maxLength="40"
                      placeholder="City"
                    />
                    <input
                      className="Input-Style"
                      name="ssl_state"
                      type="text"
                      maxLength="40"
                      placeholder="State"
                    />
                    <input
                      className="Input-Style"
                      name="ssl_avs_zip"
                      type="text"
                      maxLength="12"
                      placeholder="Zip"
                    />
                    <input
                      className="Input-Style"
                      name="ssl_phone"
                      type="text"
                      maxLength="14"
                      placeholder="Phone"
                    />
                    <div className="Radio-Section">
                      <input type="radio" name="ssl_amount" value="550.00" />
                      $550 early registration
                      <br />
                      <input type="radio" name="ssl_amount" value="595.00" />
                      $595 if received after August 30, 2019
                      <br />
                      <input type="radio" name="ssl_amount" value="450.00" />
                      $450 government &amp; non-profit rate
                      <br />
                      <input type="radio" name="ssl_amount" value="495.00" />
                      $495 government & non-profit received after August 30,
                      2019
                      <br />
                      <div className="Tiny-Text">
                        QUESTIONS: 503/282-5220 Registration Secured by Evalon
                        Cancellation: Refunds, less $50, will be made for
                        cancellations received in writing by September 6, 2019.
                        MCLE Credits available for members of the Oregon State
                        Bar.
                      </div>
                      <input
                        name="submit"
                        type="submit"
                        value="Proceed to Secure Registration page"
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterOffline;
