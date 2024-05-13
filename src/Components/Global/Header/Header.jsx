import styles from "./Header.module.css";
import MainNav from "../../MainNav/MainNav";

const Header = () => {
  return (
    <header className={styles.container}>
      <MainNav />
    </header>
  );
};

export default Header;
