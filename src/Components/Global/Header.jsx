import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import Branding from "../Branding/Branding";

import Search from "../Global/Search";

const Header = () => {
  return (
    <>
      <h1>
        <Branding />
      </h1>
      <Search />
    </>
  );
};

export default Header;
