import axios from "axios";

export const setLoaded = (payload) => ({
  type: "SET_LOADED",
  payload,
});

export const fetchShavermas = (dispatch, sortBy, category) => {
  dispatch(setLoaded(false));
  axios
    .get(getAxiosPath(sortBy, category))
    .then(({ data }) => dispatch(setShavermas(data)));
};

const getAxiosPath = (sortBy, category) => {
  const translateSortBy = {
    популярности: "popular",
    цене: "price",
    алфавиту: "title",
  };
  let startUrl = "http://localhost:3001/items/?";
  if (category !== "Все") startUrl += `category=${category}`;
  startUrl += `&_sort=${translateSortBy[sortBy]}&_order`;

  if (sortBy === "популярности") startUrl += "=desc";
  else startUrl += "=asc";

  return startUrl;
};

export const setShavermas = (items) => ({
  type: "SET_SHAVERMAS",
  payload: items,
});
