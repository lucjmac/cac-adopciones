import { useState, useContext, useEffect, useRef } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { RecipesContext } from "../../Context/Context.js";
import { IoCloseCircleOutline } from "react-icons/io5";
import Heading from "../Atoms/Heading/Heading.jsx";
import Select from "react-select";
import styles from "./Filter.module.css";

const Filter = () => {
  const context = useContext(RecipesContext);
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const refSelect = useRef([]);
  const [ingredientItems, setIngredientItems] = useState([]);
  const [areaItems, setAreaItems] = useState([]);
  const [categoryItems, setCategoryItems] = useState([]);
  const [search, setSearch] = useState(searchParams.get("search") || "");
  const [category, setCategory] = useState(searchParams.get("category") || "");
  const [area, setArea] = useState(searchParams.get("area") || "");
  const [ingredient, setIngredient] = useState(
    searchParams.get("ingredient") || ""
  );

  const { categories, areas, ingredients } = context;

  useEffect(() => {
    setIngredientItems(
      ingredients.map((item) => {
        return {
          value: item.strIngredient.toLowerCase(),
          label: item.strIngredient,
        };
      })
    );

    setAreaItems(
      areas.map((item) => {
        return {
          value: item.strArea.toLowerCase(),
          label: item.strArea,
        };
      })
    );

    setCategoryItems(
      categories.map((item) => {
        return {
          value: item.strCategory.toLowerCase(),
          label: item.strCategory,
        };
      })
    );
  }, [ingredients, areas, categories]);

  useEffect(() => {
    if (refSelect.current.length === 0) return;

    category &&
      refSelect.current[0].setValue({
        value: category.toLocaleLowerCase(),
        label: category,
      });

    area &&
      refSelect.current[1].setValue({
        value: area.toLocaleLowerCase(),
        label: area,
      });

    ingredient &&
      refSelect.current[2].setValue({
        value: ingredient.toLocaleLowerCase(),
        label: ingredient,
      });
  }, [refSelect.current]);

  const handleApply = () => {
    if (search) {
      setSearchParams((searchParams) => {
        searchParams.set("search", search);
        return searchParams;
      });
    }
    if (category) {
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
    refSelect.current.forEach((select) => select.setValue(""));
    navigate(`/recetas`);
  };

  const clearSearchParam = (index) => {
    const queries = ["search", "category", "area", "ingredient"];
    const queriesValues = [search, category, area, ingredient];
    const setQueries = [setSearch, setCategory, setArea, setIngredient];
    setQueries[index]("");

    refSelect.current.forEach((select, selIndex) => {
      if (selIndex + 1 === index) select.setValue("");
    });

    if (window.location.search) {
      const params = window.location.search
        .split("?")[1]
        .split("&")
        .filter((item) => !item.includes(queries[index]))
        .join("&");

      navigate(`/recetas?${params}`, {
        state: { deleted: queries[index], value: queriesValues[index] },
      });
    }
  };

  return (
    <div>
      <Heading as="h1" title="Filters" className="" />
      <div className={styles.filterTags}>
        {[search, category, area, ingredient].map((tag, index) => {
          if (tag === "" || tag === null || tag === undefined) return;
          return (
            <div key={index}>
              <p>{tag}</p>
              <button
                className={styles.tagClearButton}
                onClick={() => clearSearchParam(index)}
              >
                <IoCloseCircleOutline />
              </button>
            </div>
          );
        })}
      </div>
      <form className={styles.filterForm} onSubmit={(e) => e.preventDefault()}>
        <fieldset className={styles.search}>
          <label htmlFor="advanced-search">Advanced Search</label>
          <input
            name="search"
            type="text"
            placeholder="Search by Category, Area or Ingredient"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className={styles.searchInput}
          />
        </fieldset>
        <fieldset>
          <label htmlFor="categories">Category</label>
          <Select
            ref={(el) => (refSelect.current[0] = el)}
            onChange={(e) => {
              setCategory(e.label);
            }}
            isSearchable={true}
            options={categoryItems}
          />
        </fieldset>
        <fieldset>
          <label htmlFor="area">Area</label>
          <Select
            ref={(el) => (refSelect.current[1] = el)}
            onChange={(e) => {
              setArea(e.label);
            }}
            isClearable={true}
            isSearchable={true}
            options={areaItems}
          />
        </fieldset>
        <fieldset>
          <label htmlFor="ingredient">Ingredient</label>
          <Select
            ref={(el) => (refSelect.current[2] = el)}
            onChange={(e) => {
              setIngredient(e.label);
            }}
            isClearable={true}
            isSearchable={true}
            options={ingredientItems}
          />
        </fieldset>
        <div className={styles.ctaWrapper}>
          <button
            type="button"
            className={styles.clearButton}
            onClick={handleClear}
          >
            Clear
          </button>
          <button
            type="button"
            className={styles.applyButton}
            onClick={handleApply}
          >
            Apply
          </button>
        </div>
      </form>
    </div>
  );
};

export default Filter;
