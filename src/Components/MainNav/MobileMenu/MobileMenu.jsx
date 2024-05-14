import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

import MainNavItem from "../MainNavItem/MainNavItem";
import Branding from "../../Branding/Branding";
import Search from "../../Search/Search";
import SurpriseMe from "../../Global/SurpriseMe/SurpriseMe";

import styles from "./MobileMenu.module.css";

const MobileMenu = () => {
  const { pathname } = useLocation();
  const isSearchPage = pathname === "/search";

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <ul
      className={`${styles.mobileContainer} ${
        isSearchPage ? styles.small : ""
      }`}
    >
      <MainNavItem className={styles.mobileBranding}>
        <NavLink to="/">
          <Branding size="S" />
        </NavLink>
      </MainNavItem>

      <li className={styles.mobileMenuWrapper}>
        <div className={styles.menuToggle}>
          <input
            type="checkbox"
            checked={isMenuOpen}
            onChange={(e) => setIsMenuOpen(e.target.checked)}
          />
          <span className={styles.span}></span>
          <span className={styles.span}></span>
          <span className={styles.span}></span>
          <ul className={styles.menu} onClick={() => setIsMenuOpen(false)}>
            <MainNavItem className={styles.li}>
              <NavLink to="/">
                <Branding size="S" />
              </NavLink>
            </MainNavItem>
            <MainNavItem className={styles.li}>
              <SurpriseMe overrideClass={styles.mobileLinks} />
            </MainNavItem>
            <MainNavItem className={styles.li}>
              <NavLink className={styles.mobileLinks} to="/recetas">
                Recipes
              </NavLink>
            </MainNavItem>
          </ul>
        </div>
      </li>
      <MainNavItem className={styles.mobileSearch}>
        {!isSearchPage ? <Search reversed={true} /> : null}
      </MainNavItem>
    </ul>
  );
};

export default MobileMenu;
