import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import Nosotros from "../components/content/Nosotros";
import Requisitos from "../components/content/Requisitos";

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
