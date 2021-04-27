import { makeStyles } from '@material-ui/core/styles';
import { customTheme as theme } from '../src/theme';

const useStyles = makeStyles({
    root: {
        bottom: 0,
        width: "100%",
        backgroundColor: "#141433",
        color: "white",
    },
    footerContainer: {
        position: "relative",
        bottom: 0,
        width: "100%",
        display: "flex",
        backgroundColor: "#141433",
        color: "white",
    },
    columnContainer: {
        width: "100%",

    },
    footerColumns: {
        marginLeft: "7.625rem",
        marginRight: "auto",
        textAlign: "left",

        [theme.breakpoints.down(769)]: {
          marginLeft: "1.25rem",
          marginRight: "1.25rem",
          borderBottom: "0.0625rem solid #FFFFFF",
          maxHeight: "13.25rem",
        },
        [theme.breakpoints.down(400)]: {
          marginLeft: "1.25rem",
          marginRight: "1.25rem",
          borderBottom: "0.0625rem solid #FFFFFF",
          maxHeight: "12.25rem",
        },
      },
      footerLinks: {
        marginTop: "0rem",
      },
      footerColumnTwo: {
        [theme.breakpoints.down(769)]: {
          marginLeft: "3.875rem",
        },
      },
      line1: {
        backgroundImage: "linear-gradient(120deg, #B2080B 0%, #B2080B 100%)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 0.2em",
        backgroundPosition: "0 88%",
        transition: "background-size 0.25s ease-in",
        "&:hover": {
          backgroundSize: "100% 88%",
        }
      },
      headers: {
        fontWeight: '500',
        display: "inline-block",
        [theme.breakpoints.down(400)]: {
          marginBottom: 0,
        },
      },
      line2: {
        backgroundImage: "linear-gradient(120deg, #EF530B 0%, #EF530B 100%)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 0.2em",
        backgroundPosition: "0 88%",
        transition: "background-size 0.25s ease-in",
        "&:hover": {
          backgroundSize: "100% 88%",
        }
      },
      headers2: {
        fontWeight: '500',
        display: "inline-block",
        [theme.breakpoints.down(400)]: {
          marginBottom: 0,
        },
      },
      line3: {
        backgroundImage: "linear-gradient(120deg, #FC8B06 0%, #FC8B06 100%)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 0.2em",
        backgroundPosition: "0 88%",
        transition: "background-size 0.25s ease-in",
        "&:hover": {
          backgroundSize: "100% 88%",
        }
      },
      headers3: {
        fontWeight: '500',
        display: "inline-block",
        [theme.breakpoints.down(400)]: {
          marginBottom: 0,
          borderBottom: "0.125rem solid #FFFFFF",
        },
      },
      bottomStrip: {
        [theme.breakpoints.up(770)]: {
          borderTop: "0.0625rem solid #FFFFFF",
          marginRight: "1.25rem",
          marginLeft: "1.25rem",
          paddingBottom: "1.875rem",
          maxHeight: "4.5rem",
        },
        [theme.breakpoints.down(769)]: {
          marginRight: "1.25rem",
          marginLeft: "1.25rem",
          paddingBottom: "1.875rem",
          maxHeight: "6.5rem",
          textAlign: "center",
        }
      },
      bottomGridComp: {
        [theme.breakpoints.up(768)]: {
          textAlign: "right",
          marginTop: "1.625rem",
        },
        [theme.breakpoints.down(660)]: {
          textAlign: "center",
          innerHeight: "1rem",
        },
      },
      bottomGridGrid: {
        [theme.breakpoints.up(767)]: {
          marginTop: "0.625rem",
          alignItems: "right",
        },
        [theme.breakpoints.down(760)]: {
          alignItems: "center",
        },
      },
}); 

export { useStyles };