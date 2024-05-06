import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../../img/logoHuellitasCirculo.png";

import Search from "../Global/Search";

const Header = () => {
    return (
        <>
            <h1>Header</h1>
            <Search />
        </>
    );
};

export default Header;

