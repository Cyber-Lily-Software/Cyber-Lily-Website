import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  iconContainer: {
    display: "grid",
    marginTop: '5%',
    marginBottom: '5%',
    gridTemplateColumns: "1fr 1fr 1fr 1fr",
    gridAutoRows: "1fr",
    columnGap: "1.5rem",
    marginLeft: "7.5rem",
    marginRight: "7.5rem",
    alignItems: "stretch",
    rowGap: "2rem",
    gap: "1.5rem",
    [theme.breakpoints.down(769)]: {
      gridTemplateColumns: "1fr 1fr 1fr",
      marginLeft: "3.75rem",
      marginRight: "3.75rem",
    },
    [theme.breakpoints.down(435)]: {
      gridTemplateColumns: "1fr 1fr",
      columnGap: "0.75rem",
      marginLeft: "1.25rem",
      marginRight: "1.25rem",
      rowGap: "0.75rem",
    },
  },
  iconBox: {
    boxShadow: "0px 4px 8px rgba(67, 67, 92, 0.16)",
    borderRadius: "12px",
    paddingTop: "1rem",
    paddingBottom: "1rem",
    display: "flex",
    [theme.breakpoints.down(769)]: {
      paddingLeft: "1.25rem",
      paddingRight: "1.25rem",
      width: 200,
      height: 102,
    },
    [theme.breakpoints.down(435)]: {
      width: 162,
      height: 80,
    },
  },
  iconImg: {
    margin: "auto",
    [theme.breakpoints.down(769)]: {
      width: "100%",
      height: "100%",
      textAlign: "center",
    },
  },
  htmlBox: {
    [theme.breakpoints.down(769)]: {
      paddingTop: "0.68rem",
      paddingBottom: "0.68rem",
    },
    [theme.breakpoints.down(435)]: {
      paddingTop: "0.5rem",
      paddingBottom: "0.5rem",
    },
  },
  cssBox: {
    [theme.breakpoints.down(769)]: {
      paddingTop: "0.68rem",
      paddingBottom: "0.68rem",
    },
    [theme.breakpoints.down(435)]: {
      paddingTop: "0.5rem",
      paddingBottom: "0.5rem",
    },
  },
  htmlIcon: {
    [theme.breakpoints.down(769)]: {
      width: 56,
      height: 80,
    },
    [theme.breakpoints.down(435)]: {
      width: 45,
      height: 64,
    },
  },
  cssIcon: {
    [theme.breakpoints.down(769)]: {
      width: 56,
      height: 80,
    },
    [theme.breakpoints.down(435)]: {
      width: 45,
      height: 64,
    },
  },
}));