import Filter from "../Components/Filter/Filter";
import RecetasGrid from "../Components/Content/RecipesContent/RecetasGrid";
import "./Recetas.css";

const Recetas = () => {
    return (
        <div className="recipesContainer">
            <section className="filterContent">
                <Filter />
            </section>
            <section className="recipesContent">
                <RecetasGrid />
            </section>
        </div>
    );
};

export default Recetas;
