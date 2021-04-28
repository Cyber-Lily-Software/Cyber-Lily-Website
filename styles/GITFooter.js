import { makeStyles } from '@material-ui/core/styles';
import { customTheme as theme } from '../src/theme';

const useStyles = makeStyles({
    mainContainer: {
        width: "100% !important",
        backgroundColor: "#F9F9FA",
        textAlign: "center",
        height: "25rem",
        color: "#141433",
        fontSize: "2.25rem",
    },
    logo: {
        paddingTop: "5.5rem",
        [theme.breakpoints.down(420)]: {
            marginLeft: "60% !important",
        },
        [theme.breakpoints.down(380)]: {
            marginLeft: "80% !important",
        },
    },
    contactButton: {
        color: "#FFFFFF !important",
        backgroundColor: "#EF530B !important",
        radius: "0.25rem",
        width: "9.563rem",
        height: "3rem",
        textTransform: "capitalize !important", 
        [theme.breakpoints.down(760)]: {
            marginLeft: "65%",
        },
        [theme.breakpoints.down(420)]: {
            marginLeft: "60%",
        },
        [theme.breakpoints.down(380)]: {
            marginLeft: "70%",
        },
        [theme.breakpoints.down(330)]: {
            marginLeft: "80%",
        },
    },
    textBlock: {
        width: "40.88rem",
        marginTop: "0",
        marginLeft: "auto",
        marginRight: "auto",
        paddingTop: "0rem",
        fontWeight: "700",
        [theme.breakpoints.up(770)]: {
            paddingLeft: "2%",
            paddingRight: "2%",
        },
        [theme.breakpoints.down(769)]: {
            paddingLeft: "4%",
            paddingRight: "4%",
        },
    },
}); 

export { useStyles };