import Link from "next/link";
import Logo from "../components/Logo";

import Button from "@material-ui/core/Button";

import { useStyles } from "../styles/TopNavbarStyle";

export default function TopNavbar(props) {
  const styles = useStyles();
  const navigationItems = props?.navItems;

  return (
    <div className={styles.navItemContainer}>
      {navigationItems.map((navItem) => {
        if (navItem.navText === "Services") {
          return (
            <div className={styles.navItem}>
              <Link key={navItem.navText} href={navItem.navUrl}>
                <Button className={styles.navButton}>{navItem.navText}</Button>
              </Link>
              <div className={styles.submenuContainer}>
                <ul className={styles.submenuList}>
                  {navItem.subNav.map((subNavItem) => (
                    <li key={subNavItem.navText} className={styles.submenuItem}>
                      <Link href={subNavItem.url}>
                        <Button className={styles.subNavButton}>{subNavItem.navText}</Button>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        } else {
          return (
            <div className={styles.navItem}>
              <Link key={navItem.navText} href={navItem.navUrl}>
                <Button className={styles.navButton}>{navItem.navText}</Button>
              </Link>
            </div>
          );
        }
      })}
      <Link href="/contact">
        <Button className={styles.navContactButton}>Get in touch</Button>
      </Link>
    </div>
  );
}
