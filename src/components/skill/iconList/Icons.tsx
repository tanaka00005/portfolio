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

function Icons() {
  type IconItem = {
    FrontIcons?: Icon[]; //?で省略可能にする
    BackIcons?: Icon[];
    Database?:Icon[];
    Etc?:Icon[];
  };

  const IconList: IconItem[] = [
    {
      FrontIcons: [
        { name: "react", icon: <FaReact size={70} color="rgb(96,219,251)" /> },
        { name: "next", icon: <SiNextdotjs size={70} color="black" /> },
        { name: "html", icon: <FaHtml5 size={70} color="rgb(241,102,43)" /> },
        { name: "css", icon: <FaCss3Alt size={70} color="rgb(52,170,220)" /> },
        { name: "js", icon: <FaJs size={70} color="rgb(255,215,0)" /> },
        {
          name: "ts",
          icon: <TbBrandTypescript size={70} color="rgb(30,144,255)" />,
        },
        { name: "mui", icon: <SiMui size={70} color="rgb(63,81,181)" /> },
      ],
    },
    {
      BackIcons: [
        {
          name: "nodejs",
          icon: <FaNodeJs size={70} color="rgb(102,187,106)" />,
        },
        {
          name: "hono",
          icon: <SiHono size={70} />,
        },
        {
          name: "express",
          icon: <SiExpress size={70} />,
        },
      ],
    },
    {
      Database: [
        {
          name: "firebase",
          icon: <IoLogoFirebase size={70}/>
        },
        {
          name: "mongodb",
          icon: <SiMongodb size={70} />,
        },
        {
          name: "prisma",
          icon: <SiPrisma size={70} />,
        },
      ],
    },
    {
      Etc: [
        {
          name: "github",
          icon: <FaGithub size={70}/>
        },
        {
          name: "illustrator",
          icon: <SiAdobeillustrator size={70} />,
        },
        {
          name: "Maya",
          icon: <SiAutodeskmaya size={70} />,
        },
      ],
    },
  ];
  return (
    <div style={{ color: "black" }}>
      {/* <div>
        {IconList.map((icons,index) =>  (
            <div key={index}>
              <IconTable IconList={icons ?? []} />
            </div>
          )
        )}
      </div> */}
      <IconTable IconList={IconList} />
       
    </div>
  );
}

export default Icons;
