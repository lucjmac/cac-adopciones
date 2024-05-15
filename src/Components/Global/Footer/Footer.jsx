import { NavLink } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter, FaTiktok } from "react-icons/fa";

import styles from "./Footer.module.css";
import IngredientSearchInput from "../../Molecules/IngredientSearchInput/IngredientSearchInput";

const SEARCH_PATHNAME = "/search";

const Footer = () => {
  return (
    <footer>
      <div className={styles.footerCol}>
        <IngredientSearchInput
          pathName={SEARCH_PATHNAME}
          className={styles.footerSearch}
        />

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
