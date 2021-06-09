import useMediaQuery from "@material-ui/core/useMediaQuery";
import { makeStyles, useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%', 
        display: 'flex',
        paddingLeft: '20%',
        marginTop: '5%',
        [theme.breakpoints.down(1025)]: {
          display: 'block',
          paddingLeft: '0%',
          textAlign: 'center',
        },
    },
    titleText: {
        width: '45%',
        [theme.breakpoints.down(1025)]: {
            width: '100%',
        },
    },
    title: {
        textAlign: 'left',
        fontWeight: 700,
        fontSize: "2.5rem",
        lineHeight: "2.5rem",
        paddingBottom: "1.25rem",
        marginTop: "0rem",
        marginLeft: 'auto',
        marginRight: 'auto',
        [theme.breakpoints.down(1025)]: {
          textAlign: "center",
        },
    },
    line1: {
        backgroundImage: "linear-gradient(120deg, #F68320 0%, #F68320 100%)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 0.2em",
        backgroundPosition: "0 88%",
        transition: "background-size 0.25s ease-in",
    },
    line2: {
        marginLeft: '40%',
        backgroundImage: "linear-gradient(120deg, #F68320 0%, #F68320 100%)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 0.2em",
        backgroundPosition: "0 88%",
        transition: "background-size 0.25s ease-in",
        [theme.breakpoints.down(1025)]: {
            marginLeft: '0%',
        },
    },
    text: {
        fontWeight: 400,
        fontSize: '1rem',
        lineHeight: '1.5rem',
        marginTop: '-1.5rem',
        [theme.breakpoints.down(1025)]: {
            paddingLeft: '17%',
            paddingRight: '17%',
        },
        [theme.breakpoints.down(769)]: {
            paddingLeft: '10%',
            paddingRight: '10%',
        },
    },
    image: {
        width: '30%',
        marginLeft: '5%',
        [theme.breakpoints.down(1025)]: {
            width: '50%',
            marginLeft: '0%',
        },
        [theme.breakpoints.down(769)]: {
            width: '100%',
        },
    },
}));

export default function TopServiceCard(props) {
    const classes = useStyles();
    const theme = useTheme();

    console.log(props)

    if(props.serviceTitle === 'Website') {
        return(
            <div className={classes.root}>
                <div className={classes.titleText}>
                    <h2 className={classes.title}>{props.serviceTitle}<span className={classes.line1}> design & development</span></h2>
                    <p className={classes.text}>{props.shortDesc}</p>
                </div>
                <img className={classes.image} src={props.serviceImage}/>
            </div>
        );
    }   
    else if(props.serviceTitle === 'Web application') {
        return(
            <div className={classes.root}>
                <div className={classes.titleText}>
                    <h2 className={classes.title}>{props.serviceTitle}<span className={classes.line2}> design & development</span></h2>
                    <p className={classes.text}>Should your company need a webservice for your clients then this is the service for you! Webservices such as a client portal allows your clients to log in and obtain their information from anywhere in the world with an <strong>emphasis on security</strong>. The biggest benefit of these applications being web based is that all one needs  to use it is a browser and an internet connection.</p>
                    <p className={classes.text}> For business owners webservices also gives them a birds-eye view of their business. You can record, display and explore all the data your company has, granting you insights into your business you may not previously have had. We carefully design and implement web based applications for businesses.</p>
                </div>
                <img className={classes.image} src={props.serviceImage}/>
            </div>
        );
    }
    else {
        return(
            <div className={classes.root}>
                <div className={classes.titleText}>
                    <h2 className={classes.title}>{props.serviceTitle}<span className={classes.line2}> design & development</span></h2>
                    <p className={classes.text}>{props.shortDesc}</p>
                </div>
                <img className={classes.image} src={props.serviceImage}/>
            </div>
        );  
    }
}