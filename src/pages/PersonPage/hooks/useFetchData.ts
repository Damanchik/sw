import { useEffect, useState } from "react";
import { fetchPersonData } from "../../../api";

/**
 * Хук запроса к персонажу
 * Забирает данные из LS, если мы их уже редактировали
 */
const useFetchData = () => {
  const [result, setResult] = useState();
  useEffect(() => {
    if (localStorage.getItem(window.location.pathname)) {
      const data = localStorage.getItem(window.location.pathname) as string;
      setResult(JSON.parse(data));
      return;
    }

    const fetchData = async () => {
      try {
        const { data } = await fetchPersonData(window.location.pathname);
        if (data) {
          console.log(data);
          setResult(data);
        }
      } catch (e) {
        throw new Error("fetchPersonData");
      }
    };
    fetchData();
  }, []);

  return { result };
};

export { useFetchData };
