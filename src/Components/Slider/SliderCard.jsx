import { Link } from "react-router-dom";

const SliderCard = ({ categoriasMap }) => {
    const imgURL = categoriasMap.strCategoryThumb;
    return (
        <>
            <div>
                <div className="sliderCard">
                    <Link
                        to={`/recetas?categoria=${categoriasMap.strCategory}`}
                    >
                        <img
                            className="sliderImg"
                            src={imgURL}
                            alt={categoriasMap.strCategory}
                        />
                        <h3 className="SliderImgTitle">
                            {categoriasMap.strCategory}
                        </h3>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default SliderCard;
