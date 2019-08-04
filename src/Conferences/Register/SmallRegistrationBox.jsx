import React from 'react';
import './SmallBox.css';
import {Link} from 'react-router-dom';

const SmallRegistrationBox = props => {
  return (
    <div className="Outer-Small-Box">
      {props.reg &&
        <div>
          <div className="Title-Small-Box">Registration</div>
          <div className="Inner-Small-Box">
            <div className="Register-Section">
              <div className="Small-Text-Box">
                Secure online registration with credit card:
              </div>
              <button className="Small-Box-BTN">
                <Link to="/Register/">Register online</Link>
              </button>
            </div>
            <div className="Register-Section">
              <div className="Small-Text-Box">
                Register online w/o credit card (mail check):
              </div>
              <button className="Small-Box-BTN">Register</button>
            </div>
            <div className="Register-Section">
              <div className="Small-Text-Box">Registration by fax or mail:</div>
              <button className="Small-Box-BTN">
                <a href={process.env.PUBLIC_URL + `/agenda-pdfs/${props.reg}`}>
                  Printable Form
                </a>
              </button>
            </div>
          </div>
        </div>}
      {props.agenda &&
        <div>
          <div className="Title-Small-Box">Conference Agenda</div>
          <div className="Inner-Small-Box">

            <div className="Register-Section">
              <div className="Small-Text-Box">Agenda Printout</div>
              <button className="Small-Box-BTN">
                <a
                  href={process.env.PUBLIC_URL + `/pdf-agendas/${props.agenda}`}
                >
                  Printable Friendly Agenda
                </a>
              </button>
            </div>
          </div>
        </div>}
    </div>
  );
};

export default SmallRegistrationBox;
