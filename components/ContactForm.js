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
        maxHeight: "49rem",
        background: "#FFFFFF",
        boxShadow: "0px 8px 24px rgba(77, 77, 77, 0.2)",
        borderRadius: "12px",
        textAlign: "left",
        alignItems: "center",
        paddingLeft: "3rem",
        paddingRight: "3rem",
        [theme.breakpoints.down(420)]: {
          height: "43rem",
        },
      },
      innerCard: {
        display: "flex",
        paddingTop: "2.5rem",
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
          padding: 0,
      },
      radioBorder1: {
        border: "1px solid #141433",
        borderRadius: "0.5rem",
        marginLeft: "0.1rem",
        marginRight: '2rem',
        width: "12.59rem",
      },
      radioBorder2: {
        border: "1px solid #141433",
        borderRadius: "0.5rem",
        marginLeft: "0.1rem",
        marginRight: '0rem !important',
        paddingRight: '0rem !important',
        width: "12.59rem",
        '& .MuiFormControlLabel-root': {
        },
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

    const OrangeRadio = withStyles({
      root: {
        color: '#EF530B',
        '&$checked': {
          color: '#EF530B',
        },
      },
      checked: {},
    })((props) => <Radio color="default" {...props} />);

    const OrangeCheckbox = withStyles({
      root: {
        color: '#EF530B',
        '&$checked': {
          color: '#EF530B',
        },
      },
      checked: {},
    })((props) => <Checkbox color="default" {...props} />);
    
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
                    <CssTextField id="outlined-basic" border= "1px solid #141433" placeholder="e.g. John Doe" variant="outlined" className={classes.textField} aria-describedby="outlined-weight-helper-text" required={true}/>
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
                            control={<OrangeRadio inputProps={{ 'aria-label': 'query' }}/>} 
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
                            control={<OrangeRadio inputProps={{ 'aria-label': 'quote' }} />}
                            label="I want a quote" 
                            onChange={event => {
                              document.getElementById('selectorDiv').style.display = 'block';
                              document.getElementById('root').style.height = '55rem';
                            }} />
                        </RadioGroup>
                      </FormControl>
                    </div>
                    <div id={"selectorDiv"} className={classes.selectorDiv}>
                      <p className={classes.formFieldLabel}>What is your estimated budget?</p>
                      <FormControl variant="outlined" className={classes.formControl}>
                        <CssSelect
                          native={true}
                          value={state.age}
                          onChange={handleChange}
                          id='budgetSelect'
                          className={classes.select}
                          inputProps={{
                            classes: {
                                icon: classes.icon,
                            },
                        }}
                        MenuProps={{

                        }}
                        >
                          <option aria-label="Select budget range USD" value="none">Select budget range USD</option>
                          <option value={500}>$500-$1000</option>
                          <option value={1000}>$1000-$1500</option>
                          <option value={1500}>$1500-$3000</option>
                          <option value={3000}>$3000-$4000</option>
                          <option value={1500}>$4000-$5000</option>
                          <option value={1500}>$5000-$6000</option>
                          <option value={1500}>$6000-$7000</option>
                          <option value={1500}>$7000-$8000</option>
                          <option value={1500}>$8000-$9000</option>
                          <option value={1500}>$9000-$10 000</option>
                          <option value={1500}>$10 000-$10 000+</option>
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
                        control={<OrangeCheckbox inputProps={{ 'aria-label': 'query' }}/>}
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