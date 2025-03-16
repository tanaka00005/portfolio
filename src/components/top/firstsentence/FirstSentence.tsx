import React from "react";
import styles from "./FirstSentence.module.scss";

function FirstSentence() {
  return (
    <div className={styles.content}>
      <div className={styles.imgContainer}>
        <img className={styles.imgStyle} src="/img/hanabi.jpg" alt="hanabi" />
      </div>

      <div className={styles.circleWidth}>
        <div className={styles.circleHeight} />
      </div>
      {/* <h1 className="rightContent">portfolio</h1> */}
    </div>
  );
}

export default FirstSentence;
