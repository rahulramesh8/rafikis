import React from "react";
import Logo from "../../assets/logo.svg";
import Menu from "../menu/menu.component";

import "./site-logo.styles.scss";

const SiteLogo = () => {
  return (
    <div className="siteLogo">
      <img className="siteLogo__image" src={Logo} alt="Site logo" />
      <div className="siteLogo__text">Rafikis doing things</div>
      <Menu />
    </div>
  );
};

export default SiteLogo;
