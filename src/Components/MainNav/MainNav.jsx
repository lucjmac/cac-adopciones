import { NavLink, useLocation } from "react-router-dom";
import MainNavItem from "./MainNavItem/MainNavItem";
import Branding from "../Branding/Branding";
import Search from "../Search/Search";
import styles from "./MainNav.module.css";
import SurpriseMe from "../Global/SurpriseMe/SurpriseMe";

const MainNav = () => {
  const { pathname } = useLocation();
  const isSearchPage = pathname === "/search";

  return (
    <nav className={styles.nav}>
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
    </nav>
  );
};

export default MainNav;
