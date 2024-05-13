import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import getResults from "../../../utils/getSearchResults";
import SearchCard from "../../Molecules/SearchCard/SearchCard";
import styles from "./Search.module.css";
import Pagination from "../../Molecules/Pagination/Pagination";

const MAX_ITEMS = 10;

const Search = () => {
  const [searchParams] = useSearchParams();
  const [searchTerm, setSearchParam] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (searchTerm !== "") {
      getResults(`filter.php?c=${searchTerm}`).then((results) =>
        setSearchResults(results.meals)
      );
    }
  }, [searchTerm]);

  useEffect(() => {
    setSearchParam(searchParams.get("query"));
  }, [searchParams]);

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
        <Pagination
          maxItems={MAX_ITEMS}
          searchResults={searchResults}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
        />
      )}
    </section>
  );
};

export default Search;
