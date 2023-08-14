import axios from "axios";

const baseUrl = "https://swapi.dev/api/";
const requestUrl = "https://swapi.dev/api/people";

/** * Запрос к персонажам */
export const fetchPeoplesData = (page = 1) =>
  axios.get(requestUrl, {
    params: { page },
  });

/** * Запрос к поиску */
export const fetchSearchData = (search = "") =>
  axios.get(requestUrl, {
    params: { search },
  });

/** * Запрос к данным страницы персонажа */
export const fetchPersonData = (pathname = "") => {
  const url = `${baseUrl}${pathname}`;
  console.log("url", url);
  return axios.get(url);
};
