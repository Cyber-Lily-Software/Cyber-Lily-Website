import React from "react";
import clsx from "clsx";
import Link from "next/link";
import Grid from "@material-ui/core/Grid";

import {useStyles} from '../styles/Footer'
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import SportsBasketballIcon from '@material-ui/icons/SportsBasketball';

export default function TopNavbar() {
    const classes = useStyles();

    const companyNavItems = [
        {
          text: "About",
          url: "/about/",
        },
        {
          text: "Work Process",
          url: "/workprocess",
        },
        {
          text: "Technology Toolkit",
          url: "/techtoolkit",
        },
      ];

      const serviceNavItems = [
        {
          text: "Website Design & Devlopment",
          url: "/webdesigndevelop/",
        },
        {
          text: "Web Application Design & Development",
          url: "/webappdesigndev",
        },
        {
          text: "Custom Software Design & Development",
          url: "/softwaredesigndev",
        },
      ];

      const getInTouchNavItems = [
        {
          text: "info@cyberlilysoftware.com",
        },
        {
          text: "ZIM: +263 774 947 635",
        },
        {
          text: "S.A:  +27 72 325 7125",
        },
      ];

      const socialMediaItems = [
        {
          text: "Bottom",
          url: "/bob",
          icon: <FacebookIcon />,
        },
        {
          text: "stuff",
          url: "/jim",
          icon: <SportsBasketballIcon />,
        },
        {
          text: "here",
          url: "/john",
          icon: <LinkedInIcon />,
        },
      ];

  return (
      <div className={classes.root}>
        <div className={classes.footerContainer}>
            <div className={classes.columnContainer}>
                <Grid container orientation="column">
                    <Grid item xs={12} sm={4}>
                        <div className={clsx(classes.footerColumns, classes.footerLinks)}>
                            <h2 className={classes.headers} >COMPANY</h2>
                            {companyNavItems.map((companyNavItem) => (
                            <Link href={companyNavItem.url} key={companyNavItem.text}>
                                <p>{companyNavItem.text}</p>
                            </Link>
                            ))}
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <div className={clsx(classes.footerColumns, classes.footerLinks)}>
                            <h2 className={classes.headers2} >SERVICES</h2>
                            {serviceNavItems.map((companyNavItem) => (
                            <Link href={companyNavItem.url} key={companyNavItem.text}>
                                <p>{companyNavItem.text}</p>
                            </Link>
                            ))}
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <div className={clsx(classes.footerColumns, classes.footerLinks)}>
                            <h2 className={classes.headers3} >GET IN TOUCH</h2>
                            {getInTouchNavItems.map((companyNavItem) => (
                                <p>{companyNavItem.text}</p>
                            ))}
                        </div>
                    </Grid>
                </Grid>
            </div>
        </div>
        <div className={classes.bottomStrip}>
            <Grid container orientation="column">
                <Grid item xs={6}>
                    <p weight={400}>&#169; 2021 Cyber Lily Software | Sitemap | Privacy Policy</p>
                </Grid>
                <Grid item className={classes.bottomGridComp} xs={6}>
                    <Grid className={classes.bottomGridGrid} container orientation="row" justify="flex-end" alignItems="center">
                        <Grid item xs={3}>
                            {socialMediaItems.map((navItem) => (
                                <Link href={navItem.url} key={navItem.text}>
                                    {navItem.icon}
                                </Link>
                                ))}
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    </div>
  );
}