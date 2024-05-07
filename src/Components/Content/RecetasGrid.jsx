import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import RecetasCard from "./RecetasCard";

const RecetasGrid = () => {
    return (
        <>
            <h2>RecetasGrid</h2>
            <RecetasCard />
        </>
    );
};

export default RecetasGrid