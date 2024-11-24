import React from "react";
import "./Hero.css";
import CountUp from "react-countup";
import { HiLocationMarker } from "react-icons/hi";
function Hero() {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">
        {/* LEFT SIDE */}
        <div className=" flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-circle" />
            <h1>
              Discover <br /> most suitable <br /> property
            </h1>
          </div>
          <div className="hero-des flexColStart">
            <span className="secondaryText">
              Find a variety of properties that suit you very easily
            </span>
            <span className="secondaryText">
              Forget all difficulties in finding a residence for you
            </span>
          </div>
          <div className=" flexCenter search-bar">
            <HiLocationMarker color="var(--blue)" size={25} />
            <input type="text" className="text" />
            <button className="button">Search</button>
          </div>

          <div className="flexCenter stats">
            <div className="flexColStart stat">
              <span>
                <CountUp start={1000} end={1300} duration={4} />
                <span>+</span>
              </span>
              <span>Packages </span>
            </div>
            <div className="flexColStart stat">
              <span>
                <CountUp start={1950} end={2000} duration={4} />
                <span>+</span>
              </span>
              <span>Happy Clients</span>
            </div>
            <div className="flexColStart stat">
              <span>
                <CountUp end={20} duration={4} />
                <span>+</span>
              </span>
              <span>Awards won </span>
            </div>
          </div>
        </div>
        {/* RIGHT SIDE */}
        <div className="flexCenter hero-right">
          <div className="image-container">
            <img src="./hero-image.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
