import { NavLink } from "react-router-dom";
import styles from "./SearchCard.module.css";

const SearchCard = ({ item }) => {
  const { strMeal, strMealThumb, idMeal } = item;
  const link = `/receta/${idMeal}`;

  return (
    <div className={styles.searchItem}>
      <NavLink to={link}>
        <div className={styles.searchItemImg}>
          <img src={strMealThumb} alt={strMeal} />
        </div>
        <h3 className={styles.searchItemTitle}>{strMeal}</h3>
      </NavLink>
    </div>
  );
};

export default SearchCard;
