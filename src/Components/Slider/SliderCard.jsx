import { Link } from "react-router-dom";

const SliderCard = ({ data }) => {
  return (
    <div>
      <div className="sliderCard">
        <Link to={data.to}>
          <div className="sliderImgWrapper">
            <img className="sliderImg" src={data.img} alt={data.label} />
          </div>
          <h3 className="SliderImgTitle">{data.label}</h3>
        </Link>
      </div>
    </div>
  );
};

export default SliderCard;
