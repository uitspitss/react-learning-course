import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  const fetchData = () => {
    setLoading(true);

    fetch(url)
      .then((response) => response.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(setError);
  };

  useEffect(() => {
    if (!url) return;

    fetchData();

    // exhaustive-deps に fetchAll を入れると無限ループが出る
    // 回避策としては、 useCallback or
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  return { data, error, loading };
};
