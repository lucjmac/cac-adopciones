import get from "../../../utils/conexionAPI.js";
import { useState, useEffect } from "react";


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
                    <li key={receta.idMeal}  className="recetasCard">
            <div >
                <img src={receta.strMealThumb} alt={receta.strMeal} />
                <h3 className="recetasCardTitle">{receta.strMeal}</h3>
            </div>
        </li>
                ))}
                
            </ul>
        </>
    );
};

export default RecetasGrid;
