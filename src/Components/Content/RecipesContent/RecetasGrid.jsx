import get from "../../../utils/conexionAPI.js";
import { useState, useEffect } from "react";
import RecetasCard from "./RecetasCard.jsx";

import "./RecipesContent.css";

const RecetasGrid = () => {
    const [recetas, setRecetas] = useState([]);

    useEffect(() => {
        get("/filter.php?i=").then((data) => {
            setRecetas(data.meals);
        });
    }, []);

    return (
        <>
            <section className="recipesContent">
                <ul className="recetasGrid">
                    {recetas.map((receta) => (
                        <RecetasCard key={receta.idMeal} recetasMap={receta} />
                    ))}
                </ul>
            </section>
        </>
    );
};

export default RecetasGrid;
