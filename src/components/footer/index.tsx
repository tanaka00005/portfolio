"use client";
import React from "react";
import "./index.scss";
import { SiX, SiQiita, SiGithub } from "@icons-pack/react-simple-icons";

function Footer() {
  const socialLinks = [
    {
      icon: SiX,
      url: "https://x.com/tanaka00005_1",
      label: "X",
    },
    {
      icon: SiQiita,
      url: "https://qiita.com/meiyutianzhong557",
      label: "Qiita",
    },
    {
      icon: SiGithub,
      url: "https://github.com/tanaka00005",
      label: "GitHub",
    },
  ];

  const openExternalLink = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <>
      <footer className="footer">
        <div className="footer__social">
          {socialLinks.map((social, index) => {
            const IconComponent = social.icon;
            return (
              <button
                key={index}
                className="footer__social-btn"
                onClick={() => openExternalLink(social.url)}
                aria-label={`${social.label}を開く`}
              >
                <IconComponent size={20} color="rgb(163, 29, 29)"/>
              </button>
            );
          })}
        </div>
      </footer>
    </>
  );
}

export default Footer;
