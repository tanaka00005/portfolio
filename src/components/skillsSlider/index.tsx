"use client";
import React, { useState, useEffect } from "react";
import styles from "./index.module.scss";
import Image from "next/image";

function SkillsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const products = [
    {
      name: "SysPay",
      type: ["web", "フロントエンド"],
      image: "/img/SysPayImg.png",
      description: "大学内工科展優秀賞。サークルの模擬店用の会計システム。",
      width: 300,
      height: 400,
    },
    {
      name: "ETロボコン",
      type: ["組み込み", "モデル図"],
      image: "/img/ETrobo.jpg",
      description: "ラズパイとレゴを使ったロボコン。組み込みで競技参加。",
      width: 200,
      height: 400,
    },
    {
      name: "HeartLink",
      type: ["web", "フロントエンド"],
      image: "/img/HeartLink.png",
      description: "心拍で相性診断する恋愛系アプリ。",
      width: 200,
      height: 400,
    },
    {
      name: "HottoSpot",
      type: ["web", "フロントエンド"],
      image: "/img/Hottospot.png",
      description: "バズっている場所を数値化・可視化するマップアプリ。",
      width: 250,
      height: 400,
    },
    {
      name: "Plantalk",
      type: ["web", "フロントエンド，バックエンド"],
      image: "/img/plantalk.png",
      description: "小学生に向けた植物育成アプリ",
      width: 470,
      height: 470,
    },
  ];

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % products.length);
    }, 2000); // 2秒ごとに次のカードへ

    return () => clearInterval(timer);
  }, [isPaused]);

  const handleTouchStart = () => setIsPaused(true);
  const handleTouchStop = () => setIsPaused(false);

  return (
    <div className={styles.sliderWrapper}>
      <div
        className={styles.sliderInner}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        onMouseEnter={handleTouchStart}
        onMouseLeave={handleTouchStop}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchStop}
      >
        {products.map((product) => (
          <div key={product.name} className={styles.productSlide}>
            <img
              src={product.image}
              alt={product.name}
              className={styles.image}
              width={product.width}
              height={product.height}
            />
            {/* <p className={styles.productTitle}>{product.name}</p> */}

            <p className={styles.productTitle}>{product.name}</p>
            <p className={styles.productType}>{product.type.join(" / ")}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkillsSlider;
