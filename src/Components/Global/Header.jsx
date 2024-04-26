import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
// import logo from "../../assets/img/";

const Header = () => {
    return (
        <header id="header" className="fixed-top d-flex align-items-center">
            <div className="container d-flex align-items-center">

                <NavLink to="/" className="logo me-auto">
                    <img src={""} alt="logo" />
                </NavLink>

                <nav id="navbar" className="navbar order-last order-lg-0">
                    <ul>
                        <li>
                            <NavLink to="/" className="nav-link scrollto active">
                                Inicio
                            </NavLink>
                        </li>
                        <li>
                            <Link to = "#acerca-de" className="nav-link scrollto">
                                Acerca de Nosotros
                            </Link>
                        </li>
                        <li>
                            <Link to = "#requisitos" className="nav-link scrollto">
                                Requisitos para adoptar
                            </Link>
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

