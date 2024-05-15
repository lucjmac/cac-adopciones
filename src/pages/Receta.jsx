import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getResults from "../utils/getSearchResults";
import RecipeCard from "../Components/Molecules/RecipeCard/RecipeCard";
import RecipeWrapper from "../Components/Content/RecipeWrapper/RecipeWrapper";
import Spinner from "../Components/Spinner/Spinner";

const Receta = () => {
  const { recetaId } = useParams();
  const [result, setResults] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getResults(`lookup.php?i=${recetaId}`).then((results) => {
      setResults(results.meals[0]);
      setLoading(false);
    });
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
      {loading ? (
        <div
          style={{ padding: "5rem", display: "flex", justifyContent: "center" }}
        >
          <Spinner />
        </div>
      ) : (
        <>
          <RecipeCard details={result} />
          <RecipeWrapper ingredients={ingredients} result={result} />
        </>
      )}
    </section>
  );
};

export default Receta;
