import { useContext } from "react";
import { ThemeContext } from "./providers/ThemeProvider";

export const ThemeSelector = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={theme === "dark"}
          onChange={() => setTheme(theme === "dark" ? "light" : "dark")}
        />
        dark mode
      </label>
    </div>
  );
};
