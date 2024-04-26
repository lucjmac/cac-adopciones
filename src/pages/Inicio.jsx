import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import Nosotros from "../Components/Content/Nosotros";
import Requisitos from "../Components/Content/Requisitos";

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
