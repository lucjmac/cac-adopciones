import React, { useState, useEffect } from "react";
import { NavLink, Navigate } from "react-router-dom";

const Search = () => {
  const [searchParam, setSearchParam] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const elements = new FormData(event.currentTarget);
    const search = elements.get("search");
    setSearchParam(search);
  };

  useEffect(() => {
    return setSearchParam("");
  });

  return (
    <>
      {searchParam ? (
        <Navigate to={`/recetas?search=${searchParam}`} replace={true} />
      ) : null}
      <form onSubmit={handleSubmit}>
        <input name="search" placeholder="Buscar receta" />
      </form>
    </>
  );
};

export default Search;
