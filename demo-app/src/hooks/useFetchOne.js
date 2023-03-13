import { useEffect, useState } from 'react';

export const useFetchOne = (uri, id) => {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);
  const [sending, setSending] = useState(false);

  const fetchOne = () => {
    fetch(`${uri}/${id}`)
      .then((data) => data.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(setError);
  };

  const patch = async (data) => {
    if (!uri || !id) return;

    setSending(true);
    fetch(`${uri}/${id}`, {
      headers: { 'Content-Type': 'application/json' },
      method: 'PATCH',
      body: JSON.stringify(data),
    })
      .then((data) => {
        data.json();
        fetchOne();
      })
      .catch(setError)
      .finally(() => setSending(false));
  };

  useEffect(() => {
    if (!uri) return;

    fetchOne();

    // exhausive-deps に fetchAll を入れると無限ループが出る
    // 回避策としては、 useCallback or
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [uri]);

  return { loading, data, error, sending, patch };
};
