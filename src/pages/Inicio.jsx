import { useState, useEffect, useContext } from "react";
import { RecipesContext } from "../Context/Context";
import Hero from "../Components/Hero/Hero";
import SliderGrid from "../Components/Slider/SliderGrid";
import RecetaNuevas from "../Components/Molecules/NewRecipe/RecetasNuevasGrid";

const Inicio = () => {
  const context = useContext(RecipesContext);
  

  
  const maxRecepies = context.recipes.length - 7;
  const randomNumber = Math.floor(Math.random() * maxRecepies) + 1;
  const randomNewRecipes = context.recipes.slice(randomNumber, randomNumber + 10);
    
   

  const categories = context.categories || [];
  

  const parsedCategories = categories.map((category) => {
    return {
      img: category.strCategoryThumb,
      label: category.strCategory,
      to: `/recetas?categories=${category.strCategory}`,
    };
  });

  const parsedNewRecipes = randomNewRecipes.map((recipe) => {
    return {
      img: recipe.strMealThumb,
      label: recipe.strMeal,
      to: `/receta/${recipe.idMeal}`,
    }
  });

  return (
    <>
      <Hero recetas={context.recipes} loading={context.loading} />
      <SliderGrid list={parsedCategories} title="CATEGORIES" />
      <RecetaNuevas list={parsedNewRecipes} />
    </>
  );
};

export default Inicio;
