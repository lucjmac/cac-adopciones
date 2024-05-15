import styles from "./MainNavItem.module.css";

const MainNavItem = ({ children, className }) => {
  return <li className={`${styles.container} ${className}`}>{children}</li>;
};

export default MainNavItem;
