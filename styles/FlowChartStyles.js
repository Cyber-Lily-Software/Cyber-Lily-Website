import { makeStyles } from "@material-ui/core/styles";

export const flowChartClasses = makeStyles((theme) => ({
  flowChart: {
    margin: 0,
    width: "100%",
    marginLeft: "auto",
    marginRight: "auto",
    width: "calc(100% - 128px)",
    maxWidth: 1312,
    position: "relative",
    // display: "flex",
  },
  flowChartBackground: {
    position: "absolute",
    width: "150vw",
    height: "384px",
    backgroundColor: "#F9F9FA",
    left: "-50vw",
    zIndex: -1,
  },
  flowChartDiagram: {
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
  flowChartNodes: {
    display: "flex",
    zIndex: 100,
  },
  flowChartNode: {
    height: 78,
    width: 78,
    borderRadius: "50%",
    backgroundColor: "#FFFFFF",
    border: "2px solid #141433",
    boxSizing: "border-box",
    position: "absolute",
    display: "flex",
    top: 35,
  },
  chatNode: {},
  designNode: {
    left: 225,
  },
  approvalNode: {
    left: 435,
  },
  partnerNode: {
    left: 635,
  },
  requestNode: {
    top: 235,
    left: 435,
  },
  developNode: {
    left: 835,
  },
  testNode: {
    left: 1035,
  },
  deployNode: {
    left: 1235,
  },
  flowChartIcon: {
    margin: "auto",
    width: 32,
    height: 32,
  },
}));
