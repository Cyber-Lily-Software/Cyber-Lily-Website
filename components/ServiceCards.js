import ServiceCard from "./ServiceCard";

import { useStyles } from "../styles/ServiceCard";

export default function ServiceCards() {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <div className={styles.serviceCards}>
        <ServiceCard cardHeader="Website Design & Development" />
        <ServiceCard cardHeader="Web Application Design & Development" />
        <ServiceCard cardHeader="Custom Software Development" />
      </div>
    </div>
  );
}
