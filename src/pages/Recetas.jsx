import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import RecetasGrid from "../Components/Content/RecetasGrid";

const Recetas = () => {
    return (
        <>
            <h2>Recetas</h2>
            <RecetasGrid />
        </>
    );
};

export default Recetas; 
