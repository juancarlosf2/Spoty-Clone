import React from "react";

interface Props {}

function Header(props: Props) {
  return (
    <nav className="header">
      <div className="content">
        <div className="left"></div>
        <div className="center"></div>
        <div className="right"></div>
      </div>
    </nav>
  );
}

export default Header;
