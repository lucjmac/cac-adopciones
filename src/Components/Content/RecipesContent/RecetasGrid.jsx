import get from "../../../utils/conexionAPI.js";
import { useState, useEffect } from "react";
import RecetasCard from "./RecetasCard.jsx";

import "./RecipesContent.css";

const RecetasGrid = () => {
    const [recetas, setRecetas] = useState([]);
    const [recetasDetalladas, setRecetasDetalladas] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await get("/filter.php?i=");
                setRecetas(data.meals);

                const idsMeal = data.meals.map((receta) => receta.idMeal);
                const detallesPromises = idsMeal.map((idMeal) => get(`/lookup.php?i=${idMeal}`));

                const detalles = await Promise.all(detallesPromises);
                console.log('Detalles:', detalles);
                setRecetasDetalladas(detalles.flat());
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <section className="recipesContent">
                <ul className="recetasGrid">
                    {recetas.map((receta) => {
                        const recetaDetallada = recetasDetalladas.find((r) => r.idMeal === receta.idMeal);
                        return <RecetasCard key={receta.idMeal} recetasMap={recetaDetallada || receta} />;
                    })}
                </ul>
            </section>
        </>
    );
};

export default RecetasGrid;
