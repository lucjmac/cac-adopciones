import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import Nosotros from "../components/Content/Nosotros";
import Requisitos from "../components/Content/Requisitos";

const Inicio = () => {
    return (
        <>
            <h2>Inicio</h2>

            <Nosotros />
            <Requisitos />
        </>
    );
};

export default Inicio;
