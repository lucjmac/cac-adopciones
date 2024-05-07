import { useState, useEffect } from "react";
import Glide from "@glidejs/react";
import SliderCard from "./SliderCard";

import "../../../variables.css";
import "../../../index.css";
import "../RecetasGrid.css";

const RecetasGrid = () => {
    const [recetas, setRecetas] = useState([]);

    useEffect(() => {
        get("/search.php?s=").then((data) => {
            setRecetas(data.meals);
        });
    }, []);

    return (
        <>
            <div className="recetasGrid">
                <Glide>
                    <div className="glide__track" data-glide-el="track">
                        <ul className="glide__slides">
                            {recetas.map((receta) => (
                                <SliderCard
                                    key={receta.idMeal}
                                    recetasMap={receta}
                                />
                            ))}
                        </ul>
                    </div>
                </Glide>
            </div>
        </>
    );
};

export default RecetasGrid;
