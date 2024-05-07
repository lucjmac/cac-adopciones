import { NavLink } from "react-router-dom";
import MainNavItem from "./MainNavItem/MainNavItem";
import Branding from "../Branding/Branding";
import Search from "../Search/Search";
import styles from "./MainNav.module.css";

const MainNav = () => {
  return (
    <nav>
      <ul className={styles.container}>
        <MainNavItem>
          <NavLink to="/">
            <Branding />
          </NavLink>
        </MainNavItem>
        <MainNavItem>
          <Search />
        </MainNavItem>
        <MainNavItem>
          <NavLink to="/recetas/detalle">Sorpréndeme</NavLink>
        </MainNavItem>
        <MainNavItem>
          <NavLink to="/recetas">Recetas</NavLink>
        </MainNavItem>
      </ul>
    </nav>
  );
};

export default MainNav;
