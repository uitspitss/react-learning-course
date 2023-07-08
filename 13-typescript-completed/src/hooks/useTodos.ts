import { useEffect, useState } from 'react';
import { CreateTodoData, Todo, UpdateTodoData } from '../types/todo';

const URL = `${process.env.REACT_APP_API_URL}/todos`;

export const useTodos = () => {
  const [todos, setTodos] = useState<Todo[] | null>(null);
  const [error, setError] = useState<string>();
  const [loading, setLoading] = useState(true);
  const [sending, setSending] = useState(false);

  const fetchTodos = () => {
    setLoading(true);
    fetch(URL)
      .then((response) => response.json())
      .then(setTodos)
      .then(() => setLoading(false))
      .catch(setError);
  };

  const create = async (data: CreateTodoData) => {
    if (!data) return;

    setSending(true);
    fetch(URL, {
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
      body: JSON.stringify(data),
    })
      .then((response) => {
        response.json();
        fetchTodos();
      })
      .catch(setError)
      .finally(() => setSending(false));
  };

  const update = async (id: string, data: UpdateTodoData) => {
    if (!id) return;

    setSending(true);
    fetch(`${URL}/${id}`, {
      headers: { 'Content-Type': 'application/json' },
      method: 'PATCH',
      body: JSON.stringify(data),
    })
      .then((response) => {
        response.json();
        fetchTodos();
      })
      .catch(setError)
      .finally(() => setSending(false));
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return { loading, todos, error, create, update, sending };
};
