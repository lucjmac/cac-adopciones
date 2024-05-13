import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Header from "./Components/Global/Header/Header";
import Footer from "./Components/Global/Footer/Footer";
import Inicio from "./pages/Inicio";
import Contacto from "./pages/Contacto";
import Recetas from "./pages/Recetas/Recetas";
import Buscador from "./pages/Buscador";
import DetalleReceta from "./pages/DetalleReceta";
import Error404 from "./pages/Error404";
import Receta from "./pages/Receta";
import { RecipesContext } from "./Context/Context";
import { useEffect, useState } from "react";
import { getAllResults } from "./utils/getSearchResults";
import get from "./utils/conexionAPI";

const App = () => {
  const [recetas, setRecetas] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [areas, setAreas] = useState([]);
  const [ingredients, setIngredients] = useState([]);
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

      get("/categories.php").then((data) => {
        setCategorias(data.categories);
      });

      get("/list.php?a=list").then((data) => {
        setAreas(data.meals);
      });

      get("/list.php?i=").then((data) => {
        setIngredients(data.meals);
      });
    }
  }, []);

  return (
    <>
      <BrowserRouter>
        <RecipesContext.Provider
          value={{
            recipes: recetas,
            categories: categorias,
            areas,
            ingredients,
            loading,
          }}
        >
          <Header />

          <Routes>
            <Route path="/" element={<Inicio />}></Route>
            <Route path="/contacto" element={<Contacto />}></Route>
            <Route path="/recetas" element={<Recetas />}></Route>
            <Route path="/search" element={<Buscador />}></Route>
            <Route path="/receta/:recetaId" element={<Receta />}></Route>
            <Route path="/recetas/:id" element={<DetalleReceta />}></Route>
            <Route path="/error404" element={<Error404 />}></Route>
            <Route path="/*" element={<Navigate to="/error404" />}></Route>
          </Routes>

          <Footer />
        </RecipesContext.Provider>
      </BrowserRouter>
    </>
  );
};

export default App;
