import styles from "./Contacto.module.css";
import { useState, useEffect } from "react";
import get from "../../utils/conexionAPI";
import Heading from "../../Components/Atoms/Heading/Heading";

const Contacto = () => {
  const [randomRecipe, setRandomRecipe] = useState([]);

  useEffect(() => {
    get("/random.php").then((data) => {
      if (data && data.meals && data.meals.length > 0) {
        setRandomRecipe(data.meals[0]);
      }
    });
  }, []);

  return (
    <div className={styles.contacto}>
      <div className={styles.contacto_container}>
        <section className={styles.contacto_section}>
          <div className={styles.contacto_form}>
            <Heading as="h1" title="CONTACT US!" className={styles.title} />
            <div className={styles.linea}></div>
            <form action="">
              <div className={styles.form_group}>
                <label htmlFor="inputEmail" className={styles.label}>
                  Email adress:
                </label>
                <input
                  type="email"
                  name="correo"
                  placeholder="Enter the email address where you want to receive your reply..."
                />
              </div>
              <div className={styles.form_group}>
                <label htmlFor="text" className={styles.label}>
                  Subject:
                </label>
                <input
                  type="text"
                  name="asunto"
                  placeholder="Enter a brief description of your message..."
                />
              </div>
              <div className={styles.form_group}>
                <label htmlFor="text" className={styles.label}>
                  Message:
                </label>
                <textarea
                  name="mensaje"
                  rows="4"
                  placeholder="Enter your message here..."
                  className={styles.textarea}
                ></textarea>
              </div>
              <div className={styles.form_group}>
                <button type="submit" name="enviar" className={styles.button}>
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </section>

        <div className={styles.image_recipe}>
          {randomRecipe && (
            <img
              src={randomRecipe.strMealThumb}
              alt={randomRecipe.strMeal}
              className={styles.random_recipe_image}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Contacto;
