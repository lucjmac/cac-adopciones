import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import styles from "./IngredientSearchInput.module.css";

const IngredientSearchInput = ({ className, pathName }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (location.pathname === pathName) {
      window.scrollTo({ top: 0, lef: 0, behavior: "smooth" });
    }

    navigate(`/search?query=${encodeURIComponent(searchTerm)}`);
    setSearchTerm("");
  };
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  return (
    <form
      className={`${styles.searchIngredientForm} ${className}`}
      onSubmit={handleSubmit}
    >
      <div className={styles.icon}>
        <CiSearch />
      </div>
      <input
        className={styles.searchInput}
        type="text"
        placeholder="Search by main ingredient"
        required
        value={searchTerm}
        onChange={handleChange}
      />
    </form>
  );
};

export default IngredientSearchInput;
