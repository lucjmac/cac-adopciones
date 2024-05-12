import { useSearchParams } from "react-router-dom";
import { RecipesContext } from "../../../Context/Context.js";
import { useContext, useEffect, useState } from "react";

const RecetasGrid = () => {
  const context = useContext(RecipesContext);

  const [searchParams] = useSearchParams();
  const querySearch = searchParams.get("search");
  const queryCategory = searchParams.get("categories");
  const queryArea = searchParams.get("area");
  const queryIngredient = searchParams.get("ingredient");
  const [filteredRecipes, setFilteredRecipes] = useState([]);

  useEffect(() => {
    if (filteredRecipes.length > 0) return;

    setFilteredRecipes(context.recipes || []);
  }, [context.recipes, filteredRecipes]);

  useEffect(() => {
    if (!queryCategory || filteredRecipes.length === 0) return;
    const selected = filteredRecipes.filter(
      (recipe) => recipe.strCategory === queryCategory
    );
    setFilteredRecipes(selected);
  }, [queryCategory]);

  useEffect(() => {
    if (!queryArea || filteredRecipes.length === 0) return;
    const selected = filteredRecipes.filter(
      (recipe) => recipe.strArea === queryArea
    );
    setFilteredRecipes(selected);
  }, [queryArea]);

  useEffect(() => {
    if (!queryIngredient || filteredRecipes.length === 0) return;
    const selected = filteredRecipes.filter((recipe) => {
      const ingredients = Object.entries(recipe)
        .filter((entry) => entry[0].includes("strIngredient"))
        .map((entry) => entry[1])
        .filter((result) => result !== "" && result !== null);

      const hasIngredient = ingredients.some((ingredient) =>
        ingredient.includes(queryIngredient)
      );

      if (hasIngredient) {
        return recipe;
      }
    });

    setFilteredRecipes(selected);
  }, [queryIngredient]);

  useEffect(() => {
    if (!querySearch || filteredRecipes.length === 0) return;

    const selected = filteredRecipes.filter((recipe) => {
      const propsWithValues = Object.entries(recipe)
        .map((entry) => entry[1])
        .filter((entry) => entry !== "" && entry !== " " && entry !== null);

      const hasIngredient = propsWithValues.some((prop) =>
        prop.includes(querySearch)
      );

      if (hasIngredient) {
        return recipe;
      }
    });

    setFilteredRecipes(selected);
  }, [querySearch]);

  console.log("filteredRecipes", filteredRecipes);

  return (
    <ul className="recetasGrid">
      {filteredRecipes &&
        filteredRecipes.map((receta) => (
          <li key={receta.idMeal} className="recetasCard">
            <div>
              <img src={receta.strMealThumb} alt={receta.strMeal} />
              <h3 className="recetasCardTitle">{receta.strMeal}</h3>
            </div>
          </li>
        ))}

      {filteredRecipes.length === 0 && <p>No results found</p>}
    </ul>
  );
};

export default RecetasGrid;
