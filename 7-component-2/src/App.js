import { useState } from "react";
import "./App.css";

const Child = (props) => {
  const [val, setVal] = useState("");

  return (
    <div className="child">
      <h2>Child</h2>
    </div>
  );
};

const App = () => {
  const [val, setVal] = useState("");

  return (
    <div className="parent">
      <h1>Parent</h1>
    </div>
  );
};

export default App;
