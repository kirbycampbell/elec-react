import React, {useState, useEffect} from 'react';
import SmallMiddleSection from '../01_Static_Components/SmallMiddleSection/SmallMiddleSection';
import UpcomingConf from '../Conferences/UpcomingConf';
import './Contact.css';
var mailgun = require('mailgun.js');
var mg = mailgun.client({
  username: 'api',
  key: '78dafe274acda12c310fcedad78f0601-f877bd7a-ad94151a',
});

const Contact = () => {
  const [emailForm, setEmailForm] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    cityStateZip: '',
    comment: '',
  });

  const handleFormSubmit = event => {
    event.preventDefault();
    setEmailForm({
      name: event.target.name.value,
      email: event.target.email.value,
      phone: event.target.phone.value,
      address: event.target.address.value,
      cityStateZip: event.target.cityStateZip.value,
      comment: event.target.comment.value,
    });
  };

  useEffect(() => {
    if (emailForm.name !== '') {
      console.log(emailForm);
      mg.messages
        .create('sandboxd7bb518346c5448db819b674cbcc561e.mailgun.org', {
          from: 'Excited User <johnkirbycampbell@gmail.com>',
          to: ['jkirbycampbell@gmail.com'],
          subject: 'Hitaaa',
          text: 'Hello There - im testing out this email thing!',
          html: '<h1>Hello There - im testing out this email thing!</h1>',
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
                    <label>Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Your name.."
                    />

                    <label>Email</label>
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

                    <label>Comment</label>
                    <textarea
                      id="text"
                      name="comment"
                      placeholder="Write something.."
                    />
                    <input type="submit" value="Submit" />
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
