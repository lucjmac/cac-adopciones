import Filter from "../../Components/Filter/Filter";
import RecetasGrid from "../../Components/Content/RecipesContent/RecetasGrid";
import styles from "./Recetas.module.css";

const Recetas = () => {
  return (
    <div className={styles.recipesContainer}>
      <section className={styles.filterContent}>
        <Filter />
      </section>
      <section className={styles.recipesContent}>
        <RecetasGrid />
      </section>
    </div>
  );
};

export default Recetas;
