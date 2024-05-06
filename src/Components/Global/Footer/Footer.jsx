import { CiSearch } from "react-icons/ci";
import { FaFacebookF, FaInstagram, FaTwitter, FaTiktok } from "react-icons/fa";

import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-col">
        <div className="footer-search">
          <div className="icon">
            <CiSearch />
          </div>
          <input type="text" placeholder="Buscador" />
        </div>
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
