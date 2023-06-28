import { useState } from "react";
import "./App.css";
import { Box, Button, Stack, TextField } from "@mui/material";

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
      <Box component="form" onSubmit={handleSubmit}>
        <Stack spacing={2}>
          <section>
            <TextField name="title" label="title" />
          </section>
          <section>
            <TextField name="body" label="body" />
          </section>
          <Button type="submit">submit</Button>
        </Stack>
      </Box>
    </div>
  );
};

export default App;
