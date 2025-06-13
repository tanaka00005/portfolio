"use client";
import React from "react";
import style from "./index.module.scss";
import Link from "next/link";

function Awards() {
  return (
    <div className={style.box}>
      <div className={style.title}>受賞</div>

      <Link
        className={style.award}
        href="https://github.com/tanaka00005/sys_register_app"
        rel="noopener noreferrer"
        target="_blank"
      >
        <span className={style.label}>優秀賞</span>
        <span className={style.description}>愛知工業大学工科展</span>
      </Link>

      <Link
        className={style.award}
        href="https://github.com/hottospot/hottospot"
        rel="noopener noreferrer"
        target="_blank"
      >
        <span className={style.label}>努力賞</span>
        <span className={style.description}>技育CAMP 2024年 vol.23</span>
      </Link>

      <Link
        className={style.award}
        href="https://github.com/hottospot/hottospot_ex"
        rel="noopener noreferrer"
        target="_blank"
      >
        <span className={style.label}>企業賞</span>
        <span className={style.description}>技育博 2025年 vol.1</span>
      </Link>
    </div>
  );
}

export default Awards;
