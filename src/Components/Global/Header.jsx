import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import Branding from "../Branding/Branding";

const Header = () => {
  return (
    <h1>
      <Branding />
    </h1>
  );
};

export default Header;
