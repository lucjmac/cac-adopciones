import logo from "../../../public/logo.svg";
import styles from "./Branding.module.css";

const Branding = ({ size = "M" }) => {
  let imageHeight;
  let classModifier;

  switch (size.toUpperCase()) {
    case "L":
      imageHeight = 140;
      classModifier = styles.large;
      break;
    case "M":
      imageHeight = 100;
      classModifier = styles.medium;
      break;
    case "S":
      imageHeight = 60;
      classModifier = styles.small;
      break;
    case "XS":
      imageHeight = 40;
      classModifier = styles.extraSmall;
      break;
    default:
      imageHeight = 100;
      classModifier = styles.medium;
      break;
  }

  return (
    <div className={styles.container}>
      <picture>
        <img src={logo} alt="Logo" height={imageHeight} />
      </picture>
      <h1 className={`${styles.title} ${classModifier}`}>
        <span className={`${styles.firstLine} ${classModifier}`}>World</span>
        recipes
      </h1>
    </div>
  );
};

export default Branding;
