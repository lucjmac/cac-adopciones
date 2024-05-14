import { useState, useEffect, useContext } from "react";
import { RecipesContext } from "../Context/Context";
import Hero from "../Components/Hero/Hero";
import SliderGrid from "../Components/Slider/SliderGrid";
import RecetaNuevas from "../Components/Molecules/NewRecipe/RecetasNuevasGrid";

const Inicio = () => {
  const context = useContext(RecipesContext);
  const [recetas, setRecetas] = useState([]);

  useEffect(() => {
    const maxRecepies = context.recipes.length - 7;
    const randomNumber = Math.floor(Math.random() * maxRecepies) + 1;
    const tresRecetas = context.recipes.slice(randomNumber, randomNumber + 4);
    setRecetas(tresRecetas);
  }, [context.recipes]);

  const categories = context.categories || [];
  const parsedCategories = categories.map((category) => {
    return {
      img: category.strCategoryThumb,
      label: category.strCategory,
      to: `/recetas?category=${category.strCategory}`,
    };
  });

  return (
    <>
      <Hero recetas={context.recipes} loading={context.loading} />
      <SliderGrid list={parsedCategories} title="All Categories" />
      <RecetaNuevas tresRecetas={recetas} />
    </>
  );
};

export default Inicio;
