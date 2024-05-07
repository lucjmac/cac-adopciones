import { NavLink } from "react-router-dom";
import { IoTimeOutline } from "react-icons/io5";
import { BiSolidCategory, BiWorld } from "react-icons/bi";
import { FaExternalLinkAlt } from "react-icons/fa";
import { CiHashtag } from "react-icons/ci";

import "./RecipeCard.css";

const RecipeCard = ({ details }) => {
  const { strMealThumb, strMeal, strCategory, strArea, strSource, strTags } =
    details;

  return (
    <div className="recipe-card">
      <div className="recipe-card-details">
        <div className="recipe-card-time">
          60 min <IoTimeOutline />
        </div>
        <h2 className="recipe-card-title">{strMeal}</h2>
        <div className="recipe-card-extra-details">
          <p>
            <strong>
              <BiSolidCategory />
              Category:
            </strong>{" "}
            <NavLink to="/">{strCategory}</NavLink>
          </p>
          <p>
            <strong>
              <CiHashtag />
              Tag:
            </strong>{" "}
            <NavLink to="/">{strTags}</NavLink>
          </p>
          <p>
            <strong>
              <BiWorld />
              Area:
            </strong>{" "}
            <NavLink to="/">{strArea}</NavLink>
          </p>
          <p>
            <strong>
              <FaExternalLinkAlt />
              Source:
            </strong>{" "}
            <a href={strSource}>Learn More</a>
          </p>
        </div>
      </div>
      <div className="recipe-card-image">
        <img src={strMealThumb} alt={strMeal} />
      </div>
    </div>
  );
};

export default RecipeCard;
