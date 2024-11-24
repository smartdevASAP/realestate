import React from "react";
// import {
//   Accordion,
//   // AccordionItem,
//   AccordionItemHeading,
//   AccordionItemButton,
//   // AccordionItemPanel,
//   // AccordionItemState,
// } from "@mui/material";
// import { MdOutlineArrowDropDown } from "react-icons/md";
import "./Value.css";
import data from "../../Utils/Accordion";

function Value() {
  return (
    <div>
      <section className="v-wrapper">
        <div className="paddings innerWidth flexCenter v-container">
          {/*Left */}
          <div className="v-left">
            <div className="image-container">
              <img src="./value.png" alt="" />
            </div>
          </div>
          {/*RIGHT SECTION */}
          <div className="flexColStart v-right">
            <span className="orangeText">OurValue</span> <br />
            <span className="secondaryText">Value We give you</span> <br />
            <span>
              We believe a good place to live can make your life even more
              better
            </span>
            {/* <Accordion
              allowMultipleExpanded={false}
              preExpanded={[0]}
              className="accordion"
            >
              {data.map((item, i) => {
                return (
                  <section className="accordionItem" key={i} uuid={i}>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        <div className="flexCenter icon">{item.icon}</div>
                        <span className="primaryText">{item.heading}</span>
                        <div className="flexCenter icon">
                          <MdOutlineArrowDropDown size={20} />
                        </div>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                  </section>
                );
              })}
            </Accordion> */}
            <span>
              <b className="orangeText">Quality Is Our Middle name</b> <br />
              <p>
                We have Done a due dilligence on the properties that we sell and
                have complete assurance that Legitimacy is held core in every
                stage of Housing.
              </p>
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Value;
