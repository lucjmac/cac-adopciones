import React from "react";
import { NavLink } from "react-router-dom";
import Slider from "react-slick";
import SliderCard from "../../Slider/SliderCard"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../NewRecipe/RecetasNuevas.module.css";

const RecetaNuevas = ({ tresRecetas }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };

  console.log(tresRecetas);

  return (
    <div className={styles.recetas_container}>
      <h2 className={styles.titulo_recetas}>New Recipes</h2>
      <h3 className={styles.subtitulo_recetas}>
        Every week new recipes to guide you and achieve your tastes
      </h3>

      <Slider {...settings}>
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
              <h5 className={styles.receta_region}>{receta.strArea}</h5>
              <NavLink
                className={styles.receta_link}
                to={`/receta/${receta.idMeal}`}
              >
                View Recipe
              </NavLink>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default RecetaNuevas;