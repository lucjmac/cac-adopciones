import SliderGrid from "../Components/Slider/SliderGrid";
import RecetaNuevas from "../Components/Molecules/NewRecipe/RecetasNuevasGrid";

import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import get from "../utils/conexionAPI"

const Inicio = () => {

  const [recetas, setRecetas] = useState([]);
  useEffect(() => {
    get("/search.php?s=").then((data) => {
      if (data.meals) {
        const tresRecetas = data.meals.slice(9,13);
        setRecetas(tresRecetas);
        console.log(data)
      }
      else {
        console.error("Error");
      }
    });

  }, []);

  return (
    <>
      <SliderGrid />
      <br />
      <RecetaNuevas tresRecetas={ recetas} />
    </>
  );
};

export default Inicio;
