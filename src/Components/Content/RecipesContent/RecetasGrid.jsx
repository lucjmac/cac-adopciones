import { useSearchParams } from "react-router-dom";
import { RecipesContext } from "../../../Context/Context.js";
import { useContext, useEffect, useState } from "react";
import styles from "./RecetasGrid.module.css";
import Heading from "../../Atoms/Heading/Heading.jsx";

const RecetasGrid = () => {
  const context = useContext(RecipesContext);
  const [searchParams] = useSearchParams();
  const [filteredRecipes, setFilteredRecipes] = useState([]);

  useEffect(() => {
    if (searchParams.size > 0) return;
    setFilteredRecipes(context.recipes || []);
  }, [context.recipes, searchParams]);

  useEffect(() => {
    setResults();
  }, [searchParams]);

  const setResults = () => {
    let results = context.recipes;
    const category = searchParams.get("category");
    const area = searchParams.get("area");
    const ingredient = searchParams.get("ingredient");
    const search = searchParams.get("search");

    if (category) {
      results = results.filter((recipe) => recipe.strCategory === category);
    }

    if (area) {
      results = results.filter((recipe) => recipe.strArea === area);
    }

    if (ingredient) {
      results = results.filter((recipe) => {
        const ingredients = Object.entries(recipe)
          .filter((entry) => entry[0].includes("strIngredient"))
          .map((entry) => entry[1])
          .filter((result) => result !== "" && result !== null);

        const hasIngredient = ingredients.some((item) =>
          item.includes(ingredient)
        );

        if (hasIngredient) {
          return recipe;
        }
      });
    }

    if (search) {
      results = results.filter((recipe) => {
        const propsWithValues = Object.entries(recipe)
          .map((entry) => entry[1])
          .filter((entry) => entry !== "" && entry !== " " && entry !== null);

        const hasIngredient = propsWithValues.some((prop) =>
          prop.includes(search)
        );

        if (hasIngredient) {
          return recipe;
        }
      });
    }

    setFilteredRecipes(results);
  };

  return (
    <>
      <Heading as="h2" title="Results" className="" />
      <p className={styles.totalResults}>
        Total results: {filteredRecipes.length}
      </p>
      <ul className={styles.recetasGrid}>
        {filteredRecipes &&
          filteredRecipes.map((receta) => (
            <li key={receta.idMeal} className={styles.recetasCard}>
              <div>
                <img src={receta.strMealThumb} alt={receta.strMeal} />
                <h3 className={styles.recetasCardTitle}>{receta.strMeal}</h3>
              </div>
            </li>
          ))}

        {filteredRecipes && filteredRecipes.length === 0 && (
          <p>No results found</p>
        )}
      </ul>
    </>
  );
};

export default RecetasGrid;
