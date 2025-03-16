import React from "react";

import "./index.scss";
import SkillsTable from "@/components/SkillsTable";
import Footer from "@/components/footer";
import IconTable from "@/components/skill/IconTable";


function index() {
  return (
    <div style={{display: "flex", flexDirection: "column"}}>
      <IconTable />
      <SkillsTable />
      <Footer />
    </div>
  );
}

export default index;
