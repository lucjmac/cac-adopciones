import { useState, useEffect, useContext } from "react";
import { RecipesContext } from "../../Context/Context.js";
import { useNavigate } from "react-router-dom";

const Filter = () => {
  const context = useContext(RecipesContext);
  const navigate = useNavigate();

  const { categories, areas, ingredients } = context;

  const [advancedSearch, setAdvancedSearch] = useState("");
  const [category, setCategory] = useState("");
  const [area, setArea] = useState("");
  const [ingredient, setIngredient] = useState("");

  /*const [filteredCategories, setFilteredCategories] = useState([]);
  const [filteredAreas, setFilteredAreas] = useState([]);
  const [filteredIngredients, setFilteredIngredients] = useState([]);*/

  /*useEffect(() => {
    const filteredCategories = categories.filter((category) => {
      const includesSearch = category.strCategory
        .toLowerCase()
        .includes(advancedSearch.toLowerCase());
      if (!includesSearch) {
        const areaMatch = areas;*/
  /*.some((area) =>
          area.strArea.toLowerCase().includes(advancedSearch.toLowerCase())
        );*/
  /*const ingredientMatch = ingredients.some((ingredient) =>
          ingredient.strIngredient
            .toLowerCase()
            .includes(advancedSearch.toLowerCase())
        );
        return areaMatch || ingredientMatch;
      }
      return true;
    });

    const filteredAreas = areas;*/
  /*.filter(
      (area) =>
        area.strArea.toLowerCase().includes(advancedSearch.toLowerCase())*/
  /* ||
        filteredCategories.some((category) => category.strArea === area.strArea)
    );*/

  /*const filteredIngredients = ingredients;*/
  /*const filteredIngredients = ingredients.filter((ingredient) =>
      ingredient.strIngredient
        .toLowerCase()
        .includes(advancedSearch.toLowerCase())
    );*/

  /*setFilteredCategories(filteredCategories);
    setFilteredAreas(filteredAreas);
    setFilteredIngredients(filteredIngredients);
  }, [categories, areas, ingredients, advancedSearch]);
  */

  const handleApply = () => {
    let path = "";
    if (advancedSearch) path = path + `search=${advancedSearch}`;
    if (category) path = path + `&categories=${category}`;
    if (area) path = path + `&area=${area}`;
    if (ingredient) path = path + `&ingredient=${ingredient}`;
    navigate(`/recetas?${path}`);
  };

  const handleClear = () => {
    setAdvancedSearch("");
    setCategory("");
    setArea("");
    setIngredient("");
    navigate(`/recetas`);
  };

  return (
    <>
      <h1>Filters</h1>
      {/*<form className="filterForm"></form>*/}
      <fieldset>
        <label htmlFor="advanced-search">Advanced Search</label>
        <input
          name="search"
          type="text"
          placeholder="Search by Category, Area or Ingredient"
          value={advancedSearch}
          onChange={(e) => setAdvancedSearch(e.target.value)}
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
            /*
            const selectedCategories = Array.from(
              e.target.selectedOptions,
              (option) => option.value
            );*/
            /*   setFilteredCategories(
                filteredCategories.filter((category) =>
                  selectedCategories.includes(category.strCategory)
                )
              );*/
          }}
        >
          {categories.map((category) => (
            <option key={category.strCategory} value={category.strCategory}>
              {category.strCategory}
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
            /*const selectedAreas = Array.from(
              e.target.selectedOptions,
              (option) => option.value
            );*/
            /* setFilteredAreas(
                areas.filter((area) => selectedAreas.includes(area.strArea))
              );*/
          }}
        >
          {areas.map((area) => (
            <option key={area.strArea} value={area.strArea}>
              {area.strArea}
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
            /*
            const selectedIngredients = Array.from(
              e.target.selectedOptions,
              (option) => option.value
            );*/
            /* setFilteredIngredients(
                ingredients.filter((ingredient) =>
                  selectedIngredients.includes(ingredient.strMeal)
                )
              );*/
          }}
        >
          {ingredients.map((ingredient) => (
            <option
              key={`ingredient_${ingredient.strIngredient}`}
              value={ingredient.strIngredient}
            >
              {ingredient.strIngredient}
            </option>
          ))}
        </select>
      </fieldset>
      <button className="clearButton" onClick={handleClear}>
        Clear
      </button>
      <button className="applyButton" onClick={handleApply}>
        Apply
      </button>
    </>
  );
};

export default Filter;
