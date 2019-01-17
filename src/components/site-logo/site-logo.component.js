import React from "react";
import Logo from "../../assets/baboon.svg";

import "./site-logo.styles.scss";

const SiteLogo = () => {
  return (
    <div className="siteLogo">
      <img className="siteLogo__image" src={Logo} alt="Site logo" />
      <div className="siteLogo__text">rafikis</div>
    </div>
  );
};

export default SiteLogo;
