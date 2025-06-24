import React from "react";
import "./index.scss";
import Link from "next/link";

function Header() {
  return (
      <div className="footer">
        <div className="footer-skill">
          <Link href={"/skill"}>skills</Link>{" "}
        </div>
        <div className="footer-skill">
          <Link href={"/"}>top</Link>{" "}
        </div>
        {/* "/skill"にすることでskillのindexに遷移 */}
        <div className="footer-works">works</div>
      </div>
    );
}

export default Header;
