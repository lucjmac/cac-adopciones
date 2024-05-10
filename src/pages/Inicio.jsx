import { useEffect, useState } from "react";
import Hero from "../Components/Hero/Hero";
import SliderGrid from "../Components/Slider/SliderGrid";
import { getAllResults } from "../utils/getSearchResults";

const Inicio = () => {
  const [recetas, setRecetas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    if (!fetching) {
      setFetching(true);

      getAllResults().then((data) => {
        const recipes = data.map((data) => data.meals[0]);

        setRecetas(recipes);
        setLoading(false);
      });
    }
  }, []);
  return (
    <>
      <Hero recetas={recetas} loading={loading} />
      <SliderGrid />
    </>
  );
};

export default Inicio;
