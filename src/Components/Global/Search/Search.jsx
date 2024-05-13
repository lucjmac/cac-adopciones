import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import getResults from "../../../utils/getSearchResults";
import SearchCard from "../../Molecules/SearchCard/SearchCard";
import { GrPrevious, GrNext } from "react-icons/gr";
import styles from "./Search.module.css";

const MAX_ITEMS = 10;

const Search = () => {
  const [searchParams] = useSearchParams();
  const [searchTerm, setSearchParam] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (searchTerm !== "") {
      getResults(`filter.php?i=${searchTerm}`).then((results) =>
        setSearchResults(results.meals)
      );
    }
  }, [searchTerm]);

  useEffect(() => {
    setSearchParam(searchParams.get("query"));
  }, [searchParams]);

  const handlePagination = (direction) => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    setCurrentIndex(currentIndex + direction);
  };

  const handleNumberPagination = (page) => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    setCurrentIndex(page);
  };

  return (
    <section className={styles.searchPage}>
      <h2 className={styles.searchPageMainTitle}>
        Results for: <span>{searchTerm}</span>
      </h2>
      <ul className={styles.searchPageCardsWrapper}>
        {searchResults ? (
          searchResults
            .slice(currentIndex * MAX_ITEMS, MAX_ITEMS * (currentIndex + 1))
            .map((result, index) => <SearchCard key={index} item={result} />)
        ) : (
          <h3 className={styles.searchPageNoTitle}>No results found</h3>
        )}
      </ul>
      {searchResults && searchResults.length > MAX_ITEMS && (
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
              length: Math.ceil(searchResults.length / MAX_ITEMS),
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
              currentIndex === Math.ceil(searchResults.length / MAX_ITEMS) - 1
            }
            className={styles.nextButton}
            onClick={() => handlePagination(1)}
          >
            <GrNext />
          </button>
        </div>
      )}
    </section>
  );
};

export default Search;
