import React, { useState, useEffect } from "react";
import { Navigate, useSearchParams } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import styles from "./Search.module.css";

const Search = ({ reversed }) => {
  const [searchParam, setSearchParam] = useState("");
  const [searchParams] = useSearchParams();
  const defaultSearch = searchParams.get("search");

  const handleSubmit = (event) => {
    event.preventDefault();
    const elements = new FormData(event.currentTarget);
    const search = elements.get("search");
    setSearchParam(search);
    event.target.reset();
  };

  let inputContainerClassName = reversed
    ? styles.inputContainer + " " + styles.reversed
    : styles.inputContainer;

  useEffect(() => {
    return setSearchParam("");
  });

  return (
    <>
      {searchParam ? (
        <Navigate to={`/recetas?search=${searchParam}`} replace={true} />
      ) : null}
      <form onSubmit={handleSubmit} className={styles.form}>
        <span className={inputContainerClassName}>
          <CiSearch />
          <input
            defaultValue={defaultSearch}
            name="search"
            placeholder="Search..."
            className={styles.input}
          />
        </span>
      </form>
    </>
  );
};

export default Search;
