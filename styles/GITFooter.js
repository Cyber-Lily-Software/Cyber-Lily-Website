import { makeStyles } from '@material-ui/core/styles';
import { customTheme as theme } from '../src/theme';

const useStyles = makeStyles({
    mainContainer: {
        width: "100%",
        backgroundColor: "#F9F9FA",
        textAlign: "center",
        height: "25rem",
        color: "#141433",
        fontSize: "2.25rem",
    },
    contactButton: {
        color: "#FFFFFF",
        backgroundColor: "#EF530B",
        radius: "0.25rem",
        width: "9.563rem",
        height: "3rem",
        [theme.breakpoints.down(760)]: {
            marginLeft: "65%",
        },
        [theme.breakpoints.down(420)]: {
            marginLeft: "55%",
        },
        [theme.breakpoints.down(380)]: {
            marginLeft: "65%",
        },
        [theme.breakpoints.down(330)]: {
            marginLeft: "80%",
        },
    },
    textBlock: {
        width: "40.88rem",
        marginLeft: "auto",
        marginRight: "auto",
        paddingTop: "9.5rem",
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