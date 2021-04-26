import { React } from "react";

import { useStyles } from "../styles/TopNavbarStyle";

export default function Logo() {
  const styles = useStyles();

  return (
    <div className={styles.logoContainer}>
      <div className={styles.logoImgContainer}>
        <img src="/logo/logomark.png" className={styles.logoImgContainer} />
      </div>
      <div className={styles.logoText}>
        <div className={styles.logoMainHeading}>Cyber Lily</div>
        <div className={styles.logoSubHeading}>Software</div>
      </div>
    </div>
  );
}
