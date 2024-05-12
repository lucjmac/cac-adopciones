import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import SliderCard from "./SliderCard";

import "./SliderGrid.css";

const SliderGrid = ({ list, title }) => {
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
    <section className="sliderContainer">
      <h2 className="sliderTitle">{title}</h2>
      <div className="sliderWrapper">
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
