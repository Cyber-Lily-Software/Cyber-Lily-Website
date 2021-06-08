import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  iconContainer: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr 1fr",
    gridAutoRows: "1fr",
    columnGap: "1.5rem",
    marginLeft: "7.5rem",
    marginRight: "7.5rem",
    alignItems: "stretch",
    rowGap: "2rem",
    gap: "1.5rem",
  },
  iconBox: {
    boxShadow: "0px 4px 8px rgba(67, 67, 92, 0.16)",
    borderRadius: "12px",
    paddingTop: "1rem",
    paddingBottom: "1rem",
    display: "flex",
  },
  iconImg: {
    margin: "auto",
  },
}));
