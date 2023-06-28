import { useEffect, useState } from 'react';

import { CreateTodoData, Todo, UpdateTodoData } from '../types/todo';

export const useFetch = (uri: string) => {
  const [data, setData] = useState<Array<Todo>>();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);
  const [sending, setSending] = useState(false);

  const fetchAll = () => {
    fetch(uri)
      .then(response => response.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(setError);
  };

  const create = async (data: CreateTodoData) => {
    if (!uri) return;

    setSending(true);
    fetch(uri, {
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
      body: JSON.stringify(data)
    })
      .then(response => {
        response.json();
        fetchAll();
      })
      .catch(setError)
      .finally(() => setSending(false));
  };

  const update = async (id: string, data: UpdateTodoData) => {
    if (!uri || !id) return;

    setSending(true);
    fetch(`${uri}/${id}`, {
      headers: { 'Content-Type': 'application/json' },
      method: 'PATCH',
      body: JSON.stringify(data)
    })
      .then(response => {
        response.json();
        fetchAll();
      })
      .catch(setError)
      .finally(() => setSending(false));
  };

  useEffect(() => {
    if (!uri) return;

    fetchAll();

    // exhausive-deps に fetchAll を入れると無限ループが出る
    // 回避策としては、 useCallback or
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [uri]);

  return { loading, data, error, create, sending, update };
};
