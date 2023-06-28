import "./App.css";
import { useFetch } from "./hooks/useFetch";

const App = () => {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts/1"
  );

  if (loading) {
    return <p>loading...</p>;
  }

  return (
    <div className="App">
      {error && <p>{error}</p>}
      {JSON.stringify(data)}
    </div>
  );
};

export default App;
