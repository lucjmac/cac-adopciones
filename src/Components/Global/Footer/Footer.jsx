import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { FaFacebookF, FaInstagram, FaTwitter, FaTiktok } from "react-icons/fa";

import "./Footer.css";

const Footer = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(`/search?query=${encodeURIComponent(searchTerm)}`);
  };
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <footer>
      <div className="footer-col">
        <form className="footer-search" onSubmit={handleSubmit}>
          <div className="icon">
            <CiSearch />
          </div>
          <input
            type="text"
            placeholder="Buscador"
            required
            value={searchTerm}
            onChange={handleChange}
          />
          {/* <input type="submit" value="Search" /> */}
        </form>
        <div className="footer-social-nav footer-anchors">
          <ul>
            <li>
              <a href="/">
                <FaFacebookF />
              </a>
            </li>
            <li>
              <a href="/">
                <FaInstagram />
              </a>
            </li>
            <li>
              <a href="/">
                <FaTwitter />
              </a>
            </li>
            <li>
              <a href="/">
                <FaTiktok />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-col footer-col-nav">
        <nav className="footer-menus footer-anchors  footer-internal-nav">
          <h3>elGourmet</h3>
          <ul>
            <li>
              <a href="/">Chefs</a>
            </li>
            <li>
              <a href="/">Glosario</a>
            </li>
            <li>
              <a href="/">Novedades</a>
            </li>
          </ul>
        </nav>
        <nav className="footer-menus footer-anchors footer-company-nav">
          <h3>Compañia</h3>
          <ul>
            <li>
              <a href="/">Politicas de privacidad</a>
            </li>
            <li>
              <a href="/">Términos y condiciones</a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
