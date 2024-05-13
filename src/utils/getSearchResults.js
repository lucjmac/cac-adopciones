import get, { getById } from "./conexionAPI";

const getResults = async (query) => {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/${query}`
  );
  const data = await response.json();
  return data;
};

export const getAllResults = () => {
  const results = get("/filter.php?i=")
    .then((data) => {
      const idList = data.meals.map((meal) => {
        return meal.idMeal;
      });
      return idList;
    })
    .then((idList) => {
      const truncatedList = idList.slice(0, 90);
      const calls = [];
      truncatedList.forEach((id) => {
        calls.push(getById(id));
      });
      return Promise.all(calls);
    });
  return results;
};

export default getResults;
