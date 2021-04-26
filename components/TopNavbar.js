import Link from "next/link";
import Logo from "../components/Logo";

import Button from "@material-ui/core/Button";

import styles from "../styles/Topnavbar.module.css";

const navigationItems = [
  {
    navText: "Home",
    navUrl: "/",
  },
  {
    navText: "Services",
    navUrl: "/services",
    subNav: [
      {
        navText: "Website Design & Development",
        url: "/services/web-design",
      },
      {
        navText: "Web Application Development",
        url: "services/web-application",
      },
      {
        navText: "Custom Software Development",
        url: "services/custom-software",
      },
    ],
  },
  {
    navText: "About",
    navUrl: "/about",
  },
];

export default function TopNavbar() {
  return (
    <div className={styles.navbarContainer}>
      <div>
        <Logo />
      </div>
      <div className={styles.navItemContainer}>
        {navigationItems.map((navItem) => (
          <Link key={navItem.navText} href={navItem.navUrl}>
            <Button className={styles.navButton}>{navItem.navText}</Button>
          </Link>
        ))}
        <Link href="/contact">
          <Button className={styles.navContactButton}>Get in touch</Button>
        </Link>
      </div>
    </div>
  );
}
