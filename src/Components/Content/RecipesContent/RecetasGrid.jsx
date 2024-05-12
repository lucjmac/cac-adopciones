import { useSearchParams } from "react-router-dom";
import { RecipesContext } from "../../../Context/Context.js";
import { useContext } from "react";

const RecetasGrid = () => {
  const context = useContext(RecipesContext);

  const [searchParams] = useSearchParams();
  const querySearch = searchParams.get("search");
  const queryCategory = searchParams.get("categories");
  const queryArea = searchParams.get("area");
  const queryIngredient = searchParams.get("ingredient");

  let filteredRecipes = context.recipes || [];

  if (querySearch && filteredRecipes.length > 0) {
    filteredRecipes = filteredRecipes.filter(
      (recipe) =>
        recipe?.strMeal?.includes(querySearch) ||
        recipe?.strArea?.includes(querySearch) ||
        recipe?.strMeal?.includes(querySearch) ||
        recipe?.strCategory?.includes(querySearch) ||
        recipe?.strIngredient1?.includes(querySearch) ||
        recipe?.strIngredient2?.includes(querySearch) ||
        recipe?.strIngredient3?.includes(querySearch) ||
        recipe?.strIngredient4?.includes(querySearch) ||
        recipe?.strIngredient5?.includes(querySearch) ||
        recipe?.strIngredient6?.includes(querySearch) ||
        recipe?.strIngredient7?.includes(querySearch) ||
        recipe?.strIngredient8?.includes(querySearch) ||
        recipe?.strIngredient9?.includes(querySearch) ||
        recipe?.strIngredient10?.includes(querySearch) ||
        recipe?.strIngredient11?.includes(querySearch) ||
        recipe?.strIngredient12?.includes(querySearch) ||
        recipe?.strIngredient13?.includes(querySearch) ||
        recipe?.strIngredient14?.includes(querySearch) ||
        recipe?.strIngredient15?.includes(querySearch) ||
        recipe?.strIngredient16?.includes(querySearch) ||
        recipe?.strIngredient17?.includes(querySearch) ||
        recipe?.strIngredient18?.includes(querySearch) ||
        recipe?.strIngredient19?.includes(querySearch) ||
        recipe?.strIngredient20?.includes(querySearch)
    );
  }

  if (queryCategory && filteredRecipes.length > 0) {
    filteredRecipes = filteredRecipes.filter((recipe) =>
      recipe?.strCategory?.includes(queryCategory)
    );
  }

  if (queryArea && filteredRecipes.length > 0) {
    filteredRecipes = filteredRecipes.filter((recipe) =>
      recipe?.strArea?.includes(queryArea)
    );
  }
  if (queryIngredient && filteredRecipes.length > 0) {
    filteredRecipes = filteredRecipes.filter(
      (recipe) =>
        recipe?.strIngredient1?.includes(queryIngredient) ||
        recipe?.strIngredient2?.includes(queryIngredient) ||
        recipe?.strIngredient3?.includes(queryIngredient) ||
        recipe?.strIngredient4?.includes(queryIngredient) ||
        recipe?.strIngredient5?.includes(queryIngredient) ||
        recipe?.strIngredient6?.includes(queryIngredient) ||
        recipe?.strIngredient7?.includes(queryIngredient) ||
        recipe?.strIngredient8?.includes(queryIngredient) ||
        recipe?.strIngredient9?.includes(queryIngredient) ||
        recipe?.strIngredient10?.includes(queryIngredient) ||
        recipe?.strIngredient11?.includes(queryIngredient) ||
        recipe?.strIngredient12?.includes(queryIngredient) ||
        recipe?.strIngredient13?.includes(queryIngredient) ||
        recipe?.strIngredient14?.includes(queryIngredient) ||
        recipe?.strIngredient15?.includes(queryIngredient) ||
        recipe?.strIngredient16?.includes(queryIngredient) ||
        recipe?.strIngredient17?.includes(queryIngredient) ||
        recipe?.strIngredient18?.includes(queryIngredient) ||
        recipe?.strIngredient19?.includes(queryIngredient) ||
        recipe?.strIngredient20?.includes(queryIngredient)
    );
  }

  return (
    <ul className="recetasGrid">
      {filteredRecipes.map((receta) => (
        <li key={receta.idMeal} className="recetasCard">
          <div>
            <img src={receta.strMealThumb} alt={receta.strMeal} />
            <h3 className="recetasCardTitle">{receta.strMeal}</h3>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default RecetasGrid;
