import { useEffect } from "react";

import Link from "next/link";

import Logo from "./Logo";
import TopNavbar from "./TopNavbar";
import MobileNav from "./MobileNav";

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

  const handleScroll = () => {
    console.log("Scroll event", window.scrollY);

    if (window.scrollY > 20) {
      document.getElementById("topNavContainer").style.backgroundColor = "#ffffff";
      document.getElementById("topNavContainer").style.color = "#151534";
      document.getElementById("topNavbar").style.backgroundColor = "#ffffff";
      console.log(document.getElementById("topNavContainer"));
    } else {
      document.getElementById("topNavContainer").style.backgroundColor = "#151534";
      document.getElementById("topNavbar").style.backgroundColor = "#151534";
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <div className={styles.navbarContainer} id="topNavContainer">
      <div>
        <Logo />
      </div>
      <div className={styles.topNav} id="topNavbar">
        <TopNavbar navItems={navigationItems} />
      </div>
      <div className={styles.mobileTopNav} id="mobileTopNavbar">
        <MobileNav navItems={navigationItems} />
      </div>
    </div>
  );
}
