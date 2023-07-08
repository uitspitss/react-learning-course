import { useEffect, useState } from 'react';
import { Todo, UpdateTodoData } from '../types/todo';

const URL = `${process.env.REACT_APP_API_URL}/todos`;

export const useTodo = (id: string) => {
  const [todo, setTodo] = useState<Todo | null>(null);
  const [error, setError] = useState<string>();
  const [loading, setLoading] = useState(true);
  const [sending, setSending] = useState(false);

  const fetchTodo = () => {
    if (!id) return;

    setLoading(true);
    fetch(`${URL}/${id}`)
      .then((response) => response.json())
      .then(setTodo)
      .catch(setError)
      .finally(() => setLoading(false));
  };

  const update = async (data: UpdateTodoData) => {
    if (!id) return;

    setSending(true);
    fetch(`${URL}/${id}`, {
      headers: { 'Content-Type': 'application/json' },
      method: 'PATCH',
      body: JSON.stringify(data),
    })
      .then((response) => {
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
