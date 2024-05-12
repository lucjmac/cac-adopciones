import styles from "./StepsCard.module.css";

const StepsCard = ({ detail }) => {
  return (
    <div className={styles.stepCard}>
      <h3 className={styles.stepCardTitle}>Steps</h3>
      <p className={styles.stepCardSteps}>{detail}</p>
    </div>
  );
};

export default StepsCard;
