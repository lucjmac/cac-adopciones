
const SliderCard = ({recetasMap}) => {
    const imgURL = recetasMap.strMealThumb;
    return (
        <>
            <li className="recetasCard">
                <img src={imgURL} alt={recetasMap.strMeal} />
                <h3>{recetasMap.strMeal}</h3> 
            </li>
        </>
    );
};

export default SliderCard;

