import { GrPrevious, GrNext } from "react-icons/gr";
import styles from "./Pagination.module.css";

const Pagination = ({
  maxItems,
  searchResults,
  currentIndex,
  setCurrentIndex,
}) => {
  const handlePagination = (direction) => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    setCurrentIndex(currentIndex + direction);
  };

  const handleNumberPagination = (page) => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    setCurrentIndex(page);
  };
  return (
    <div className={styles.pagination}>
      <button
        disabled={currentIndex === 0}
        className={styles.backButton}
        onClick={() => handlePagination(-1)}
      >
        <GrPrevious />
      </button>
      <div>
        {Array.from({
          length: Math.ceil(searchResults.length / maxItems),
        }).map((_, index) => (
          <button
            key={index}
            className={styles.pageButtons}
            onClick={() => handleNumberPagination(index)}
          >
            {index + 1}
          </button>
        ))}
      </div>
      <button
        disabled={
          currentIndex === Math.ceil(searchResults.length / maxItems) - 1
        }
        className={styles.nextButton}
        onClick={() => handlePagination(1)}
      >
        <GrNext />
      </button>
    </div>
  );
};

export default Pagination;
