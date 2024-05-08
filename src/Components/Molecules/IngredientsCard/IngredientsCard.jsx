import "./IngredientsCard.css";

const IngredientsCard = ({ ingredients, mealTitle }) => {
  return (
    <div className="ingredients-card">
      <div className="ingredients-card-header-wrapper">
        <h3>Ingredients</h3>
      </div>
      <h4 className="ingredients-card-title">{mealTitle}</h4>
      <ul className="ingredients-card-list">
        {ingredients.map((item, index) => (
          <li key={index} className="ingredients-card-item">
            <p className="ingredient">{item.ingredient}</p>
            <p>{item.quantity}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IngredientsCard;
