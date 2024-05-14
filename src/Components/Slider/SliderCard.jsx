import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from "./SliderGrid.module.css";
const SliderCard = ({ data }) => {
  return (
    <div>
      <div className={styles.sliderCard}>
        <Link to={data.to}>
          <div className={styles.sliderImgWrapper}>
            <img className={styles.sliderImg} src={data.img} alt={data.label} />
          </div>
          <h3 className={styles.SliderImgTitle}>{data.label}</h3>
        </Link>
      </div>
    </div>
  );
};

export default SliderCard;
