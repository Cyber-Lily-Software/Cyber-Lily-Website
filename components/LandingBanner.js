import { useStyles } from "../styles/LandingBannerStyles";

import Button from "@material-ui/core/Button";

export default function LandingBanner() {
  const styles = useStyles();

  return (
    <div className={styles.banner}>
      <div className={styles.bannerContent}>
        <div className={styles.bannerText}>
          <h1>Simple Solutions to Complex Problems</h1>
          <p>We design and develop amazing web products that grow your business.</p>
        </div>
        <div className={styles.bannerImage}>
          <picture>
            <source media="(min-width: 2560px)" srcset="/home_page/banner_home@2x.png" />
            <source media="(min-width: 1440px)" srcset="/home_page/banner_home.png" />
            <source media="(min-width: 1024px)" srcset="/home_page/banner_mobile.png" />
            <source media="(min-width: 768px)" srcset="/home_page/banner_tablet.png" />
            <img src="/home_page/banner_mobile.png" />
          </picture>
        </div>
        <div className={styles.bannerContactButton}>
          <Button>Get in touch</Button>
        </div>
      </div>
    </div>
  );
}
