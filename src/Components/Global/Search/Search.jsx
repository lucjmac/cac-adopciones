import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import getResults from "../../../utils/getSearchResults";
import SearchCard from "../../Molecules/SearchCard/SearchCard";
import styles from "./Search.module.css";

const Search = () => {
  const [searchParams] = useSearchParams();
  const [searchTerm, setSearchParam] = useState("");
  const [searchResults, setSearchResults] = useState([]);

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
          searchResults.map((result, index) => (
            <SearchCard key={index} item={result} />
          ))
        ) : (
          <h3 className={styles.searchPageNoTitle}>No results found</h3>
        )}
      </ul>
    </section>
  );
};

export default Search;
