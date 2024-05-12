import { useContext } from "react";
import { RecipesContext } from "../Context/Context";
import Hero from "../Components/Hero/Hero";
import SliderGrid from "../Components/Slider/SliderGrid";

const Inicio = () => {
  const context = useContext(RecipesContext);

  const categories = context.categories || [];
  const parsedCategories = categories.map((category) => {
    return {
      img: category.strCategoryThumb,
      label: category.strCategory,
      to: `/recetas?categories=${category.strCategory}`,
    };
  });

  return (
    <>
      <Hero recetas={context.recipes} loading={context.loading} />
      <SliderGrid list={parsedCategories} title="CATEGORIES" />
    </>
  );
};

export default Inicio;
