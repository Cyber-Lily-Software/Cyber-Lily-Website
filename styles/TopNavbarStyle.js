import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  navbarContainer: {
    width: "100%",
    backgroundColor: "#151534",
    display: "flex",
    justifyContent: "space-between",
    paddingLeft: "7.5rem",
    paddingRight: "7.5rem",
    transition: "all 0.33s",
    [theme.breakpoints.up(769)]: {
      position: "sticky",
      top: 0,
    },
    [theme.breakpoints.down(769)]: {
      paddingLeft: "3.75rem",
      paddingRight: "3.75rem",
    },
    [theme.breakpoints.down(426)]: {
      paddingLeft: "1.25rem",
      paddingRight: "1.25rem",
    },
  },
  logoDiv: {
    cursor: "pointer",
  },
  activeLink: {
    width: "50%",
    height: "4px",
    marginTop: -15,
    marginLeft: "auto",
    marginRight: "auto",
    backgroundColor: "#ef530b",
    fontWeight: 500,
  },
  servicesActiveLink: {
    width: "60%",
    height: "4px",
    marginTop: -15,
    marginLeft: "auto",
    marginRight: "auto",
    backgroundColor: "#ef530b",
  },
  activeLinkText: {
    fontWeight: "500 !important",
  },
  isScrolled: {
    [theme.breakpoints.up(769)]: {
      backgroundColor: "#ffffff",
      boxShadow: "0px 2px 4px rgba(67, 67, 92, 0.16)",

      "& > div > div > div:nth-child(2) > div": {
        color: "#151534 !important",
      },

      "& > div:nth-child(2) > div > div > button": {
        color: "#151534 !important",
      },

      "& > div:nth-child(2) > div > div > div": {
        backgroundColor: "#f68320",
      },
    },
  },
  logoImgContainer: {
    [theme.breakpoints.down(426)]: {
      width: "37px",
      height: "32px",
    },
  },
  logoContainer: {
    paddingTop: "1rem",
    paddingBottom: "1rem",
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down(426)]: {
      paddingTop: "1.5rem",
      paddingBottom: "1.5rem",
    },
  },
  logoText: {
    paddingLeft: "0.75rem",
    paddingTop: "0.1rem",
    [theme.breakpoints.down(426)]: {
      paddingLeft: "0.1875rem",
      paddingTop: "0.125rem",
    },
  },
  logoMainHeading: {
    fontFamily: '"Roboto", sans-serif',
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "1.25rem",
    lineHeight: "23px",
    textAlign: "center",
    textTransform: "uppercase",
    color: "#ffffff",
    [theme.breakpoints.down(426)]: {
      fontSize: "0.75rem",
      lineHeight: "15px",
    },
  },
  logoSubHeading: {
    fontFamily: '"Roboto", sans-serif',
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "0.75rem",
    lineHeight: "0.875rem",
    textAlign: "center",
    textTransform: "uppercase",
    color: "#ffffff",
    [theme.breakpoints.down(426)]: {
      fontSize: "0.4375rem",
      lineHeight: "9px",
    },
  },
  navItemContainer: {
    display: "flex",
    paddingTop: "1.125rem",
    paddingBottom: "0.875rem",
    [theme.breakpoints.down(426)]: {
      paddingTop: "1.75rem",
      paddingBottom: "1.75rem",
    },
  },
  navItem: {
    paddingTop: "0.25rem",
  },
  submenuList: {
    visibility: "hidden",
    transitionDelay: "0.1s",
    position: "absolute",
    zIndex: 9999,
    listStyleType: "none",
    paddingLeft: 0,
    marginLeft: "8px",
    width: 336,
    backgroundColor: "#ffffff",
    borderRadius: 8,
    "&:hover": {
      "&:nth-child(1)": {
        borderBottom: "1px solid #e8e8eb",
      },
    },
  },
  submenuItem: {
    cursor: "pointer",
    display: "block",
    borderBottom: "1px solid #e8e8eb",
    "&:nth-child(3)": {
      borderBottom: "none",
    },
    "&:hover": {
      backgroundColor: "#e8e8eb",
      fontWeight: 500,
      "& $subNavButton": {
        fontWeight: 500,
      },
      "&:nth-child(1)": {
        borderRadius: "8px 8px 0px 0px",
      },
      "&:nth-child(3)": {
        borderRadius: "0px 0px 8px 8px",
      },
    },
  },
  subNavButton: {
    padding: 0,
    margin: "0.7rem",
    color: "#141433 !important",
    textTransform: "capitalize",
    fontWeight: 400,
    lineHeight: "1.5rem",
    "&:hover": {
      backgroundColor: "#e8e8eb",
    },
  },
  submenuContainer: {
    position: "relative",
    backgroundColor: "#ffffff",
    borderRadius: "0.5rem",
    boxShadow: "0px 4px 8px rgba(67, 67, 92, 0.16)",
  },
  servicesNavItem: {
    "&:hover": {
      "& $submenuList": {
        visibility: "visible",
      },
    },
  },
  navButton: {
    color: "#ffffff",
    textTransform: "capitalize",
    fontWeight: "normal",
    lineHeight: "1.5rem",
    fontStyle: "normal",
    textAlign: "center",
    marginLeft: "0.75rem",
    marginRight: "0.75rem",
  },
  navContactButton: {
    textTransform: "capitalize !important",
    color: "#ffffff !important",
    textAlign: "center",
    backgroundColor: "#ef530b !important",
    padding: "0.75rem 1.5rem",
    marginLeft: "0.75rem",
    boxShadow: "0px 4px 8px rgba(252, 218, 188, 0.16)",
    [theme.breakpoints.down(769)]: {
      padding: "0.5rem 1.25rem",
      fontSize: "0.875rem",
      fontWeight: 500,
    },
    [theme.breakpoints.down(426)]: {
      display: "none",
    },
  },
  navButtonContainer: {
    height: "100%",
    alignItems: "center",
  },
  topNav: {
    [theme.breakpoints.down(769)]: {
      display: "none",
    },
  },
  mobileTopNav: {
    [theme.breakpoints.up(769)]: {
      display: "none",
    },
  },
  menuIconBtn: {
    color: "#ffffff",
    borderRadius: "1px",
    width: "24px",
    height: "24px",
  },
  iconButton: {
    paddingLeft: "1.938rem",
    [theme.breakpoints.down(769)]: {
      paddingTop: 0,
      paddingBottom: 0,
    },
  },
  contactLink: {
    [theme.breakpoints.down(426)]: {
      display: "none",
    },
  },
  drawer: {
    width: 375,
  },
  drawerBannerContainer: {
    display: "flex",
    justifyContent: "space-between",
    paddingLeft: "1.25rem",
    paddingRight: "1.25rem",
    paddingTop: "1.5rem",
    paddingBottom: "calc(2.875rem - 6px)",
  },
  drawerLogoContainer: {
    display: "flex",
  },
  drawerLogoMain: {
    fontFamily: "Roboto",
    fontWeight: "700",
    fontStyle: "normal",
    lineHeight: "15px",
    textAlign: "center",
    textTransform: "uppercase",
    fontSize: "0.75rem",
  },
  drawerLogoSub: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "",
    lineHeight: "9px",
    fontSize: "0.4375rem",
    textAlign: "center",
    textTransform: "uppercase",
  },
  drawerLogo: {
    width: 37,
    height: 32,
  },
  drawerLogoText: {
    paddingLeft: "0.1875rem",
    paddingTop: "0.15rem",
  },
  closeDrawerIcon: {
    color: "#141433",
  },
  drawerNavContainer: {
    display: "grid",
    paddingLeft: "calc(1.875rem - 8px)",
  },
  drawerNavItem: {
    justifySelf: "start",
  },
  drawerNavButton: {
    justifyContent: "start !important",
    paddingBottom: "1.5rem",
    fontSize: "1.25rem",
  },
  serviceNavButton: {
    paddingBottom: "1.25rem",
    fontSize: "1.25rem",
  },
  subMenuContainer: {
    marginTop: 0,
  },
  subMenuContainerOpen: {
    marginTop: 0,
    height: "100%",
    height: 160,
    maxHeight: 160,
    visibility: "visible",
    transitionDelay: "0s",
  },
  subMenuList: {
    marginTop: 0,
    marginBottom: 0,
    listStyleType: "none",
    paddingLeft: 8,
    visibility: "hidden",
    opacity: 0,
    height: 0,
    transition: "all 0.25s ease 0s, visibiltiy 0s linear 0.25s",
  },
  subMenuListOpen: {
    marginTop: 0,
    listStyleType: "none",
    paddingLeft: 8,
    visibility: "visible",
    opacity: 1,
    height: 160,
    transition: "all 0.25s ease 0s, visibiltiy 0s linear 0.25s",
  },
  serviceNavItem: {
    marginBottom: "1.25rem",
  },
  serviceNavItemBtn: {
    paddingLeft: 0,
    textTransform: "capitalize",
    lineHeight: "1.75rem",
    fontWeight: "normal",
    fontStyle: "normal",
    color: "#141433",
    fontWeight: "400 !important",
  },
  drawerContactButton: {
    textTransform: "capitalize",
    fontWeight: 500,
    lineHeight: "1.25rem",
    textAlign: "center",
    backgroundColor: "#EF530b",
    color: "#ffffff",
    padding: "0.75rem 1.5rem",
    borderRadius: 4,
  },
  drawerFooter: {
    paddingLeft: "0.5rem",
    display: "flex",
    position: "fixed",
    bottom: 0,
    marginBottom: "3.125rem",
  },
  drawerFooterIconContainer: {
    width: 32,
    height: 32,
    borderRadius: "50%",
    backgroundColor: "#e8e8eb",
    marginRight: "0.75rem",
  },
  drawerFooterIcon: {
    borderRadius: "50%",
    width: 20,
    height: 20,
  },
  drawerFacebookIcon: {
    margin: "7px 11.37px 7px 11px",
  },
  drawerDribbleIcon: {
    margin: "6px",
  },
  drawerLinkedInIcon: {
    margin: "6px 6px 8px 8px",
  },
}));
