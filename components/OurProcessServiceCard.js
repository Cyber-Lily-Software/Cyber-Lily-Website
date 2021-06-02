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
                minHeight: '10.25rem',
            },
        },
        innerCard: {
            display: "flex",
            textAlign: "center",
        },
        avatar: {
            backgroundColor: "#E6F3E9",
            position: "absolute",
            marginLeft: "44%",
            [theme.breakpoints.down(1025)]: {
                position: "relative",
                marginRight: "-2rem",
                marginLeft: "4rem",
            },
            [theme.breakpoints.down(769)]: {
                position: "relative",
                marginRight: "1rem",
                marginLeft: "-1rem",
            },
            [theme.breakpoints.down(420)]: {
                position: "relative",
                marginRight: "0rem",
                marginLeft: "0rem",
            }
        },
        avatar2: {
            backgroundColor: "#F1EBF2",
            position: "absolute",
            marginLeft: "43%",
            [theme.breakpoints.down(1025)]: {
                position: "relative",
                marginRight: "-5rem",
                marginLeft: "7rem",
            },
            [theme.breakpoints.down(769)]: {
                position: "relative",
                marginRight: "-2rem",
                marginLeft: "2rem",
            },
            [theme.breakpoints.down(420)]: {
                marginRight: "0rem",
                marginLeft: "0rem",
            },
        },
        avatar3: {
            backgroundColor: "#FEF3E9",
            position: "absolute",
            marginLeft: "44%",
            [theme.breakpoints.down(1025)]: {
                position: "relative",
                marginRight: "-11rem",
                marginLeft: "12rem",
            },
            [theme.breakpoints.down(769)]: {
                position: "relative",
                marginRight: "-7rem",
                marginLeft: "6rem",
            },
            [theme.breakpoints.down(420)]: {
                position: "relative",
                marginRight: "-4.5rem",
                marginLeft: "4rem",
            }
        },
        avatar4: {
            backgroundColor: "#FEF3E9",
            position: "absolute",
            marginLeft: "44%",
            [theme.breakpoints.down(1025)]: {
                position: "relative",
                marginRight: "-10rem",
                marginLeft: "11.5rem",
            },
            [theme.breakpoints.down(769)]: {
                position: "relative",
                marginRight: "-6.5rem",
                marginLeft: "6rem",
            },
            [theme.breakpoints.down(420)]: {
                position: "relative",
                marginRight: "-3.5rem",
                marginLeft: "3rem",
            }
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