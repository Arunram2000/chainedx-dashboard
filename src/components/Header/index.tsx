import React from "react";

import "./Header.scss";

import logo from "../../assets/logo/logo_text.png";
import Button from "../Button";
import { APP_URL } from "../../constants/api";

const navLink = [
  { name: "Home", link: "#home" },
  { name: "about", link: "#about" },
  { name: "how it work", link: "#how_it_work" },
  { name: "token", link: "#token" },
  { name: "roadmap", link: "#roadmap" },
  { name: "team", link: "#team" },
  { name: "faq", link: "#faq" },
  { name: "contact", link: "#contact" },
];

const Header: React.FC = () => {
  const renderNavlinks = (
    <ul className="navlinks">
      {navLink.map((routes, index) => (
        <li key={index.toString()}>
          <a href={routes.link}>{routes.name}</a>
        </li>
      ))}
    </ul>
  );
  return (
    <div className="mx pad">
      <header className="header">
        <div className="logo">
          <img src={logo} alt="ChainedX logo" />
        </div>
        {renderNavlinks}
        <a href={APP_URL}>
          <Button>Launch App</Button>
        </a>
      </header>
    </div>
  );
};

export default React.memo(Header);
