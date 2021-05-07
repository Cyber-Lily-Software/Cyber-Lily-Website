import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  bannerContainer: {
    width: "100%",
    height: "100%",
    background: "linear-gradient(180deg, #141433 25.52%, #1c1c39 71.87%, #20203d 93.23%, #2c2c47 100%)",
    display: "flex",
    paddingLeft: "7.5rem",
    paddingRight: "7.5rem",
    [theme.breakpoints.down(769)]: {
      flexDirection: "column",
    },
    [theme.breakpoints.down(435)]: {
      paddingRight: "1.25rem",
      paddingLeft: "1.25rem",
    },
  },
  bannerText: {
    color: "#ffffff",
    margin: "auto",
    "& > h1": {
      lineHeight: "3.5rem",
      fontSize: "3rem",
      marginRight: "1.5rem",
    },
    "& > p": {
      lineHeight: "1.5rem",
      marginRight: "7.75rem",
    },
    [theme.breakpoints.down(769)]: {
      textAlign: "center",
      "& > h1": {
        lineHeight: "3.25rem",
        fontSize: "2.5rem",
        marginRight: "3rem",
        marginLeft: "3rem",
      },
      "& > p": {
        marginRight: "3rem",
        marginLeft: "3rem",
      },
    },
    [theme.breakpoints.down(435)]: {
      textAlign: "center",
      "& > h1": {
        fontSize: "2rem",
        lineHeight: "2.5rem",
        fontWeight: 500,
        marginRight: 0,
        marginLeft: 0,
        marginBottom: 0,
      },
      "& > p": {
        lineHeight: "1.5rem",
        marginRight: ".25rem",
        marginLeft: ".25rem",
        marginTop: "0.75rem",
      },
    },
  },
  bannerImage: {
    margin: "auto",
  },
  bannerContactButton: {
    display: "none",
    [theme.breakpoints.down(435)]: {
      marginLeft: "auto",
      marginRight: "auto",
      paddingBottom: "2rem",
      display: "block",
      "& > .MuiButton-text": {
        textTransform: "capitalize",
      },
      "& > .MuiButton-root": {
        padding: "0.75rem 1.5rem",
        backgroundColor: "#ef530b",
        color: "#ffffff",
      },
    },
  },
}));
