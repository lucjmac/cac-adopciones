import { useNavigate } from "react-router-dom";
import get from "../../../utils/conexionAPI.js";
import { useState, useEffect } from "react";
import styles from "./SurpriseMe.module.css";

const SurpriseMe = () => {
  const [recetas, setRecetas] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    get("/search.php?s=").then((data) => {
      const idList = data.meals.map((meal) => {
        return meal.idMeal;
      });
      setRecetas(idList);
    });
  }, []);

  return (
    <button
      className={styles.button}
      onClick={() =>
        navigate(
          `/receta/${recetas[Math.floor(Math.random() * recetas.length)]}`
        )
      }
    >
      Surprise me
    </button>
  );
};

export default SurpriseMe;
