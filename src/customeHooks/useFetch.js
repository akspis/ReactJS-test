import { useEffect, useState } from "react";
import { BACKEND_URL, BEARER_TOKEN } from "../utils/constants";

const useFetch = (url) => {
  const [resData, setResData] = useState([]);
  const [error, serError] = useState(null);

  const fetchData = async () => {
    try {
      const data = await fetch(BACKEND_URL + url, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${BEARER_TOKEN}`,
          Accept: "application/json",
        },
      });
      if (!data) {
        throw new Error(`Request failed with status: ${data.status}`);
      }
      const jsonData = await data.json();
      setResData(jsonData);
      serError(null);
    } catch (error) {
      serError(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { resData, error };
};

export default useFetch;
