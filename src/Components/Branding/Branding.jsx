import styles from "./Branding.module.css";

const Branding = () => {
  return (
    <div className={styles.container}>
      <picture>
        <img src="../../../assets/logo.svg" alt="Logo" height={100} />
      </picture>
      <h1 className={styles.titlelogo}>Sabores del mundo</h1>
    </div>
  );
};

export default Branding;
