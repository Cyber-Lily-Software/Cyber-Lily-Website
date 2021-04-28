import React from "react";
import clsx from "clsx";

import {useStyles} from '../styles/GITFooter';
import Button from '@material-ui/core/Button';

export default function TopNavbar() {
  const classes = useStyles();

  return (
    <div className={classes.mainContainer}>
        <p className={classes.textBlock}>
            Reach out and let's grow your product together. 
        </p>
        <Button variant="contained" disableElevation className={classes.contactButton}>Get in touch</Button>
    </div>      
  );
}