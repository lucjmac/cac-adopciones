
const SliderCard = ({recetasMap}) => {
    const imgURL = recetasMap.strMealThumb;
    return (
        <>
            <div className="recetasCard">
                <img src={imgURL} alt={recetasMap.strMeal} />
                <h3>{recetasMap.strMeal}</h3> 
            </div>
        </>
    );
};

export default SliderCard;

