import { useState, useEffect, useContext } from "react";
import { RecipesContext } from "../Context/Context";
import Hero from "../Components/Hero/Hero";
import SliderGrid from "../Components/Slider/SliderGrid";
import RecetaNuevas from "../Components/Molecules/NewRecipe/RecetasNuevasGrid";

import get from "../utils/conexionAPI";

const Inicio = () => {
  const [recetas, setRecetas] = useState([]);

  useEffect(() => {
    get("/search.php?s=").then((data) => {
      if (data.meals) {
        const maxRecepies = data.meals.length - 7;
        const randomNumber = Math.floor(Math.random() * maxRecepies) + 1;
        const tresRecetas = data.meals.slice(randomNumber, randomNumber + 4);
        setRecetas(tresRecetas);
      } else {
        console.error("Error");
      }
    });
  }, []);
  const context = useContext(RecipesContext);

  return (
    <>
      <Hero recetas={context.recipes} loading={context.loading} />
      <SliderGrid />
      <br />
      <RecetaNuevas tresRecetas={recetas} />
    </>
  );
};

export default Inicio;
