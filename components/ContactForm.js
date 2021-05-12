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
import FormHelperText from '@material-ui/core/FormHelperText';

import useMediaQuery from "@material-ui/core/useMediaQuery";

import clsx from "clsx";

import { makeStyles, useTheme, withStyles} from "@material-ui/core/styles";

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
        marginTop: "2.5rem",
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
        width: "100%",
        borderRadius: "0.5rem",
        marginBottom: "1.25rem",
      },
      formFieldLabel: {
        margin: 0,
        paddingBottom: "0.25rem",
      },
      selector: {
          marginTop: "0.25rem",
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "1.25rem",
      },
      radioBorder1: {
        border: "1px solid #141433",
        borderRadius: "0.5rem",
        marginLeft: "0.1rem",
        marginRight: '1.0rem',
        width: "12.59rem",
      },
      radioBorder2: {
        border: "1px solid #141433",
        borderRadius: "0.5rem",
        marginLeft: "1.1rem",
        paddingRight: '0rem !important',
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
        marginTop: -15,
        minWidth: "100%",
        marginBottom: "1.5rem",
      },
      buttonDiv: {
        textAlign: "center",
      },
      bottomText1: {
        marginTop: "1.75rem",
        fontWeight: "400",
        fontSize: "0.75rem",
        lineHeight: "1.75rem",
        textAlign: "center",
        marginLeft: "auto",
        marginRight: "auto",
      },
      bottomText2: {
        fontWeight: "400",
        marginTop: '-1.5rem',
        fontSize: "0.75rem",
        lineHeight: "1.75rem",
        textAlign: "center",
        marginLeft: "auto",
        marginRight: "auto",
      },
      selectorDiv: {
        display: "none",
        marginBottom: "1.25rem",
      },
      formControl: {
        width: "100%",
      },
      select: {
        width: "100%",
        borderRadius: '0.5rem',
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
          },
        },
        '&:hover fieldset': {
          borderColor: '#EF530B !important',
        },
        '&.Mui-focused fieldset': {
          borderColor: '#EF530B !important',
        },
      },
      icon: {
          fill: "#EF530B",
      },
    }));

    const CssTextField = withStyles({
      root: {
        '& label.Mui-focused': {
          color: 'black',
        },
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: 'black',
          },
          '&:hover fieldset': {
            borderColor: '#EF530B',
          },
          '&.Mui-focused fieldset': {
            borderColor: '#EF530B',
          },
        },
      },
    })(TextField);

    const CssSelect = withStyles({
      root: {
        '& label.Mui-focused': {
          color: 'black',
        },
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: 'black',
          },
          '&:hover fieldset': {
            borderColor: '#EF530B',
          },
          '&.Mui-focused fieldset': {
            borderColor: '#EF530B',
          },
        },
      },
    })(Select);

    
    export default function ContactForm() {
    const classes = useStyles();
    const theme = useTheme();

    const [state, setState] = useState(0);
    const [value, setValue] = React.useState('query');

  
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
                    <p className={classes.formFieldLabel}>Full Name</p>
                    <CssTextField id="outlined-basic" border= "1px solid #141433" placeholder="e.g. John Doe" variant="outlined" className={classes.textField} aria-describedby="outlined-weight-helper-text" />
                    <p className={classes.formFieldLabel}>Email address</p>
                    <CssTextField id="outlined-basic" placeholder="e.g. johndoe@gmail.com" variant="outlined" className={classes.textField}/>
                    <p className={classes.formFieldLabel}>How can we help you?</p>
                    <div className={classes.selector}>
                      <FormControl component="fieldset" >
                        <RadioGroup row aria-label="choice" name="gender1" value={value} onChange={handleGroupChange}>
                          <FormControlLabel 
                            className={classes.radioBorder1} 
                            id="query"
                            value="query" 
                            control={<Radio iconStyle={{fill: '#EF530B'}} />} 
                            label="I have a query" 
                            onChange={event => {
                              document.getElementById('selectorDiv').style.display = 'none';
                              document.getElementById('root').style.height = '43rem';
                            }}
                          />
                          <FormControlLabel 
                            className={classes.radioBorder2}
                            id="quote"
                            value="quote"
                            control={<Radio iconStyle={{fill: '#EF530B'}} />}
                            label="I want a quote" 
                            onChange={event => {
                              document.getElementById('selectorDiv').style.display = 'block';
                              document.getElementById('root').style.height = '50rem';
                            }} />
                        </RadioGroup>
                      </FormControl>
                    </div>
                    <div id={"selectorDiv"} className={classes.selectorDiv}>
                      <p className={classes.formFieldLabel}>What is your estimated budget?</p>
                      <FormControl variant="outlined" borderColor='white' className={classes.formControl}>
                        <CssSelect
                          native={true}
                          value={state.age}
                          onChange={handleChange}
                          id='budgetSelect'
                          className={classes.select}
                          inputProps={{
                            classes: {
                                icon: classes.icon,
                                input: classes.select,
                            },
                        }}
                        MenuProps={{

                        }}
                        >
                          <option aria-label="Select budget range" value="none">Select budget range</option>
                          <option value={20}>Twenty</option>
                          <option value={30}>Thirty</option>
                        </CssSelect>
                      </FormControl>
                    </div>
                    <p className={classes.formFieldLabel}>Tell us more</p>
                    <CssTextField
                        id="outlined-multiline-static"
                        className={classes.textField}
                        multiline
                        rows={4}
                        placeholder="Message"
                        variant="outlined"
                    />
                    <FormControlLabel
                        value="end"
                        control={<Checkbox iconStyle={{fill: '#EF530B'}} />}
                        label="Send me a non-disclosure agreement."
                        labelPlacement="end"
                        className={classes.checkbox}
                    />
                    <div className={classes.buttonDiv}>
                        <Button variant="contained" href={""} disableElevation className={classes.sendButton}>
                            Send
                        </Button>
                    </div>
                    <div>
                        <p className={classes.bottomText1} >Rest assured, we'll never share sensible information provided to </p>
                        <p className={classes.bottomText2}> us about your project publicly.</p>
                    </div>
                </div>
        </div>
      </form>
    );
  }