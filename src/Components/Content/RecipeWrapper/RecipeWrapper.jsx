import IngredientsCard from "../../Molecules/IngredientsCard/IngredientsCard";
import StepsCard from "../../Molecules/StepsCard/StepsCard";
import styles from "./RecipeWrapper.module.css";

const RecipeWrapper = ({ ingredients, result }) => {
  const { strMeal, strInstructions } = result;
  console.log(result);
  return (
    <div className={styles.recipeDetailsWrapper}>
      <IngredientsCard ingredients={ingredients} mealTitle={strMeal} />
      <StepsCard detail={strInstructions} />
    </div>
  );
};

export default RecipeWrapper;
