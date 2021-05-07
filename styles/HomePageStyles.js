import { makeStyles } from "@material-ui/core/styles";

export const homePageStyles = makeStyles((theme) => ({
  root: {
    width: "100vw",
    height: "100vh",
    [theme.breakpoints.down(435)]: {
      height: "70vh",
    },
  },
}));
