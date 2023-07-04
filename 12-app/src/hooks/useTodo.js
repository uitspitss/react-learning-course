import { useEffect, useState } from 'react';

const URL = `${process.env.REACT_APP_API_URL}/todos`;

export const useTodo = (id) => {
  const [todo, setTodo] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [sending, setSending] = useState(false);

  const fetchTodo = () => {
    if (!id) return;

    setLoading(true);
    fetch(`${URL}/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('error');
        }

        return response.json();
      })
      .then(setTodo)
      .catch(setError)
      .finally(() => setLoading(false));
  };

  const update = async (data) => {
    if (!id) return;

    setSending(true);
    fetch(`${URL}/${id}`, {
      headers: { 'Content-Type': 'application/json' },
      method: 'PATCH',
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('failed fetch');
        }
        response.json();
        fetchTodo();
      })
      .catch(setError)
      .finally(() => setSending(false));
  };

  useEffect(() => {
    fetchTodo();
  }, []);

  return { loading, todo, error, sending, update };
};
