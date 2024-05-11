const RecetasCard = ({ recetasMap }) => {
    const imgURL = recetasMap.strMealThumb;

    return (
        <li className="recetasCard">
            <div >
                <img src={imgURL} alt={recetasMap.strMeal} />
                <h3 className="recetasCardTitle">{recetasMap.strMeal}</h3>
            </div>
        </li>
    );
};

export default RecetasCard;
