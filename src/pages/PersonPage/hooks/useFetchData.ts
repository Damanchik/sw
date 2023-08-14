import { useEffect, useState } from "react";
import { fetchPeoplesData } from "../../../api";

interface IUseFetchData {
  page?: number;
}
/**
 * Хук запроса к персонажам
 */
const useFetchData = ({ page }: IUseFetchData) => {
  const [result, setResult] = useState<any[] | null>(null);
  const [count, setCount] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await fetchPeoplesData(page);
        console.log("data", data);
        if (data) {
          setResult(data.results);
          setCount(data.count);
        }
      } catch (e) {
        throw new Error("fetch error");
      }
    };

    fetchData();
  }, [page]);

  return { count, result };
};

export { useFetchData };
