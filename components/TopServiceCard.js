import useMediaQuery from "@material-ui/core/useMediaQuery";
import { makeStyles, useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
    },
}));

export default function HomeTechExp(props) {
    const classes = useStyles();
    const theme = useTheme();

    return(
        <div className={classes.root}>

        </div>
    );
}