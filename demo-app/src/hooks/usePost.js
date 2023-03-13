import { useState } from 'react';

export const usePost = (uri) => {
  const [error, setError] = useState();
  const [sending, setSending] = useState(false);

  const post = async (data) => {
    console.log(data);
    if (!uri) return;

    setSending(true);
    fetch(uri, {
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
      body: JSON.stringify(data),
    })
      .then((data) => data.json())
      .catch(setError)
      .finally(() => setSending(false));
  };

  return { sending, post, error };
};
