import { useState } from "react";
import styles from "./header.css";

function createHeader() {
  return (
    <div className={styles.header}>
      <span>Movie</span>
    </div>
  );
}
