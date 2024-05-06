import React, { useState } from "react";
import { BrowserRouter, Navigate, Route, Routes, Link } from "react-router-dom";

import Header from "./Components/Global/Header";
import Search from "./Components/Global/Search";
import Aside from "./Components/Global/Aside";
import Footer from "./Components/Global/Footer";
import Inicio from "./pages/Inicio";
import Contacto from "./pages/Contacto";
import Error404 from "./pages/Error404";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Search />
        <Aside />
        <Routes>
          <Route path="/" element={<Inicio />}></Route>
          <Route path="/contacto" element={<Contacto />}></Route>
          <Route path="/error404" element={<Error404 />}></Route>
          <Route path="/*" element={<Navigate to="/error404" />}></Route>
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
