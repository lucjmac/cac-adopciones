import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import styles from "../NewRecipe/RecetasNuevas.module.css"



const RecetaNuevas = ({ tresRecetas }) => {
    return (
      <div className={ styles.recetas_container}>
        
        <h2 className={styles.titulo_recetas}>New Recipes</h2>
      
        <h3 className={styles.subtitulo_recetas}>Every week new recipes to guide you and achieve your tastes</h3>

       
        {tresRecetas.map((receta, index) => (
          <div className={styles.receta} key={index}>
            <NavLink to={`/receta/${receta.idMeal}`} ><img className={styles.receta_img} src={receta.strMealThumb} alt={receta.strMeal} /></NavLink>
            <div className={styles.receta_desc}>
              <h4 className={styles.receta_nombre}>{receta.strMeal}</h4>
              <h5 className={styles.receta_region}>{receta.strArea} </h5>
              <NavLink className={styles.receta_link} to={`/receta/${receta.idMeal}`}>View Recipe</NavLink>
            </div>
           
          </div>
          
        ))}

        
      </div>
    );
  };
  


export default RecetaNuevas;
