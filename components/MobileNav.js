import { useState } from "react";

import Link from "next/link";

import Button from "@material-ui/core/Button";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

import { useStyles } from "../styles/TopNavbarStyle";

export default function MobileNav(props) {
  const styles = useStyles();
  const navigationItems = props?.navItems;
  const [open, setOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);

  const handleDrawer = () => {
    setOpen(!open);
  };

  const handleServiceDropdown = () => {
    setSubmenuOpen(!submenuOpen);
  };

  const container = typeof window !== "undefined" ? () => window.document.body : undefined;

  return (
    <div className={styles.navItemContainer}>
      <Link href="/contact">
        <Button className={styles.navContactButton}>Get in touch</Button>
      </Link>
      <IconButton onClick={handleDrawer} className={styles.iconButton} disableRipple>
        <MenuIcon className={styles.menuIconBtn} />
      </IconButton>
      <Drawer container={container} variant="temporary" anchor="right" open={open} onClose={handleDrawer}>
        <div className={styles.drawer}>
          <div className={styles.drawerBannerContainer}>
            <div className={styles.drawerLogoContainer}>
              <div>
                <img src="/logo/logomark.png" className={styles.drawerLogo} />
              </div>
              <div className={styles.drawerLogoText}>
                <div className={styles.drawerLogoMain}>Cyber Lily</div>
                <div className={styles.drawerLogoSub}>Software</div>
              </div>
            </div>
            <div>
              <IconButton className={styles.iconButton} onClick={handleDrawer} disableRipple>
                <CloseIcon className={styles.closeDrawerIcon} />
              </IconButton>
            </div>
          </div>
          <div className={styles.drawerNavContainer}>
            {navigationItems.map((navItem) => {
              if (navItem.navText === "Services") {
                return (
                  <div className={styles.drawerNavItem} key={navItem.navText}>
                    <Button className={styles.serviceNavButton} onClick={handleServiceDropdown}>
                      {navItem.navText} <ArrowDropDownIcon />
                    </Button>
                    <div className={styles.subMenuContainer}>
                      <ul className={submenuOpen ? styles.subMenuListOpen : styles.subMenuList}>
                        {navItem.subNav.map((subNavItem) => (
                          <Link href={subNavItem.url}>
                            <li key={subNavItem.navText} className={styles.serviceNavItem}>
                              <Button className={styles.serviceNavItemBtn}>{subNavItem.navText}</Button>
                            </li>
                          </Link>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              } else {
                return (
                  <div className={styles.drawerNavItem} key={navItem.navText}>
                    <Link href={navItem.navUrl}>
                      <Button className={styles.drawerNavButton}>{navItem.navText}</Button>
                    </Link>
                  </div>
                );
              }
            })}
            <div className={styles.drawerNavItem}>
              <Link href="/contact">
                <Button className={styles.drawerContactButton}>Get in touch</Button>
              </Link>
            </div>
          </div>
        </div>
      </Drawer>
    </div>
  );
}
