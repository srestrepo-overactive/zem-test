import { useCallback, useEffect, useState } from "react";
const dataJson = require("../../../models/celebrities/index.json");

export const useGetCelebrities = (url, useMock = false) => {
  const [dataServer, setDataServer] = useState([]);
  const [error, setError] = useState(false);
  const [isLoadingServer, setIsLoadingServer] = useState(false);

  const getCelebritiesFromMock = useCallback(
    () => setDataServer(dataJson.data),
    []
  );

  const getCelebritiesFromServer = useCallback(
    () =>
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
        }),
    [url]
  );

  const getCelebritiesObject = useCallback(
    () => (useMock ? getCelebritiesFromMock() : getCelebritiesFromServer()),
    [getCelebritiesFromServer, useMock, getCelebritiesFromMock]
  );

  useEffect(() => {
    getCelebritiesObject();
  }, [url, useMock, getCelebritiesObject]);

  return { dataServer, setDataServer, error, isLoadingServer };
};
