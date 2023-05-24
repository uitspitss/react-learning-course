import { useState } from "react";
import "./App.css";

const Child = (props) => {
  const [val, setVal] = useState("");

  return (
    <div className="child">
      <div>{props.children}</div>
      <p>child: {val}</p>
      <form className="form">
        <input
          type="text"
          value={val}
          onChange={(e) => setVal(e.target.value)}
        />
      </form>
    </div>
  );
};

const App = () => {
  const [val, setVal] = useState("");

  return (
    <div className="App">
      <h1>Parent</h1>
      <form className="form">
        <input
          type="text"
          value={val}
          onChange={(e) => setVal(e.target.value)}
        />
      </form>
      <Child>from parent: {val}</Child>
    </div>
  );
};

export default App;
