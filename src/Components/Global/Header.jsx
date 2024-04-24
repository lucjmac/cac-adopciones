import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/img/logo.png";

const Header = () => {
    return (
        <header id="header" className="fixed-top d-flex align-items-center">
            <div className="container d-flex align-items-center">

                <NavLink to="/" className="logo me-auto">
                    <img src={logo} alt="logo" />
                </NavLink>

                <nav id="navbar" className="navbar order-last order-lg-0">
                    <ul>
                        <li>
                            <NavLink to="/" className="nav-link scrollto active">
                                Inicio
                            </NavLink>
                        </li>
                        <li>
                            <a className="nav-link scrollto" href="#acerca-de">
                                Acerca de Nosotros
                            </a>
                        </li>
                        <li>
                            <a className="nav-link scrollto" href="#requisitos">
                                Requisitos para adoptar
                            </a>
                        </li>
                        <li className="dropdown">
                            <a className="nav-link scrollto">
                                <span>Animales en adopcion</span>
                                <i className="bi bi-chevron-down"></i>
                            </a>
                            <ul>
                                <li>
                                    <NavLink
                                        to="/perros"
                                        className="nav-link scrollto"
                                    >
                                        Perros en adopcion
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/gatos"
                                        className="nav-link scrollto"
                                    >
                                        Gatos en adopcion
                                    </NavLink>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <NavLink to="/contacto">Contacto</NavLink>
                        </li>
                    </ul>
                    <i className="bi bi-list mobile-nav-toggle"></i>
                </nav>
            </div>
        </header>
    );
};

export default Header;
