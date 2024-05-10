import { useState, useEffect } from "react";
import get from "../../utils/conexionAPI.js";

const Filter = () => {
    const [categories, setCategories] = useState([]);
    const [areas, setAreas] = useState([]);
    const [ingredients, setIngredients] = useState([]);
    const [advancedSearch, setAdvancedSearch] = useState("");

    useEffect(() => {
        get("/list.php?c=list").then((data) => {
            setCategories(data.meals);
        });

        get("/list.php?a=list").then((data) => {
            setAreas(data.meals);
        });

        get("/list.php?i=list").then((data) => {
            setIngredients(data.meals);
        });
    }, []);

    const [filteredCategories, setFilteredCategories] = useState([]);
    const [filteredAreas, setFilteredAreas] = useState([]);
    const [filteredIngredients, setFilteredIngredients] = useState([]);

    useEffect(() => {
        const filteredCategories = categories.filter((category) => {
            const includesSearch = category.strCategory
                .toLowerCase()
                .includes(advancedSearch.toLowerCase());
            if (!includesSearch) {
                const areaMatch = areas.some((area) =>
                    area.strArea
                        .toLowerCase()
                        .includes(advancedSearch.toLowerCase())
                );
                const ingredientMatch = ingredients.some((ingredient) =>
                    ingredient.strIngredient
                        .toLowerCase()
                        .includes(advancedSearch.toLowerCase())
                );
                return areaMatch || ingredientMatch;
            }
            return true;
        });

        const filteredAreas = areas.filter(
            (area) =>
                area.strArea
                    .toLowerCase()
                    .includes(advancedSearch.toLowerCase()) ||
                filteredCategories.some(
                    (category) => category.strArea === area.strArea
                )
        );

        const filteredIngredients = ingredients.filter(
            (ingredient) =>
                ingredient.strIngredient
                    .toLowerCase()
                    .includes(advancedSearch.toLowerCase()) ||
                filteredCategories.some(
                    (category) =>
                        category.strIngredient === ingredient.strIngredient
                )
        );

        setFilteredCategories(filteredCategories);
        setFilteredAreas(filteredAreas);
        setFilteredIngredients(filteredIngredients);
    }, [categories, areas, ingredients, advancedSearch]);

    return (
        <>
            <h1>Filters</h1>
            <form className="filterForm">
                <fieldset>
                    <label htmlFor="advanced-search">Advanced Search</label>
                    <input
                        name="buscar"
                        type="text"
                        placeholder="Search by Category, Area or Ingredient"
                        value={advancedSearch}
                        onChange={(e) => setAdvancedSearch(e.target.value)}
                        className="searchInput"
                    />

                    <button className="submitButton">Submit</button>
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
                    >
                        {filteredCategories.map((category) => (
                            <option
                                key={category.strCategory}
                                value={category.strCategory}
                            >
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
                    >
                        {filteredAreas.map((area) => (
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
                    >
                        {filteredIngredients.map((ingredient) => (
                            <option
                                key={ingredient.strIngredient}
                                value={ingredient.strIngredient}
                            >
                                {ingredient.strIngredient}
                            </option>
                        ))}
                    </select>
                </fieldset>

                <button className="clearButton">Clear</button>
                <button className="applyButton">Apply</button>
            </form>
        </>
    );
};

export default Filter;
