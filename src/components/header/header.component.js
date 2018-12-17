import React from "react";
import Menu from "../menu/menu.component";
import SearchInput from "../search-input/search-input.component";

import "./header.styles.scss";
import SiteLogo from "../site-logo/site-logo.component";

const Header = () => {
  return (
    <>
      <div className="test-class">INITIAL CODE RAFIKIS</div>
      {/* <SiteLogo /> */}
      <SearchInput />
      <Menu />
    </>
  );
};

export default Header;
