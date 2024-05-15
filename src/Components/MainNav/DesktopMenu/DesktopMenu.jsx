import { NavLink, useLocation } from "react-router-dom";

import Search from "../../Search/Search";
import Branding from "../../Branding/Branding";
import MainNavItem from "../MainNavItem/MainNavItem";
import SurpriseMe from "../../Global/SurpriseMe/SurpriseMe";

import styles from "./DesktopMenu.module.css";

const DesktopMenu = () => {
  const { pathname } = useLocation();
  const isSearchPage =
    pathname === "/search" || pathname === "/worldrecipes/search";

  return (
    <ul className={styles.container}>
      <MainNavItem>
        <NavLink to="/">
          <Branding />
        </NavLink>
      </MainNavItem>
      <MainNavItem>
        {!isSearchPage ? <Search reversed={true} /> : null}
      </MainNavItem>
      <MainNavItem>
        <SurpriseMe />
      </MainNavItem>
      <MainNavItem>
        <NavLink className={styles.link} to="/recetas">
          Recipes
        </NavLink>
      </MainNavItem>
    </ul>
  );
};

export default DesktopMenu;
