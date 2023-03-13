import { useEffect, useState } from 'react';

export const useFetch = (uri) => {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);
  const [sending, setSending] = useState(false);

  const fetchAll = () => {
    fetch(uri)
      .then((data) => data.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(setError);
  };

  const post = async (data) => {
    if (!uri) return;

    setSending(true);
    fetch(uri, {
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
      body: JSON.stringify(data),
    })
      .then((data) => {
        data.json();
        fetchAll();
      })
      .catch(setError)
      .finally(() => setSending(false));
  };

  const patch = async (id, data) => {
    if (!uri || !id) return;

    setSending(true);
    fetch(`${uri}/${id}`, {
      headers: { 'Content-Type': 'application/json' },
      method: 'PATCH',
      body: JSON.stringify(data),
    })
      .then((data) => {
        data.json();
        fetchAll();
      })
      .catch(setError)
      .finally(() => setSending(false));
  };

  useEffect(() => {
    if (!uri) return;

    fetchAll();
  }, [uri]);

  return { loading, data, error, post, sending, patch };
};
