import { NavLink, useSearchParams } from "react-router-dom";
import { RecipesContext } from "../../../Context/Context.js";
import { useContext, useEffect, useState } from "react";
import styles from "./RecetasGrid.module.css";
import Heading from "../../Atoms/Heading/Heading.jsx";
import Pagination from "../../Molecules/Pagination/Pagination.jsx";
import Spinner from "../../Spinner/Spinner.jsx";

const MAX_ITEMS = 15;

const RecetasGrid = () => {
  const context = useContext(RecipesContext);
  const [searchParams] = useSearchParams();
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const { recipes, loading } = context;

  useEffect(() => {
    if (searchParams.size > 0) return;
    setFilteredRecipes(recipes || []);
  }, [recipes, searchParams]);

  useEffect(() => {
    setCurrentIndex(0);
    setResults();
  }, [searchParams]);

  const setResults = () => {
    let results = recipes;
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
      {loading ? (
        <div
          style={{ padding: "5rem", display: "flex", justifyContent: "center" }}
        >
          <Spinner />
        </div>
      ) : (
        <>
          <ul className={styles.recetasGrid}>
            {filteredRecipes &&
              filteredRecipes
                .slice(currentIndex * MAX_ITEMS, MAX_ITEMS * (currentIndex + 1))
                .map((receta) => (
                  <li key={receta.idMeal} className={styles.recetasCard}>
                    <NavLink to={`/receta/${receta.idMeal}`}>
                      <img src={receta.strMealThumb} alt={receta.strMeal} />
                      <h3 className={styles.recetasCardTitle}>
                        {receta.strMeal}
                      </h3>
                    </NavLink>
                  </li>
                ))}

            {filteredRecipes.length === 0 && (
              <p className={styles.totalResults}>No results found</p>
            )}
          </ul>

          {filteredRecipes && filteredRecipes.length > MAX_ITEMS && (
            <Pagination
              maxItems={MAX_ITEMS}
              searchResults={filteredRecipes}
              currentIndex={currentIndex}
              setCurrentIndex={setCurrentIndex}
            />
          )}
        </>
      )}
    </>
  );
};

export default RecetasGrid;
