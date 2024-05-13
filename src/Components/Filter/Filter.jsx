import { useState, useContext } from "react";
import {
  useSearchParams,
  useNavigate,
  createSearchParams,
} from "react-router-dom";
import { RecipesContext } from "../../Context/Context.js";
import { IoCloseCircleOutline } from "react-icons/io5";

const Filter = () => {
  const context = useContext(RecipesContext);
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const { categories, areas, ingredients } = context;

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [area, setArea] = useState("");
  const [ingredient, setIngredient] = useState("");

  const handleApply = () => {
    if (search) {
      setSearchParams((searchParams) => {
        searchParams.set("search", search);
        return searchParams;
      });
    }
    if (category) {
      console.log("entra aca");
      setSearchParams((searchParams) => {
        searchParams.set("category", category);
        return searchParams;
      });
    }
    if (area) {
      setSearchParams((searchParams) => {
        searchParams.set("area", area);
        return searchParams;
      });
    }
    if (ingredient) {
      setSearchParams((searchParams) => {
        searchParams.set("ingredient", ingredient);
        return searchParams;
      });
    }
  };

  const handleClear = () => {
    setSearch("");
    setCategory("");
    setArea("");
    setIngredient("");
    navigate(`/recetas`);
  };

  const clearSearchParam = (index) => {
    const queries = ["search", "category", "area", "ingredient"];
    const queriesValues = [search, category, area, ingredient];
    const setQueries = [setSearch, setCategory, setArea, setIngredient];
    setQueries[index]("");

    const params = window.location.search
      .split("?")[1]
      .split("&")
      .filter((item) => !item.includes(queries[index]))
      .join("&");

    navigate(`/recetas?${params}`, {
      state: { deleted: queries[index], value: queriesValues[index] },
    });
  };

  return (
    <>
      <h1>Filters</h1>
      <div className="filterTags">
        {[search, category, area, ingredient].map((tag, index) => {
          if (tag === "") return;
          return (
            <div key={index}>
              <p>{tag}</p>
              <button
                className="tagClearButton"
                onClick={() => clearSearchParam(index)}
              >
                <IoCloseCircleOutline />
              </button>
            </div>
          );
        })}
      </div>
      <form className="filterForm" onSubmit={(e) => e.preventDefault()}>
        <fieldset>
          <label htmlFor="advanced-search">Advanced Search</label>
          <input
            name="search"
            type="text"
            placeholder="Search by Category, Area or Ingredient"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="searchInput"
          />
        </fieldset>
        <fieldset>
          <label htmlFor="categories">Category</label>
          <select
            name="categories"
            multiple
            placeholder="Search Category"
            id="categories"
            tabIndex="-1"
            className="categorySelect"
            onChange={(e) => {
              setCategory(e.target.value);
            }}
          >
            {categories.map((itemCategory) => (
              <option
                key={itemCategory.strCategory}
                value={itemCategory.strCategory}
                selected={category && category === itemCategory.strCategory}
              >
                {itemCategory.strCategory}
              </option>
            ))}
          </select>
        </fieldset>
        <fieldset>
          <label htmlFor="area">Area</label>
          <select
            name="area"
            multiple
            placeholder="Search Area"
            id="area"
            tabIndex="-1"
            className="areaSelect"
            onChange={(e) => {
              setArea(e.target.value);
            }}
          >
            {areas.map((itemArea) => (
              <option
                key={itemArea.strArea}
                value={itemArea.strArea}
                selected={area && area === itemArea.strArea}
              >
                {itemArea.strArea}
              </option>
            ))}
          </select>
        </fieldset>
        <fieldset>
          <label htmlFor="ingredient">Ingredient</label>
          <select
            name="ingredient"
            multiple
            placeholder="Search Ingredient"
            id="ingredient"
            tabIndex="-1"
            className="ingredientSelect"
            onChange={(e) => {
              setIngredient(e.target.value);
            }}
          >
            {ingredients.map((itemIngredient) => (
              <option
                key={`ingredient_${itemIngredient.strIngredient}`}
                value={itemIngredient.strIngredient}
                selected={
                  ingredient && ingredient === itemIngredient.strIngredient
                }
              >
                {itemIngredient.strIngredient}
              </option>
            ))}
          </select>
        </fieldset>
        <button type="button" className="clearButton" onClick={handleClear}>
          Clear
        </button>
        <button type="button" className="applyButton" onClick={handleApply}>
          Apply
        </button>
      </form>
    </>
  );
};

export default Filter;
