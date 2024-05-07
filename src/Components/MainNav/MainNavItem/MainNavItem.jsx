import styles from "./MainNavItem.module.css";

const MainNavItem = ({ children }) => {
  return <li className={styles.container}>{children}</li>;
};

export default MainNavItem;
