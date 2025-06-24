import React from "react";
import styles from "./AboutLeftSentence.module.scss";
import Image from "next/image";

function AboutLeftSentence() {
  return (
    <div>
      {/* <div className={styles.profile}>profile</div> */}
      <Image
        className={styles.imgStyle}
        src="/img/myImg.jpg"
        alt="myImg"
        width={200}
        height={200}
      />
    </div>
  );
}

export default AboutLeftSentence;
