import { useEffect, useState } from 'react';

import { Todo, UpdateTodoData } from '../types/todo';

export const useFetchOne = (uri: string, id: string) => {
  const [data, setData] = useState<Todo | null>(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [sending, setSending] = useState(false);

  const fetchOne = () => {
    setLoading(true);
    fetch(`${uri}/${id}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('error');
        }

        return response.json();
      })
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  };

  const update = async (data: UpdateTodoData) => {
    if (!uri || !id) return;

    setSending(true);
    fetch(`${uri}/${id}`, {
      headers: { 'Content-Type': 'application/json' },
      method: 'PATCH',
      body: JSON.stringify(data)
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('failed fetch');
        }
        response.json();
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

  return { loading, data, error, sending, update };
};
