import IngredientsCard from "../../Molecules/IngredientsCard/IngredientsCard";
import StepsCard from "../../Molecules/StepsCard/StepsCard";
import "./RecipeWrapper.css";

const RecipeWrapper = ({ ingredients, result }) => {
  const { strMeal, strInstructions } = result;
  console.log(result);
  return (
    <div className="recipe-page-details-wrapper">
      <IngredientsCard ingredients={ingredients} mealTitle={strMeal} />
      <StepsCard detail={strInstructions} />
    </div>
  );
};

export default RecipeWrapper;
