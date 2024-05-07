import "./StepsCard.css";

const StepsCard = ({ detail }) => {
  return (
    <div className="step-card">
      <h3 className="step-card-title">Steps</h3>
      <p className="step-card-steps">{detail}</p>
    </div>
  );
};

export default StepsCard;
