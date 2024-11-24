import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <div>
      <section className="f-wrapper">
        <div className="paddings innerWidth flexCenter f-container">
          {/* left */}
          <div className="flexColStart f-left">
            <img src="./logo2.png" alt="" width={120} />
            <span className="secondaryText">
              Our Vision is to make all people <br />
              have the best place to live for them.
            </span>
          </div>
          <div className="f-right flexColStart">
            <span className="primaryTextg">Information</span>
            <span className="secondaryText">
              154 Babylon,FL 2343,33458, Maldives
            </span>
            <div className="flexCenter f-menu">
              <span>Property</span>
              <span>Services</span>Products<span></span>
              <span>About Us</span>
            </div>

            <span></span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
