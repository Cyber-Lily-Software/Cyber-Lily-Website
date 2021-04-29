import { makeStyles } from "@material-ui/core/styles";

export const flowChartClasses = makeStyles((theme) => ({
  flowChart: {
    margin: 0,
    width: "100%",
    marginLeft: "auto",
    marginRight: "auto",
    width: "calc(100% - 128px)",
    maxWidth: 1312,
  },
  flowChartBackground: {
    position: "absolute",
    width: "200vw",
    height: "384px",
    backgroundColor: "#F9F9FA",
    left: "-50vw",
    zIndex: 0,
  },
  flowChartDiagram: {
    position: "relative",
    marginLeft: "auto",
    marginRight: "auto",
  },
  flowChartDottedLine: {
    strokeDasharray: 4,
    strokeDashoffset: 8,
    animationName: "$dashAnimation",
    animationDuration: ".2s",
    animationIterationCount: "infinite",
    animationTimingFunction: "linear",
    fill: "none",
    WebkitFontSmoothing: "antialiased",
  },
  flowChartSolidLine: {
    strokeDashoffset: -750,
    strokeDasharray: 750,
    transition: "stroke-dashoffset .1s linear, stroke .2s linear",
  },
  "@keyframes dashAnimation": {
    to: {
      strokeDashoffset: 0,
    },
  },
}));
