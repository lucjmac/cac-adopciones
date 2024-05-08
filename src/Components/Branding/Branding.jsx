import styles from "./Branding.module.css";

const Branding = () => {
  return (
    <div className={styles.container}>
      <picture>
        <img src="../../../assets/logo.svg" alt="Logo" height={100} />
      </picture>
      <h1 className={styles.title}>
        <span className={styles.firstLine}>World</span>recipes
      </h1>
    </div>
  );
};

export default Branding;
