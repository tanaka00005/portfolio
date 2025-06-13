"use client"
import React, { useState } from "react";
import "./AboutRightSentence.scss";

function AboutRightSentence() {
  const [detail,setDetail] = useState(false);
  return (
    <div className="about-name">
      <p>田中美羽</p>
      <div className="sentence-content">
        <div className="university-name">
          <div>愛知工業大学</div>
          <div className="university-age">3年</div>
          
        </div>
        
      </div>
      <div className="main-text">
          滋賀県出身の大学生です。好きな事は食べる事。和食派、魚派です。将来は、小さいことでもサポートできるような製品を開発していきたいと考えています。今はwebをメインに開発していますがハードウェアなど、ものづくり全般に興味があります。
        </div>
        
        {/* <div onClick={() => setDetail(!detail)}>詳しく見る</div> */}

        {
          detail && (
            <div>あああああ</div>
          )
        }
    </div>
  );
}

export default AboutRightSentence;
