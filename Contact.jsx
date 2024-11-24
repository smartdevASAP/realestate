import React from "react";
import "./Contact.css";
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
function Contact() {
  return (
    <div>
      <section className="c-wrapper">
        <div className="paddings innerWidth flexCenter c-container">
          {/* Left side */}
          <div className=" flexColStart c-left">
            <span className="orangeText">Our Contacts</span>
            <span className="primaryText">Easy to contact us</span>
            <span className="secondaryText">
              Our contacts <br />
              We are always ready to help you to live your life and make it
              better
            </span>
            <div className="flexColStart contactModes">
              {/*1st  ROW */}
              <div className="flexColStart">
                <div className="flexColCenter mode">
                  <div className="flexStart">
                    <div className="flexCenter icon">
                      <MdCall size={25} />
                    </div>
                    <div className="flexColStart detail">
                      <span>Call Us</span>
                      <span>+254 799 065 377</span>
                    </div>
                  </div>
                  <div className="flexCenter button">Call now</div>
                </div>
                <br />
                {/*2nd  */}
                <div className="flexColCenter mode">
                  <div className="flexStart">
                    <div className="flexCenter icon">
                      <BsFillChatDotsFill size={25} />
                    </div>
                    <div className="flexColStart detail">
                      <span>chat Us</span>
                      <span>+254 799 065 377</span>
                    </div>
                  </div>
                  <div className="flexCenter button">chat now</div>
                </div>
              </div>
            </div>
          </div>
          {/* rightside */}

          <div className="c-right">
            <div className="image">
              <img src="./contact.jpg" alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
