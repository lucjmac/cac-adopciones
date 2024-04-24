import { useState } from "react";
import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Header from "./Components/Global/Header";

import Header from "./assets/Components/Global/Header";

function App() {
    return (
        <>
            <Header />

            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/perros" element={<Perros />}></Route>
                <Route path="/gatos" element={<Gatos />}></Route>
                <Route path="/contacto" element={<Contacto />}></Route>
                <Route path="/error404" element={<Error404 />}></Route>
                <Route path="/*" element={<Navigate to="/error404" />}></Route>
            </Routes>

            <Footer />
        </>
    );
}

export default App;
