import Heading from "../../Atoms/Heading/Heading";
import styles from "./IngredientsCard.module.css";

const IngredientsCard = ({ ingredients, mealTitle }) => {
  return (
    <div className={styles.ingredientsCard}>
      <div className={styles.ingredientsHeaderWrapper}>
        <Heading as="h3" title="Ingredients" className="" />
      </div>
      <h4 className={styles.ingredientsCardTitle}>{mealTitle}</h4>
      <ul className={styles.ingredientsCardList}>
        {ingredients.map((item, index) => (
          <li key={index} className={styles.ingredientsCardItem}>
            <p className={styles.ingredient}>{item.ingredient}</p>
            <p>{item.quantity}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IngredientsCard;
