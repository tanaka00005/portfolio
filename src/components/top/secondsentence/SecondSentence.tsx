import React from "react";

import "./SecondSentence.scss";
import AboutLeftSentence from "./AboutLeftSentence";
import AboutRightSentence from "./AboutRightSentence";


function SecondSentence() {
  return (
    <div className="about">
      <div className="about-font">about</div>
      <AboutLeftSentence />
      <AboutRightSentence />
    </div>
  );
}

export default SecondSentence;
