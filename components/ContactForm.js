import React, { useState } from 'react';
import Link from "next/link";
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import Checkbox from '@material-ui/core/Checkbox';
import Button from "@material-ui/core/Button";
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import RadioGroup from '@material-ui/core/RadioGroup';

import useMediaQuery from "@material-ui/core/useMediaQuery";

import clsx from "clsx";

import { makeStyles, useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(1),
        width: '33.38rem',
        height: "43rem",
        background: "#FFFFFF",
        boxShadow: "0px 8px 24px rgba(77, 77, 77, 0.2)",
        borderRadius: "12px",
        textAlign: "left",
        alignItems: "center",
        paddingLeft: "3rem",
        paddingRight: "3rem",
      },
      innerCard: {
        display: "flex",
        transformStyle: "preserve-3d",
        transition: "0.8s transform",
        [theme.breakpoints.down(415)]: {
          display: "block",
          height: "375px",
        },
      },
      front: {
        minWidth: "100%",
        backfaceVisibility: "hidden",
      },
      textField: {
        width: "26.75rem",
        border: "1px solid #141433",
        borderRadius: "0.5rem",
      },
      selector: {
          marginTop: "0.25rem",
          display: "flex",
          justifyContent: "space-between",
      },
      radioBorder: {
        border: "1px solid #141433",
        borderRadius: "0.5rem",
        marginLeft: "0.1rem",
        width: "12.59rem",
      },
      sendButton: {
        color: "#FFFFFF !important",
        backgroundColor: "#EF530B !important",
        marginLeft: "auto",
        marginRight: "auto",
        textTransform: "capitalize !important",
        width: "5.313rem",
        fontWeight: "500",
        lineHeight: "1.25rem",
        height: "2.75rem",
      },
      checkbox: {
        minWidth: "100%",
      },
      buttonDiv: {
        textAlign: "center",
      },
      bottomText: {
        marginTop: "1.75rem",
        fontWeight: "400",
        fontSize: "0.75rem",
        lineHeight: "1.75rem",
        textAlign: "center",
        marginLeft: "2rem",
        marginRight: "2rem",
      },
      selectorDiv: {
        display: "none",
      },
      formControl: {
        width: "100%",
      },
    }));

    
    export default function ContactForm() {
    const classes = useStyles();
    const theme = useTheme();

    const [state, setState] = useState(0);
    const [value, setValue] = React.useState('query');

  
    console.log(state)

    const handleChange = (event) => {
      const name = event.target.name;
      setState({
        ...state,
        [name]: event.target.state,
      });
    };

    const handleGroupChange = (event) => {
      setValue(event.target.value);
    };

    const mobileBreakpoint = useMediaQuery(theme.breakpoints.down(4000));
  
    return (
        <form id="root" className={classes.root} noValidate autoComplete="off">
            <div className={classes.innerCard}>
                <div className={classes.front}>
                    <p>Full Name</p>
                    <TextField id="outlined-basic" label="e.g. John Doe" variant="outlined" className={classes.textField}/>
                    <p>Email address</p>
                    <TextField id="outlined-basic" label="e.g. johndoe@gmail.com" variant="outlined" className={classes.textField}/>
                    <p>How can we help you?</p>
                    <div className={classes.selector}>
                      <FormControl component="fieldset">
                        <RadioGroup row aria-label="gender" name="gender1" value={value} onChange={handleGroupChange}>
                          <FormControlLabel 
                            className={classes.radioBorder} 
                            id="query"
                            value="query" 
                            control={<Radio color="primary" />} 
                            label="I have a query" 
                            onChange={event => {
                              document.getElementById('selectorDiv').style.display = 'none';
                              document.getElementById('root').style.height = '43rem';
                            }}
                          />
                          <FormControlLabel 
                            className={classes.radioBorder}
                            id="quote"
                            value="quote"
                            control={<Radio color="primary" />}
                            label="I want a quote" 
                            onChange={event => {
                              document.getElementById('selectorDiv').style.display = 'block';
                              document.getElementById('root').style.height = '50rem';
                            }} />
                        </RadioGroup>
                      </FormControl>
                    </div>
                    <div id={"selectorDiv"} className={classes.selectorDiv}>
                      <p>What is your estimated budget?</p>
                      <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel htmlFor="outlined-budget-native-simple">Select budget range</InputLabel>
                        <Select
                          native
                          value={state.age}
                          onChange={handleChange}
                          label="Age"
                          id='budgetSelect'
                          inputProps={{
                            name: 'budget',
                            id: 'outlined-budget-native-simple',
                          }}
                        >
                          <option aria-label="None" value="" />
                          <option value={10}>Ten</option>
                          <option value={20}>Twenty</option>
                          <option value={30}>Thirty</option>
                        </Select>
                      </FormControl>
                    </div>
                    <p>Tell us more</p>
                    <TextField
                        id="outlined-multiline-static"
                        className={classes.textField}
                        multiline
                        rows={4}
                        defaultValue="Default Value"
                        variant="outlined"
                    />
                    <FormControlLabel
                        value="end"
                        control={<Checkbox color="primary" />}
                        label="Send me a non-disclosure agreement."
                        labelPlacement="end"
                        className={classes.checkbox}
                    />
                    <div className={classes.buttonDiv}>
                        <Button variant="contained" href={""} disableElevation className={classes.sendButton}>
                            Send
                        </Button>
                    </div>
                    <div className={classes.bottomText}>
                        <p>Rest assured, we'll never share sensible information provided to us about your project publicly.</p>
                    </div>
                </div>
        </div>
      </form>
    );
  }