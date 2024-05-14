import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import SliderCard from "./SliderCard";

import styles from "./SliderGrid.module.css";
import "./SliderGrid.css";

const SliderGrid = ({ list, title, subtitle }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className={styles.sliderContainer}>
      <h2 className={styles.sliderTitle}>{title}</h2>
      {subtitle ? <h3 className={styles.sliderSubtitle}>{ subtitle}</h3> : null}
      <div className={styles.sliderWrapper}>
        <Slider {...settings}>
          {list.map((element, index) => (
            <SliderCard key={index} data={element} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default SliderGrid;
