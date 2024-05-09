import { NavLink } from "react-router-dom";
import { IoTimeOutline } from "react-icons/io5";
import { BiSolidCategory, BiWorld } from "react-icons/bi";
import { FaExternalLinkAlt } from "react-icons/fa";
import { CiHashtag } from "react-icons/ci";

import "./RecipeCard.css";

const RecipeCard = ({ details }) => {
  const { strMealThumb, strMeal, strCategory, strArea, strSource, strTags } =
    details;

  const areaLink = `/recetas?area=${strArea}`;
  const categoryLink = `/recetas?area=${strCategory}`;

  return (
    <div className="recipe-card">
      <div className="recipe-card-details">
        <div className="recipe-card-time">
          60 min <IoTimeOutline />
        </div>
        <h2 className="recipe-card-title">{strMeal}</h2>
        <div className="recipe-card-extra-details">
          {strCategory && (
            <p>
              <strong>
                <BiSolidCategory />
                Category:
              </strong>{" "}
              <NavLink to={categoryLink}>{strCategory}</NavLink>
            </p>
          )}
          {strTags && (
            <p>
              <strong>
                <CiHashtag />
                Tag:
              </strong>{" "}
              {strTags}
            </p>
          )}

          {strArea && (
            <p>
              <strong>
                <BiWorld />
                Area:
              </strong>{" "}
              <NavLink to={areaLink}>{strArea}</NavLink>
            </p>
          )}
          {strSource && (
            <p>
              <strong>
                <FaExternalLinkAlt />
                Source:
              </strong>{" "}
              <a href={strSource}>Learn More</a>
            </p>
          )}
        </div>
      </div>
      <div className="recipe-card-image">
        <img src={strMealThumb} alt={strMeal} />
      </div>
    </div>
  );
};

export default RecipeCard;
