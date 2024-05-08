
const SliderCard = ({categoriasMap}) => {
    const imgURL = categoriasMap.strCategoryThumb;
    return (
        <>
            <div className="sliderCard">
                <img src={imgURL} alt={categoriasMap.strCategory} />
                <h3>{categoriasMap.strCategory}</h3> 
            </div>
        </>
    );
};

export default SliderCard;

