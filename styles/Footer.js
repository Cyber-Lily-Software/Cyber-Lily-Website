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
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
        marginLeft: "10rem",
        marginRight: "auto",
        paddingBottom: "2rem",
        textAlign: "left",
      },
      footerLinks: {},
      footerColumnTwo: {
        margin: theme.spacing(2),
      },
      headers: {
        fontWeight: '500',
        borderBottom: "0.125rem solid #B2080B",
        display: "inline-block",
      },
      headers2: {
        fontWeight: '500',
        borderBottom: "0.125rem solid #EF530B",
        display: "inline-block",
      },
      headers3: {
        fontWeight: '500',
        borderBottom: "0.125rem solid #FC8B06",
        display: "inline-block",
      },
      bottomStrip: {
        borderTop: "0.0625rem solid #FFFFFF",
        marginRight: "5rem",
        marginLeft: "5rem",
        paddingBottom: "0.5rem",
      },
      bottomGridComp: {
        textAlign: "right",
        alignItems: "right",
      },
      bottomGridGrid: {
        alignItems: "right",
      },
}); 

export { useStyles };