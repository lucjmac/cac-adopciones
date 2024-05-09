import { useEffect, useState } from "react";
import Hero from "../Components/Hero/Hero";
import SliderGrid from "../Components/Slider/SliderGrid";
import get from "../utils/conexionAPI";

const Inicio = () => {
  const [recetas, setRecetas] = useState([]);

  useEffect(() => {
    get("/search.php?s=").then((data) => {
      setRecetas(data.meals);
    });
  }, []);
  return (
    <>
      <Hero recetas={recetas} />
      <SliderGrid />
    </>
  );
};

export default Inicio;
