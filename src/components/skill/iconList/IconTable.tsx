import React from "react";
import styles from "./Icons.module.scss";

type Icon = {
  name: string;
  icon: React.ReactNode;
};
type IconItem = {
  FrontIcons?: Icon[]; //?で省略可能にする
  BackIcons?: Icon[];
  Database?: Icon[];
  Etc?: Icon[];
};

interface IconTableProps {
  IconList: IconItem[];
}

////////////////////////////['FrontIcons','BackIcons','Database',,,]などの名称配列を回して一致すればそれを表示！！！！！！

function IconTable({ IconList }: IconTableProps) {
  console.log("IconList", IconList);

  const SlillsArray: (keyof IconItem)[] = [
    "FrontIcons",
    "BackIcons",
    "Database",
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
                <span style={{ color: "black" }} key={icon.name}>
                  {icon.icon}
                  {icon.name}
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
