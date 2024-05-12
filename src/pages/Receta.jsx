import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getResults from "../utils/getSearchResults";
import RecipeCard from "../Components/Molecules/RecipeCard/RecipeCard";
import RecipeWrapper from "../Components/Content/RecipeWrapper/RecipeWrapper";

const Receta = () => {
  const { recetaId } = useParams();
  const [result, setResults] = useState([]);
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    getResults(`lookup.php?i=${recetaId}`).then((results) =>
      setResults(results.meals[0])
    );
  }, [recetaId]);

  useEffect(() => {
    if (!result) return;
    getIngredients();
  }, [result]);

  const getIngredients = () => {
    const ingredients = Object.entries(result)
      .filter((entry) => entry[0].includes("strIngredient"))
      .map((entry) => entry[1])
      .filter((result) => result !== "");

    const quantity = Object.entries(result)
      .filter((entry) => entry[0].includes("strMeasure"))
      .map((entry) => entry[1])
      .filter((result) => result !== " ");

    const ingredientsWithQuantity = ingredients.map((ingredient, index) => {
      return { ingredient, quantity: quantity[index] };
    });
    setIngredients(ingredientsWithQuantity);
  };

  return (
    <section className="recipe-page">
      <RecipeCard details={result} />

      <RecipeWrapper ingredients={ingredients} result={result} />
    </section>
  );
};

export default Receta;
