import styles from "./Child.module.css";

import { useContext } from "react";
import { ThemeContext } from "./providers/ThemeProvider";

export const Child = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <p className={`${styles.text} ${theme === "dark" && styles.dark}`}>child</p>
  );
};
