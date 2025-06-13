import React from "react";

import "./SecondSentence.scss";
import AboutLeftSentence from "./AboutLeftSentence";
import AboutRightSentence from "./AboutRightSentence";

function SecondSentence() {
  return (
    <div>
      <div className="about">
        {/* <div className="about-font">about</div> */}

        <AboutLeftSentence />
        <AboutRightSentence />
      </div>
    </div>
  );
}

export default SecondSentence;
