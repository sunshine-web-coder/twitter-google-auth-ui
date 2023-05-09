import React from "react";
import styles from "./Spinner.module.scss";

export default function Spinner({ theme }) {
  return (
    <>
      <div
        className={theme === "light" ? styles.light_theme : styles.dark_theme}
      >
        <div className={styles.spinner_container}>
          <div className="spinner"></div>
        </div>

        <Spinner2 />
      </div>
    </>
  );
}

function Spinner2({ theme }) {
  return (
      <div className={styles.spinner_container2}>
        <div className="spinner"></div>
      </div>
  );
}
