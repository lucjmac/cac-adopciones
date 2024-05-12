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

  const categories = context.categories || [];
  const parsedCategories = categories.map((category) => {
    return {
      img: category.strCategoryThumb,
      label: category.strCategory,
      to: `/recetas?categories=${category.strCategory}`,
    };
  });

  return (
    <>
      <Hero recetas={context.recipes} loading={context.loading} />
      {/* <SliderGrid list={parsedCategories} title="CATEGORIES" /> */}
      <SliderGrid list={parsedCategories} title="CATEGORIES" />
      <br />
      <RecetaNuevas tresRecetas={recetas} />
    </>
  );
};

export default Inicio;
