import React from "react";
import { NavLink } from "react-router-dom";
import Slider from "react-slick";
import SliderGrid from "../../Slider/SliderGrid"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../NewRecipe/RecetasNuevas.module.css";

const RecetaNuevas = ({ list }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };


  return (
    <div className={styles.recetas_container}>
      <h2 className={styles.titulo_recetas}>New Recipes</h2>
      <h3 className={styles.subtitulo_recetas}>
        Every week new recipes to guide you and achieve your tastes
      </h3>

      <SliderGrid list={list} />
    </div>

  );
};

export default RecetaNuevas;
