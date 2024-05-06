import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
// import logo from "../../assets/img/";

import Recetas from "../Content/Recetas";

const Header = () => {
    return (
        <>
            <h1>Header</h1>
            <Recetas />
        </>
    );
};

export default Header;

