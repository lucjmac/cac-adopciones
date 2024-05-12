import { useContext } from "react";
import { RecipesContext } from "../Context/Context";
import Hero from "../Components/Hero/Hero";
import SliderGrid from "../Components/Slider/SliderGrid";

const Inicio = () => {
  const context = useContext(RecipesContext);

  return (
    <>
      <Hero recetas={context.recipes} loading={context.loading} />
      <SliderGrid />
    </>
  );
};

export default Inicio;
