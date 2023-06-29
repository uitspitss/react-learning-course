import { useState } from "react";
import "./App.css";

const App = () => {
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        ...Object.fromEntries(formData.entries()),
        userId: 1,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => {
      if (response.ok) {
        console.log("success!");
      } else {
        setError("error");
      }
    });
  };

  return (
    <div className="App">
      <p>{error}</p>
      <form onSubmit={handleSubmit}>
        <section>
          <label>
            name:
            <input name="title" />
          </label>
        </section>
        <section>
          <label>
            body:
            <input name="body" />
          </label>
        </section>
        <button type="submit">submit</button>
      </form>
    </div>
  );
};
export default App;
