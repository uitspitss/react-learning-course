import "./App.css";

import { ThemeProvider } from "./components/providers/ThemeProvider";
import { Child } from "./components/Child";
import { ThemeSelector } from "./components/ThemeSelector";

const App = () => {
  return (
    <ThemeProvider>
      <div className="App">
        <Child />
        <ThemeSelector />
      </div>
    </ThemeProvider>
  );
};

export default App;
