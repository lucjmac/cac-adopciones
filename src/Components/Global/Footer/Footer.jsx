import { useState } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { FaFacebookF, FaInstagram, FaTwitter, FaTiktok } from "react-icons/fa";

import styles from "./Footer.module.css";

const SEARCH_PATHNAME = "/search";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (location.pathname === SEARCH_PATHNAME) {
      window.scrollTo({ top: 0, lef: 0, behavior: "smooth" });
    }

    navigate(`/search?query=${encodeURIComponent(searchTerm)}`);
    setSearchTerm("");
  };
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <footer>
      <div className={styles.footerCol}>
        <form className={styles.footerSearch} onSubmit={handleSubmit}>
          <div className={styles.icon}>
            <CiSearch />
          </div>
          <input
            className={styles.searchInput}
            type="text"
            placeholder="Search by main ingredient"
            required
            value={searchTerm}
            onChange={handleChange}
          />
        </form>
        <div className={`${styles.footerSocialNav} ${styles.footerAnchors}`}>
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
      <div className={`${styles.footerCol} ${styles.footerColNav}`}>
        <nav
          className={` ${styles.footerMenus}
            ${styles.footerAnchors}
            ${styles.footerInternalNav}`}
        >
          <h3>World recepies</h3>
          <ul>
            <li>
              <NavLink to="/contacto">Contact</NavLink>
            </li>
            <li>
              <a href="/">Chefs</a>
            </li>
            <li>
              <a href="/">Glossary</a>
            </li>
            <li>
              <a href="/">News</a>
            </li>
          </ul>
        </nav>
        <nav
          className={`
           ${styles.footerMenus}
            ${styles.footerAnchors}
            ${styles.footerCompanyNav}
          `}
        >
          <h3>Company</h3>
          <ul>
            <li>
              <a href="/">Privacy policy</a>
            </li>
            <li>
              <a href="/">Terms and conditions</a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
