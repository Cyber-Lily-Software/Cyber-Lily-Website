import { makeStyles } from "@material-ui/core/styles";

export const flowChartClasses = makeStyles((theme) => ({
  flowChart: {
    margin: 0,
    width: "100%",
    marginLeft: "auto",
    marginRight: "auto",
    width: "calc(100% - 128px)",
    maxWidth: 1380,
    minHeight: 450,
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
    // marginLeft: "auto",
    // marginRight: "auto",
  },
  flowChartDiagramSvg: {
    minWidth: 900,
    overflow: "visible",
    paddingRight: 45,
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
  flowChartNodeGroup: {
    "&:hover": {
      cursor: "pointer",
    },
  },
  chatNode: {
    "&:hover": {
      "& > circle": {
        fill: "#E8E8eb",
      },
      "& > $chatTooltip": {
        display: "block",
      },
    },
  },
  designNode: {
    "&:hover": {
      "& > circle": {
        fill: "#FFF7E8",
        stroke: "#FDB314",
      },
      "& > svg > path": {
        stroke: "#FDB314",
      },
      "& > $designTooltip": {
        display: "block",
      },
    },
  },
  approvalNode: {
    "&:hover": {
      "& > circle": {
        fill: "#E6F3E9",
        stroke: "#008222",
      },
      "& > svg > path": {
        stroke: "#008222",
      },
      "& > $approvalTooltip": {
        display: "block",
      },
    },
  },
  partnerNode: {
    "&:hover": {
      "& > circle": {
        fill: "#fef3e9",
        stroke: "#f68320",
      },
      "& > svg > path.svgSmile": {
        stroke: "#f68320",
      },
      "& > svg > path.svgSmileEyes": {
        fill: "#f68320",
      },
      "& > $partnerTooltip": {
        display: "block",
      },
    },
  },
  requestNode: {
    "&:hover": {
      "& > circle": {
        fill: "#fae8e9",
        stroke: "#cf1a21",
      },
      "& > svg > path": {
        stroke: "#cf1a21",
      },
      "& > $requestTooltip": {
        display: "block",
      },
    },
  },
  developNode: {
    "&:hover": {
      "& > circle": {
        fill: "#fae8e9",
        stroke: "#cf1a21",
      },
      "& > svg > path": {
        stroke: "#cf1a21",
      },
      "& > $developTooltip": {
        display: "block",
      },
    },
  },
  testNode: {
    "&:hover": {
      "& > circle": {
        fill: "#f1ebf2",
        stroke: "#723680",
      },
      "& > svg > path": {
        stroke: "#723680",
      },
      "& > $testTooltip": {
        display: "block",
      },
    },
  },
  deployNode: {
    "&:hover": {
      "& > circle": {
        fill: "#e6f3e9",
        stroke: "#008222",
      },
      "& > svg > path": {
        stroke: "#008222",
      },
      "& > $deployTooltip": {
        display: "block",
      },
    },
  },
  chatTooltip: {
    display: "none",
  },
  designTooltip: {
    display: "none",
  },
  approvalTooltip: {
    display: "none",
  },
  partnerTooltip: {
    display: "none",
  },
  requestTooltip: {
    display: "none",
  },
  developTooltip: {
    display: "none",
  },
  testTooltip: {
    display: "none",
  },
  deployTooltip: {
    // display: "none",
  },
  flowChartIcon: {
    margin: "auto",
    width: 32,
    height: 32,
  },

  pulseNode: {
    fill: "black",
    fillOpacity: 0,
    // transformOrigin: "50% 50%",
    animationDuration: "2s",
    animationName: "$pulse",
    animationIterationCount: "infinite",
  },
  "@keyframes pulse": {
    from: {
      strokeWidth: 3,
      strokeOpacity: 1,
      transform: "scale(0.3)",
    },
    to: {
      strokeWidth: 0,
      strokeOpacity: 0,
      transform: "scale(1.5)",
    },
  },
}));
