import React from "react";
import Menu from "../menu/menu.component";

import "./header.styles.scss";
import SiteLogo from "../site-logo/site-logo.component";

const Header = () => {
  return (
    <>
      <SiteLogo />
      <Menu />
    </>
  );
};

export default Header;
