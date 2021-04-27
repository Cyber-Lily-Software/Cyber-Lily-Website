import Link from "next/link";
import { useRouter } from "next/router";

import clsx from "clsx";

import Button from "@material-ui/core/Button";

import { useStyles } from "../styles/TopNavbarStyle";

const routeMap = {
  "/": "Home",
  "/Services": "Services",
  "/About": "About",
};

export default function TopNavbar(props) {
  const router = useRouter();
  const styles = useStyles();

  const navigationItems = props?.navItems;

  return (
    <div className={styles.navItemContainer}>
      {navigationItems.map((navItem) => {
        if (navItem.navText === "Services") {
          return (
            <div className={clsx(styles.navItem, styles.servicesNavItem)} key={navItem.navText}>
              <Link key={navItem.navText} href={navItem.navUrl}>
                <Button
                  className={clsx(styles.navButton, styles.servicesNavButton, routeMap[router.route] === navItem.text ? styles.activeLinkText : "")}
                >
                  {navItem.navText}
                </Button>
              </Link>
              <div className={routeMap[router.route] === navItem.navText ? styles.servicesActiveLink : ""}></div>
              <ul className={styles.submenuList}>
                {navItem.subNav.map((subNavItem) => (
                  <Link href={subNavItem.url}>
                    <li key={subNavItem.navText} className={styles.submenuItem}>
                      <Button className={styles.subNavButton} disableRipple>
                        {subNavItem.navText}
                      </Button>
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
          );
        } else {
          return (
            <div className={clsx(styles.navItem)} key={navItem.navUrl}>
              <Link key={navItem.navText} href={navItem.navUrl}>
                <Button className={clsx(styles.navButton, routeMap[router.route] === navItem.navText ? styles.activeLinkText : "")}>
                  {navItem.navText}
                </Button>
              </Link>
              <div className={routeMap[router.route] === navItem.navText ? styles.activeLink : ""}></div>
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
