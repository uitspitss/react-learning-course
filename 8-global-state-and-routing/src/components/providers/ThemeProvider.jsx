import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext(null);

export const ThemeProvider = (props) => {
  const { children } = props;

  const [theme, setTheme] = useState("dark");

  const handleSetTheme = (val) => {
    setTheme(val);
    localStorage.setItem("theme", val);
  };

  useEffect(() => {
    const themeFromStorage = localStorage.getItem("theme");

    if (themeFromStorage) {
      setTheme(themeFromStorage);
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme: handleSetTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
