import DesktopMenu from "./DesktopMenu/DesktopMenu";
import MobileMenu from "./MobileMenu/MobileMenu";

import styles from "./MainNav.module.css";

const MainNav = () => {
  return (
    <nav className={styles.nav}>
      <DesktopMenu />
      <MobileMenu />
    </nav>
  );
};

export default MainNav;
