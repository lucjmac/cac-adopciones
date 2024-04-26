import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Heading from "../../Atoms/Heading/Heading";
import { FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa";

import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="detail-wrapper">
        <div className="details">
          <h3 className="logo">
            Adopteros<span>.</span>{" "}
          </h3>
          <p>
            <strong>Telefono:</strong> 11 1111 1111
          </p>
          <p>
            <strong>Email:</strong> adopteros@adopteros.com
          </p>
        </div>
        <div className="navigation">
          <Heading as="h4">Enlaces de utilidad</Heading>
          <nav className="nav-list">
            <ul>
              <li>
                <NavLink to="/" className="nav-item">
                  <span>></span> Inicio
                </NavLink>
              </li>
              <li>
                <NavLink to="/animales" className="nav-item">
                  <span>></span> Animales en adopción
                </NavLink>
              </li>
              <li>
                <NavLink to="/contacto" className="nav-item">
                  <span>></span> Contacto
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="copyright">
        <p>© Copyright Adopteros Argentina. 2022 All Rights Reserved</p>
        <div className="social">
          <ul className="social-list">
            <li>
              <FaInstagram />
            </li>
            <li>
              <FaTwitter />
            </li>
            <li>
              <FaFacebookF />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
