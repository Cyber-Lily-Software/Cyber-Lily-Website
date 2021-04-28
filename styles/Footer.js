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
        fontWeight: "400",
        fontSize: "1rem",
        marginTop: "0rem",
        color: "#E8E8EB",
      },
      footerColumnTwo: {
        [theme.breakpoints.down(769)]: {
          marginLeft: "3.875rem",
        },
      },
      line1: {
        backgroundImage: "linear-gradient(120deg, #CF1A21 0%, #CF1A21 100%)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 0.2em",
        backgroundPosition: "0 88%",
        transition: "background-size 0.25s ease-in",
      },
      headers: {
        fontWeight: '700',
        display: "inline-block",
        fontSize: "1rem",
        [theme.breakpoints.up(770)]: {
          marginTop: "2.75rem",
        },
        [theme.breakpoints.down(450)]: {
          marginBottom: 0,
          marginTop: "1.5rem !important",
        },
      },
      line2: {
        backgroundImage: "linear-gradient(120deg, #EF530B 0%, #EF530B 100%)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 0.2em",
        backgroundPosition: "0 88%",
        transition: "background-size 0.25s ease-in",
      },
      headers2: {
        fontWeight: '700',
        display: "inline-block",
        fontSize: "1rem",
        [theme.breakpoints.up(770)]: {
          marginTop: "2.75rem",
        },
        [theme.breakpoints.down(450)]: {
          marginBottom: 0,
          marginTop: "1.5rem !important",
        },
      },
      line3: {
        backgroundImage: "linear-gradient(120deg, #FDB314 0%, #FDB314 100%)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 0.2em",
        backgroundPosition: "0 88%",
        transition: "background-size 0.25s ease-in",
      },
      headers3: {
        fontWeight: '700',
        display: "inline-block",
        fontSize: "1rem",
        [theme.breakpoints.up(770)]: {
          marginTop: "2.75rem",
        },
        [theme.breakpoints.down(450)]: {
          marginBottom: 0,
          marginTop: "1.5rem !important",
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
        },
        [theme.breakpoints.down(760)]: {
          marginRight: "1.25rem",
          paddingBottom: "1.875rem",
          maxHeight: "6.5rem",
          textAlign: "center",
        }
      },
      bottomGridComp: {
        [theme.breakpoints.up(1025)]: {
          paddingLeft: "36% !important",
        },
        [theme.breakpoints.up(1000)]: {
          paddingLeft: "26% !important",
        },
        [theme.breakpoints.up(767)]: {
          textAlign: "right",
          marginTop: "1.1rem",
          alignItems: "right",
          marginRight: "0rem",
          paddingLeft: "21%",
        },
        [theme.breakpoints.down(660)]: {
          textAlign: "center",
          alignItems: "center",
          paddingLeft: "31%",
        },
      },
      bottomGridGrid: {
        [theme.breakpoints.up(770)]: {
          marginTop: "0.625rem",
          alignItems: "right",
          paddingLeft: "6.25rem",
        },
        [theme.breakpoints.down(769)]: {
          marginTop: "0.625rem",
          alignItems: "left",
          fontSize: "0.875rem",
          paddingLeft: "1.25rem !important",
        },
        [theme.breakpoints.down(460)]: {
          alignItems: "center",
          paddingLeft: "0rem !important",
          marginTop: "0rem",
        },
      },
      facebookIcon: {
        margin: "8px 12.37px 7px 11px",
      },
      dribbleIcon: {
        margin: "6.70px",
      },
      linkedInIcon: {
        margin: "6px 6px 8px 8px",
      },
      drawerFooterIconContainer: {
        width: 34,
        height: 34,
        borderRadius: "50%",
        backgroundColor: "#e8e8eb",
        marginRight: "1.25rem",
      },
}); 

export { useStyles };