import React from "react";
import styled from "./Icons.module.scss";
import {
  SiReact,
  SiNextdotjs,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiMui,
  SiNodedotjs,
  SiHono,
  SiExpress,
  SiMongodb,
  SiPrisma,
  SiGithub,
  SiC,
  SiPython,
  SiFirebase,
  SiAutodeskmaya,
  SiSvelte,
  SiPostgresql,
  SiSass,
  SiGit,
  SiGo,
  SiAmazonwebservices,
  SiMysql,
  SiDocker
} from "@icons-pack/react-simple-icons";

import { SiAdobeillustrator } from "react-icons/si";

type Icon = {
  name: string;
  icon: React.ReactNode;
};

type IconItem = {
  FrontEnds?: Icon[]; //?で省略可能にする
  BackEnds?: Icon[];
  Etc?: Icon[];
};

const clolor = "default";
const size = "40";

export const IconLists: IconItem[] = [
  {
    FrontEnds: [
      { name: "svelte", icon: <SiSvelte size={size} color={clolor}/> },
      { name: "react", icon: <SiReact size={size} color={clolor}/> },
      { name: "next", icon: <SiNextdotjs size={size} color={clolor}  /> },
      { name: "html", icon: <SiHtml5 size={size} color={clolor}  /> },
      { name: "css", icon: <SiCss3 size={size} color={clolor}  /> },
      { name: "javascript", icon: <SiJavascript size={size} color={clolor}  /> },
      {
        name: "typescript",
        icon: <SiTypescript size={size} color={clolor}  />,
      },
      { name: "mui", icon: <SiMui size={size} color={clolor}  /> },
      { name: "scss", icon: <SiSass size={size} color={clolor}  /> },
    ],
  },
  {
    BackEnds: [
      {
        name: "nodejs",
        icon: <SiNodedotjs size={size} color={clolor}  />,
      },
      {
        name: "hono",
        icon: <SiHono size={size} color={clolor}  />,
      },
      {
        name: "express",
        icon: <SiExpress size={size} color={clolor}  />,
      },
      {
        name: "firebase",
        icon: <SiFirebase size={size} color={clolor}  />,
      },
      {
        name: "mongodb",
        icon: <SiMongodb size={size} color={clolor}  />,
      },
      {
        name: "prisma",
        icon: <SiPrisma size={size} color={clolor}  />,
      },
      {
        name: "postgresql",
        icon: <SiPostgresql size={size} color={clolor}  />,
      },
      {
        name: "mysql",
        icon: <SiMysql size={size} color={clolor}  />,
      },
      {
        name: "go",
        icon: <SiGo size={size} color={clolor}  />,
      },
    ],
  },
  {
    Etc: [
      {
        name: "github",
        icon: <SiGithub size={size} color={clolor}  />,
      },
      {
        name: "git",
        icon: <SiGit size={size} color={clolor}  />,
      },
      {
        name: "illustrator",
        icon: <SiAdobeillustrator size={size} color={clolor}  />,
      },
      {
        name: "Maya",
        icon: <SiAutodeskmaya size={size} color={clolor}  />,
      },
      {
        name: "C",
        icon: <SiC size={size} color={clolor}  />,
      },
      {
        name: "Python",
        icon: <SiPython size={size} color={clolor}  />,
      },
      {
        name: "aws",
        icon: <SiAmazonwebservices size={size} color={clolor}  />,
      },
      {
        name: "docker",
        icon: <SiDocker size={size} color={clolor}  />,
      },
    ],
  },
];
