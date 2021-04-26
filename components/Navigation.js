import Link from "next/link";

import Logo from "./Logo";
import TopNavbar from "./TopNavbar";
import MobileNav from "./MobileNav";

import Button from "@material-ui/core/Button";

import { useStyles } from "../styles/TopNavbarStyle";

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
        navText: "Web Application Design & Development",
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

export default function Navigation() {
  const styles = useStyles();

  return (
    <div className={styles.navbarContainer}>
      <div>
        <Logo />
      </div>
      <div className={styles.topNav}>
        <TopNavbar navItems={navigationItems} />
      </div>
      <div className={styles.mobileTopNav}>
        <MobileNav navItems={navigationItems} />
      </div>
    </div>
  );
}
