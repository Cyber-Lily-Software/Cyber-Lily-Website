import { makeStyles } from '@material-ui/core/styles';
import { customTheme as theme } from '../src/theme';

const useStyles = makeStyles({
    root: {
        width: "100%",
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        backgroundColor: "#F9F9FA",
        paddingLeft: "7.5rem",
        [theme.breakpoints.down(1025)]: {
          paddingLeft: "0rem",
          textAlign: "center !important",
          alignContent: "center !important",
          marginLeft: "auto",
          marginRight: "auto",
        },
        [theme.breakpoints.down(769)]: {
          paddingLeft: "0rem",
        },
      },
      processItem: {
        width: "25%",
        paddingBottom: "1rem",
        [theme.breakpoints.down(1025)]: {
          width: "100%",
          textAlign: "center",
          alignContent: "center",
          marginLeft: "auto",
          marginRight: "auto",
          paddingLeft: "10.63rem",
          paddingRight: "10.63rem",
        },
        [theme.breakpoints.down(420)]: {
          paddingLeft: "1.25rem",
          paddingRight: "1.25rem",
        }
      },
      topText: {
          width: "100%",
          alignItems: "center",
          fontWeight: 700,
          fontSize: "2.5rem",
          lineHeight: "1.5rem",
          marginBottom: "4rem !important",
          marginTop: "5rem !important",
          textAlign: "center",
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
}); 

export { useStyles };