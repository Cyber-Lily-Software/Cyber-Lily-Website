import { React } from "react";

import styles from "../styles/Topnavbar.module.css";

export default function Logo() {
  return (
    <div className={styles.logoContainer}>
      <div className={styles.logoImgContainer}>
        <img src="/logo/logomark.png" />
      </div>
      <div className={styles.logoText}>
        <div className={styles.logoMainHeading}>Cyber Lily</div>
        <div className={styles.logoSubHeading}>Software</div>
      </div>
    </div>
  );
}
