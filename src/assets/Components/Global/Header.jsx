import React from "react";

const Header = () => {
    return (
        <header id="header" className="fixed-top d-flex align-items-center">
            <div className="container d-flex align-items-center">
                <img
                    src=""
                    style={{ width: "45px", paddingBottom: "6px" }}
                />
                <a href="inicio.html" className="logo me-auto">
                    <img src="" />
                </a>
                <nav id="navbar" className="navbar order-last order-lg-0">
                    <ul>
                        <li>
                            <a
                                className="nav-link scrollto active"
                                href=""
                            >
                                Inicio
                            </a>
                        </li>
                        <li>
                            <a className="nav-link scrollto" href="#acerca-de">
                                Acerca de
                            </a>
                        </li>
                        <li className="dropdown">
                            <a className="nav-link scrollto" href="#adopcion">
                                <span>Adopción y cuidado</span>
                                <i className="bi bi-chevron-down"></i>
                            </a>
                            <ul>
                                <li>
                                    <a
                                        className="nav-link scrollto"
                                        href="#contribuir"
                                    >
                                        ¿Cómo contribuir?
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="nav-link scrollto"
                                        href="#requisitos"
                                    >
                                        Requisitos para adoptar
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="perros-en-adopcion.php">
                                Perros en adopción
                            </a>
                        </li>
                        <li>
                            <a href="">Contacto</a>
                        </li>
                    </ul>
                    <i className="bi bi-list mobile-nav-toggle"></i>
                </nav>
            </div>
        </header>
    );
};

export default Header;
