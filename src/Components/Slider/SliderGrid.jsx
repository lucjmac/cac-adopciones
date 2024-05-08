import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState, useEffect } from "react";
import SliderCard from "./SliderCard";
import get from "../../utils/conexionAPI.js";

import "./SliderGrid.css";

const SliderGrid = () => {
    const [categorias, setCategorias] = useState([]);

    useEffect(() => {
        get("/categories.php").then((data) => {
            setCategorias(data.categories);
        });
    }, []);

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
                    slidesToShow: 3,
                    slidesToScroll: 3,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
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
        <>
        <h2 className="sliderTitle">CATEGORIES</h2>
            <Slider {...settings}>
                {categorias.map((categoria) => (
                    <SliderCard
                        key={categoria.idCategory}
                        categoriasMap={categoria}
                    />
                ))}
            </Slider>
        </>
    );
};

export default SliderGrid;
