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
  Database?: Icon[];
  Etc?: Icon[];
};

interface IconTableProps {
  IconList: IconItem[];
}

////////////////////////////['FrontEnds','BackEnds','Database',,,]などの名称配列を回して一致すればそれを表示！！！！！！

function IconTable() {
  const IconList = IconLists;
  console.log("IconList", IconList);

  const SlillsArray: (keyof IconItem)[] = [
    "FrontEnds",
    "BackEnds",
    "Database",
    "Etc",
  ];

  return (
    <div className={styles.icon}>
      {SlillsArray.map((skillArray: string, index: number) =>
        skillArray === "FrontEnds" ? (
          <div key={skillArray}>
            <h3 className={styles.skillArrayTitle}>{skillArray}</h3>
            <div className={styles.grid}>
              {IconList[index]?.[skillArray as keyof IconItem]?.map(
                (icon: { name: string; icon: React.ReactNode }) => (
                  <span key={icon.name}>
                    {icon.icon}
                    {/* {icon.name} */}
                  </span>
                )
              )}
            </div>
          </div>
        ) : (
          // <div style={{  }}>
            <div key={skillArray} className={styles.skillArrayBottom}>
              <h3 className={styles.skillArrayTitle}>{skillArray}</h3>
              <div className={styles.gridBottom}>
                {IconList[index]?.[skillArray as keyof IconItem]?.map(
                  (icon: { name: string; icon: React.ReactNode }) => (
                    <div key={styles.nameButtom}>
                      {icon.icon}
                      {/* {icon.name} */}
                    </div>
                  )
                )}
              </div>
            </div>
          // </div>
        )
      )}
    </div>
  );
}

export default IconTable;
