
import RecetasGrid from "../Components/Content/RecipesContent/RecetasGrid";
import Filter from "../Components/Filter/Filter";


const Recetas = () => {
    return (
        <>
            <h2>Recetas</h2>
            <Filter/>
            <RecetasGrid />
        </>
    );
};

export default Recetas; 
