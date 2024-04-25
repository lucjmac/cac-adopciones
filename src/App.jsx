import React, { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/global/Header";

export const App =() => {
    return (
        <>
            <Header />

            <Routes>
                <Route path="/" element={<Inicio />}></Route>
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


