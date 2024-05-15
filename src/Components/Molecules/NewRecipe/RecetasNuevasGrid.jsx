import { NavLink } from "react-router-dom";
import styles from "../NewRecipe/RecetasNuevas.module.css";
import Heading from "../../Atoms/Heading/Heading";

const RecetaNuevas = ({ tresRecetas }) => {
  return (
    <div className={styles.recetas_container}>
      <Heading as="h2" title="New Recipes" className={styles.titulo_recetas} />

      <h3 className={styles.subtitulo_recetas}>
        Every week new recipes to guide you and achieve your tastes
      </h3>

      {tresRecetas.map((receta, index) => (
        <div className={styles.receta} key={index}>
          <NavLink to={`/receta/${receta.idMeal}`}>
            <img
              className={styles.receta_img}
              src={receta.strMealThumb}
              alt={receta.strMeal}
            />
          </NavLink>
          <div className={styles.receta_desc}>
            <h4 className={styles.receta_nombre}>{receta.strMeal}</h4>
            <h5 className={styles.receta_region}>{receta.strArea} </h5>
            <NavLink
              className={styles.receta_link}
              to={`/receta/${receta.idMeal}`}
            >
              View Recipe{" "}
            </NavLink>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecetaNuevas;
