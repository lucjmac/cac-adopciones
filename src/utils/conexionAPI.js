const API = "https://www.themealdb.com/api/json/v1/1";

const get = (path) => {
  return fetch(API + path).then((results) => results.json());
};

export const getById = async (id) => {
  return await fetch(API + `/lookup.php?i=${id}`).then((results) =>
    results.json()
  );
};

export default get;
