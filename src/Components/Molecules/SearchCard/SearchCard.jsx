import { NavLink } from "react-router-dom";
import "./SearchCard.css";

const SearchCard = ({ item }) => {
  const { strMeal, strMealThumb, idMeal } = item;
  const link = `/receta/${idMeal}`;

  return (
    <div className="search-item">
      <NavLink to={link}>
        <div className="search-item-img">
          <img src={strMealThumb} alt={strMeal} />
        </div>
        <h3 className="search-item-title">{strMeal}</h3>
      </NavLink>
    </div>
  );
};

export default SearchCard;
