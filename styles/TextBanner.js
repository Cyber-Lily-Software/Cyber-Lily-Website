import { makeStyles } from "@material-ui/core/styles";

export const bannerStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    background: "linear-gradient(180deg, #141433 25.52%, #1C1C39 71.87%, #20203D 93.23%, #2C2C47 100%)",
    height: "32.5rem",
  },
  headerTextContainer: {
    marginLeft: "7.5rem",
    lineHeight: "52px",
    marginTop: "auto",
    marginBottom: "auto",
    width: 612,
  },
  headerText: {
    fontWeight: "700",
    fontSize: "2.5rem",
    color: "#ffffff",
  },
}));
