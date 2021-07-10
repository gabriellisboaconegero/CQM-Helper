import React from "react";

import styles from "./styles.module.scss";

export const Main: React.FC = ({children}) => {
  return (
    <main className={styles.mainContent}>
      {children}
    </main>
  );
}