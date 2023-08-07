import React from "react";
import "./contact.css";
const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-container">
        <div className="contact-main">
          <div className="contact-top">
            <h4>CONTACT ME</h4>
            <h2>Let’s work together!</h2>

            <p>
              If you are reading this, probably i have managed to raise your
              interest and you wish to know more about me. Do not hesitate to
              contact me! right now i am learning node.js and actively working
              on some projects Whether you have some detailed design in mind or
              just a vague idea, i will help you to develop it.
            </p>
          </div>
          <div className="contact-bot">
            <div className="c-top">
              <form
                action="https://formsubmit.co/tornike.tanda@gmail.com"
                method="POST"
              >
                <input type="text" placeholder="Name" name="Name" required />
                <input type="email" placeholder="Email" name="Email" required />

                <textarea
                  required
                  name="Message"
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="Message"
                ></textarea>

                <button type="submit">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
