"use client";
import React, { useState } from "react";
import styles from "./index.module.scss";
import Image from "next/image";

function SkillsSlider() {
  const [isPaused, setIsPaused] = useState(false);

  const products = [
    {
      name: "SysPay",
      type: ["web", "フロントエンド"],
      image: "/img/SysPayImg.png",
      description:
        "大学内工科展優秀賞。       学園祭で行ったサークルの模擬店で使用するための会計システムです。昨年使用した会計システムをフィードバックし、改善点を修正して、研究室などで行われた研究を競う工科展に出展しました。",
    },
    {
      name: "ETロボコン",
      type: ["組み込み", "モデル図"],
      image: "/img/ETrobo.jpg",
      description:
        "学校側が募っているプロジェクトに私が興味を持ち参加させて頂きました。この大会はラズベリーパイとスパイクを搭載したレゴのロボットを組み込み技術を用いて動かして競争するソフトウェアエンジニア向けのロボットコンテストです。そのコンテストに同じ学内の3人が応募して臨みました。",
    },
    {
      name: "HeartLink",
      type: ["web", "フロントエンド"],
      image: "/img/HeartLink.png",
      description:
        "心拍数を測定し相性を診断するアプリです。主な機能として、会話内容の提案、心拍のシンクロ率の表示、心拍のグラフ化の3つを提供します。話題の提案により会話が弾み、自然なコミュニケーションが生まれます。シンクロ率の表示では、お互いの心拍の一致度を計算し、心拍の変化をグラフ化することで、どのタイミングでドキドキしたのかを振り返ることができ、心理的なつながりを可視化できます。",
    },
    {
      name: "HottoSpot",
      type: ["web", "フロントエンド"],
      image: "/img/Hottospot.png",
      description:
        "技育CAMP vol.23 努力賞。       ユーザーにいいねを1~10の段階でつけてもらい、熱い場所を可視化でき簡単に見つけることができます。また、ランキングで表示することでどの場所が最も熱い場所なのかも確認できます。また、友達同士ではアルバムの共有をすることができます。友達の追加はフレンドコードまたは、QRコードを読み込むことで互いに登録されます。",
    },
  ];

  const handleTouchStart = () => {
    setIsPaused(true);
  };

  const handleTouchStop = () => {
    setIsPaused(false);
  };

  return (
    <div>
      <div className={styles.wrap}>
        {[...Array(3)].map((_, i) => (
          <div key={i}>
            <ul
              className={`${styles.productContainer} ${
                isPaused ? styles.wrapSlidePaused : ""
              }`}
            >
              {products.map((product) => (
                <li
                  key={product.name}
                  className={`${styles.product} ${styles.contentHover}`}
                >
                  {/* <div className={styles.name}>{product.name}</div> */}
                  <Image
                    src={product.image}
                    alt={product.name}
                    className={styles.image}
                    width={400}
                    height={400}
                  />
                </li>
              ))}
              <div
                style={{ pointerEvents: isPaused ? "auto" : "none" }}
                className={styles.touchArea}
                onTouchStart={handleTouchStart}
                onMouseEnter={handleTouchStart}
                onMouseLeave={handleTouchStop}
                onTouchEnd={handleTouchStop}
              ></div>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkillsSlider;
