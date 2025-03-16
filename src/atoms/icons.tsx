import React from "react";
import styled from "./Icons.module.scss";

import { FaNodeJs, FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { TbBrandTypescript } from "react-icons/tb";
import { SiMui } from "react-icons/si";
import { SiHono } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import IconTable from "./IconTable";
import { IoLogoFirebase } from "react-icons/io5";
import { SiMongodb } from "react-icons/si";
import { SiPrisma } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { SiAdobeillustrator } from "react-icons/si";
import { SiAutodeskmaya } from "react-icons/si";

type Icon = {
    name: string;
    icon: React.ReactNode;
  };

type IconItem = {
    FrontEnds?: Icon[]; //?で省略可能にする
    BackEnds?: Icon[];
    Database?: Icon[];
    Etc?: Icon[];
  };

export const IconLists: IconItem[] = [
  {
    FrontEnds: [
      { name: "react", icon: <FaReact size={55} color="rgb(96,219,251)" /> },
      { name: "next", icon: <SiNextdotjs size={55} color="black" /> },
      { name: "html", icon: <FaHtml5 size={55} color="rgb(241,102,43)" /> },
      { name: "css", icon: <FaCss3Alt size={55} color="rgb(52,170,220)" /> },
      { name: "js", icon: <FaJs size={55} color="rgb(255,215,0)" /> },
      {
        name: "ts",
        icon: <TbBrandTypescript size={55} color="rgb(30,144,255)" />,
      },
      { name: "mui", icon: <SiMui size={55} color="rgb(63,81,181)" /> },
    ],
  },
  {
    BackEnds: [
      {
        name: "nodejs",
        icon: <FaNodeJs size={55} color="rgb(102,187,106)" />,
      },
      {
        name: "hono",
        icon: <SiHono size={55} color="rgb(255,151,89)" />,
      },
      {
        name: "express",
        icon: <SiExpress size={55} color="black"/>,
      },
    ],
  },
  {
    Database: [
      {
        name: "firebase",
        icon: <IoLogoFirebase size={55} color="rgb(255,165,13)" />,
      },
      {
        name: "mongodb",
        icon: <SiMongodb size={55} color="rgb(85,199,124)" />,
      },
      {
        name: "prisma",
        icon: <SiPrisma size={55} color="black"/>,
      },
    ],
  },
  {
    Etc: [
      {
        name: "github",
        icon: <FaGithub size={55} color="black"/>,
      },
      {
        name: "illustrator",
        icon: <SiAdobeillustrator size={55} color="rgb(48,0,0)" />,
      },
      {
        name: "Maya",
        icon: <SiAutodeskmaya size={55} color="rgb(56,165,204)" />,
      },
    ],
  },
];
