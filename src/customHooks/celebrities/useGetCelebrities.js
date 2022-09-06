import { useEffect, useState } from "react";

export const useGetCelebrities = (url) => {
  const [dataServer, setDataServer] = useState([]);
  const [error, setError] = useState(false);
  const [isLoadingServer, setIsLoadingServer] = useState(false);

  useEffect(() => {
    fetch(url)
      .then((response) => {
        setIsLoadingServer(true);
        if (!response.ok) {
          return Promise.reject(response);
        }
        return response.json();
      })
      .then((result) => {
        setDataServer(result.Items);
        setIsLoadingServer(false);
      })
      .catch((err) => {
        console.log(err);
        setError(true);
        setIsLoadingServer(false);
      });
  }, [url]);

  return { dataServer, setDataServer, error, isLoadingServer };
};
