import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
  useParams,
} from "react-router-dom";

import Header from "./Components/Global/Header/Header";
import Footer from "./Components/Global/Footer/Footer";
import Inicio from "./pages/Inicio";
import Contacto from "./pages/Contacto/Contacto";
import Recetas from "./pages/Recetas/Recetas";
import Buscador from "./pages/Buscador";
import DetalleReceta from "./pages/DetalleReceta";
import Error404 from "./pages/Error404";
import Receta from "./pages/Receta";
import { RecipesContext } from "./Context/Context";
import { useEffect, useState } from "react";
import { getAllResults } from "./utils/getSearchResults";
import get from "./utils/conexionAPI";

const RecetaWrapper = () => {
  const { recetaId } = useParams();
  return <Navigate to={`/worldrecipes/receta/${recetaId}`} />;
};

const KeepSearchParamsNavigate = ({ to }) => {
  const searchParams = useLocation().search;
  return <Navigate to={to + searchParams} />;
};

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
            <Route path="/worldrecipes/" element={<Inicio />}></Route>
            <Route path="/worldrecipes/contacto" element={<Contacto />}></Route>
            <Route path="/worldrecipes/recetas" element={<Recetas />}></Route>
            <Route path="/worldrecipes/search" element={<Buscador />}></Route>
            <Route
              path="/worldrecipes/receta/:recetaId"
              element={<Receta />}
            ></Route>
            <Route
              path="/worldrecipes/recetas/:id"
              element={<DetalleReceta />}
            ></Route>

            <Route
              path="/contacto"
              element={<KeepSearchParamsNavigate to="/worldrecipes/contacto" />}
            ></Route>
            <Route
              path="/recetas"
              element={<KeepSearchParamsNavigate to="/worldrecipes/recetas" />}
            ></Route>
            <Route
              path="/search"
              element={<KeepSearchParamsNavigate to="/worldrecipes/search" />}
            ></Route>
            <Route path="/receta/:recetaId" element={<RecetaWrapper />}></Route>
            <Route
              path="/recetas/:id"
              element={<Navigate to="/worldrecipes/recetas/:id" />}
            ></Route>

            <Route path="/worldrecipes/error404" element={<Error404 />}></Route>
            <Route path="/" element={<Navigate to="/worldrecipes" />}></Route>
            <Route
              path="/worldrecipes/*"
              element={<Navigate to="/worldrecipes/error404" />}
            ></Route>
          </Routes>

          <Footer />
        </RecipesContext.Provider>
      </BrowserRouter>
    </>
  );
};

export default App;
