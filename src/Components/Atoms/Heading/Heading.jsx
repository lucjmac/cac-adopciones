import styles from "./Heading.module.css";

const Heading = ({ as, title, className }) => {
  const Tag = as || "h2";
  return <Tag className={`${styles.headingTitle} ${className}`}>{title}</Tag>;
};

export default Heading;
