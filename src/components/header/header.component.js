import React from "react";
import Menu from "../menu/menu.component";
import SearchInput from "../search-input/search-input.component";

// import "./header.styles.scss";
import SiteLogo from "../site-logo/site-logo.component";

const Header = () => {
  return (
    <>
      <SiteLogo />
      <SearchInput />
      <Menu />
    </>
  );
};

export default Header;
