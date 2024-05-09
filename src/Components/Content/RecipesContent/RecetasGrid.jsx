import get from "../../../utils/conexionAPI.js";
import { useState, useEffect } from "react";
import RecetasCard from "./RecetasCard.jsx";

const RecetasGrid = () => {
    const [recetas, setRecetas] = useState([]);

    useEffect(() => {
        get("/search.php?s=").then((data) => {
            setRecetas(data.meals);
        });
    }, []);

    return (
        <>
            <ul className="recetasGrid">
                {recetas.map((receta) => (
                    <RecetasCard key={receta.idMeal} recetasMap={receta} />
                ))}
            </ul>
        </>
    );
};

export default RecetasGrid;
