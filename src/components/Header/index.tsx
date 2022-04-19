import React from "react";

import "./Header.scss";

import logo from "../../assets/logo/logo_text.png";
import Button from "../Button";

const Header: React.FC = () => {
  return (
    <div className="mx pad">
      <header className="header">
        <div className="logo">
          <img src={logo} alt="ChainedX logo" />
        </div>
        <a href="/">
          <Button>Launch App</Button>
        </a>
      </header>
    </div>
  );
};

export default React.memo(Header);
