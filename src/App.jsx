import { BrowserRouter, Navigate, Route, Routes, Link } from "react-router-dom";

import Header from "./Components/Global/Header/Header";
import Aside from "./Components/Global/Aside";
import Footer from "./Components/Global/Footer/Footer";
import Inicio from "./pages/Inicio";
import Contacto from "./pages/Contacto";
import Recetas from "./pages/Recetas";
import Buscador from "./pages/Buscador";
import Error404 from "./pages/Error404";
import Receta from "./pages/Receta";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Aside />
        <Routes>
          <Route path="/" element={<Inicio />}></Route>
          <Route path="/contacto" element={<Contacto />}></Route>
          <Route path="/recetas" element={<Recetas />}></Route>
          <Route path="/search" element={<Buscador />}></Route>
          <Route path="/receta/:recetaId" element={<Receta />}></Route>
          <Route path="/error404" element={<Error404 />}></Route>
          <Route path="/*" element={<Navigate to="/error404" />}></Route>
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
