import React from "react";

import SiteLogo from "../site-logo/site-logo.component";
import Menu from "../menu/menu.component";
import "./header.styles.scss";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-container__logo">
        <SiteLogo />
      </div>
      <div className="header-container__menu">
        <Menu />
      </div>
    </div>
  );
};

export default Header;
