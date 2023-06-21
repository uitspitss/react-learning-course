import styles from "./Child.module.css";

export const Child = () => {
  const theme = "";

  return (
    <p className={`${styles.text} ${theme === "dark" && styles.dark}`}>child</p>
  );
};
