import { useStyles } from "../styles/ServiceCard";

export default function ServiceCard(props) {
  const styles = useStyles();

  return (
    <div className={styles.cardRoot}>
      <div className={styles.cardFront}>
        <div className={styles.cardFrontImage}>
          <img src="/sample1.png" />
        </div>
        <div className={styles.cardFrontHeader}>{props.cardHeader}</div>
      </div>
      <div className={styles.cardBack}></div>
    </div>
  );
}
