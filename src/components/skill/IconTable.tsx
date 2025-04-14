import React from "react";
import styles from "./Icons.module.scss";
import { IconList, IconLists } from "@/atoms/icons";

type Icon = {
  name: string;
  icon: React.ReactNode;
};
type IconItem = {
  FrontEnds?: Icon[]; //?で省略可能にする
  BackEnds?: Icon[];
  Etc?: Icon[];
};

////////////////////////////['FrontEnds','BackEnds','Database',,,]などの名称配列を回して一致すればそれを表示！！！！！！

function IconTable() {
  const IconList = IconLists;
  console.log("IconList", IconList);

  const SlillsArray: (keyof IconItem)[] = [
    "FrontEnds",
    "BackEnds",
    "Etc",
  ];

  return (
    <div className={styles.icon}>
      {SlillsArray.map((skillArray: string, index: number) => (
        <div key={skillArray}>
          <h3 className={styles.skillArrayTitle}>{skillArray}</h3>
          <div className={styles.grid}>
            {IconList[index]?.[skillArray as keyof IconItem]?.map(
              (icon: { name: string; icon: React.ReactNode }) => (
                <span key={icon.name} style={{ textAlign: "center" }}>
                  {icon.icon}
                  <div>{icon.name}</div>
                </span>
              )
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default IconTable;
