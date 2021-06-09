import React, { useState } from 'react';
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Avatar from "@material-ui/core/Avatar";

import clsx from "clsx";

import { makeStyles, useTheme, withStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
        root: {
            display: "flex",
            textAlign: "center",
            perspective: "40rem",
            maxWidth: "80%",
            minHeight: '31.25rem',
            [theme.breakpoints.down(1025)]: {
                maxWidth: "90%",
                display: 'block',
                alignItems: 'center',
                minHeight: '22rem',
                marginTop: '3.25rem',
                boxShadow: '0px 4px 8px rgba(67, 67, 92, 0.16)',
                height: '19rem !important',
                borderRadius: '0.5rem',
                paddingLeft: '10%',
                paddingRight: '10%',
                paddingTop: '2rem',
            },
            [theme.breakpoints.down(769)]: {
                paddingLeft: '5%',
                paddingRight: '5%',
            },
            [theme.breakpoints.down(420)]: {
                maxWidth: "100%",
                marginLeft: '5%',
                marginRight: '5%',
            },
        },
        innerCard: {
            display: "flex",
            textAlign: "center",
        },
        avatar: {
            backgroundColor: "#FFF7E8",
            position: "absolute",
            marginLeft: "44%",
            [theme.breakpoints.down(1025)]: {
                position: "relative",
                marginRight: "auto",
                marginLeft: "auto",
            },
            [theme.breakpoints.down(769)]: {
                position: "relative",
            },
            [theme.breakpoints.down(420)]: {
                position: "relative",
            }
        },
        avatar2: {
            backgroundColor: "#FEF3E9",
            position: "absolute",
            marginLeft: "43%",
            [theme.breakpoints.down(1025)]: {
                position: "relative",
                marginRight: "auto",
                marginLeft: "auto",
            },
            [theme.breakpoints.down(769)]: {
                position: "relative",
            },
        },
        avatar3: {
            backgroundColor: "#F1EBF2",
            position: "absolute",
            marginLeft: "44%",
            [theme.breakpoints.down(1025)]: {
                position: "relative",
                marginRight: "auto",
                marginLeft: "auto",
            },
            [theme.breakpoints.down(769)]: {
                position: "relative",
            },
        },
        avatar4: {
            backgroundColor: "#E6F3E9",
            position: "absolute",
            marginLeft: "44%",
            [theme.breakpoints.down(1025)]: {
                position: "relative",
                marginRight: "auto",
                marginLeft: "auto",
            },
            [theme.breakpoints.down(769)]: {
                position: "relative",
            },
        },
        descText: {
            textAlign: "center",
            fontWeight: 400,
            fontSize: "1rem",
            lineHeight: "1.5rem",
            paddingTop: "0rem",
            marginTop: "1.25rem",
            [theme.breakpoints.down(1025)]: {
                marginTop: "-2.5rem",
                textAlign: "center",
                marginLeft: "auto",
                marginRight: "auto",
                marginBottom: '3rem',
            },
        },
        title: {
            textAlign: "center",
            fontWeight: 500,
            fontSize: "2rem",
            lineHeight: "1.5rem",
            paddingTop: "1rem",
            marginBottom: "0rem !important",
            [theme.breakpoints.down(1025)]: {
                textAlign: "center",
            },
        },
    }));

    export default function OurProcessServiceCard(props) {
    const classes = useStyles();
    const theme = useTheme();

    function getAvatar(avatar) {
        if (avatar === "a1") {
          return <Avatar className={classes.avatar}>
                    <picture>
                        <source media="(min-width: 374px)" srcSet={props.processIcon1} />
                        <source media="(min-width: 1025px)" srcSet={props.processIcon2} />
                        <source media="(min-width: 2560px)" srcSet={props.processIcon3} />
                        <img src={props.processIcon1} />
                    </picture>
                </Avatar>;
        }
        if (avatar === "a2") {
            return <Avatar className={classes.avatar2}>
                      <picture>
                          <source media="(min-width: 374px)" srcSet={props.processIcon1} />
                          <source media="(min-width: 1025px)" srcSet={props.processIcon2} />
                          <source media="(min-width: 2560px)" srcSet={props.processIcon3} />
                          <img src={props.processIcon1} />
                      </picture>
                  </Avatar>;
          }
          if (avatar === "a3") {
            return <Avatar className={classes.avatar3}>
                      <picture>
                          <source media="(min-width: 374px)" srcSet={props.processIcon1} />
                          <source media="(min-width: 1025px)" srcSet={props.processIcon2} />
                          <source media="(min-width: 2560px)" srcSet={props.processIcon3} />
                          <img src={props.processIcon1} />
                      </picture>
                  </Avatar>;
          }
          return <Avatar className={classes.avatar4}>
                    <picture>
                        <source media="(min-width: 374px)" srcSet={props.processIcon1} />
                        <source media="(min-width: 1025px)" srcSet={props.processIcon2} />
                        <source media="(min-width: 2560px)" srcSet={props.processIcon3} />
                        <img src={props.processIcon1} />
                    </picture>
                </Avatar>;
      }

    const mobileBreakpoint = useMediaQuery(theme.breakpoints.down(4000));
    return (
        <div className={classes.root}>
            {getAvatar(props.avatar)}
            <div className={classes.descText}>
                <p className={classes.title}>{props.processName}</p>
                <p>{props.shortDesc}</p>
            </div>
        </div>
    );
  }