import { React } from "react";

import { flowChartClasses } from "../styles/FlowChartStyles";

export default function FlowChart() {
  const styles = flowChartClasses();

  return (
    <div className={styles.flowChart}>
      <div className={styles.flowChartBackground} />
      <div className={styles.flowChartDiagram}>
        <svg
          className={styles.flowChartDiagramSvg}
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://wwww.w3.org/1999/xlink"
          fill="none"
          viewBox="0 0 1020 295"
        >
          <g className={styles.flowChartEdgeGroup} dataLineGroup="1" id="flowChart-2_edge-1_2">
            <path
              className={styles.flowChartDottedLine}
              stroke="#141433"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="16"
              d="M 44,57L 204,57"
            ></path>
            <path
              className={styles.flowChartSolidLine}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="16"
              d="M 44,57L 204,57"
              strokeWidth="100"
              stroke="#240405"
            />
          </g>
          <g className={styles.flowChartEdgeGroup} data-line-group="1" id="flowChart-2_edge-2_3">
            <path
              className={styles.flowChartDottedLine}
              stroke="#141433"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="16"
              d="M 204,57L 364,57"
            />
            <path
              className={styles.flowChartSolidLine}
              stroke="#240405"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="16"
              strokeWidth="3"
              d="M 204,57L 364,57"
            />
          </g>
          <g>
            <g className={styles.flowChartEdgeGroup} data-line-group="1" id="flowChart-2_edge-3_4">
              <path
                className={styles.flowChartDottedLine}
                stroke="#141433"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="16"
                d="M 364,57L 524,57"
              />
              <path
                className={styles.flowChartSolidLine}
                stroke="#240405"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="16"
                strokeWidth="3"
                d="M 364,57L 524,57"
              />
            </g>
            <g className={styles.flowChartEdgeGroup} data-line-group="1" id="flowChart-2_edge-4_5">
              <path
                className={styles.flowChartDottedLine}
                stroke="#141433"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="16"
                d="M 524, 57 L 524, 57 Q 524, 217 364, 217 L 364, 217L 364, 217"
              />
              <path
                className={styles.flowChartSolidLine}
                stroke="#240405"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="16"
                strokeWidth="3"
                d="M 524, 57 L 524, 57 Q 524, 217 364, 217 L 364, 217L 364, 217"
              />
            </g>
            <g className={styles.flowChartEdgeGroup} data-line-group="1" id="flowChart-2_edge-5_2">
              <path
                className={styles.flowChartDottedLine}
                stroke="#141433"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="16"
                d="M 364, 217 L 364, 217 Q 204, 217 204, 57 L 204,57L 204, 57"
              />
              <path
                className={styles.flowChartSolidLine}
                stroke="#240405"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="16"
                strokeWidth="3"
                d="M 364, 217 L 364, 217 Q 204, 217 204, 57 L 204,57L 204, 57"
              />
            </g>
            <g className={styles.flowChartEdgeGroup} data-line-group="1" id="flowChart-2_edge-4_6">
              <path
                className={styles.flowChartDottedLine}
                stroke="#141433"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="16"
                d="M524, 57L 684, 57"
              />
              <path
                className={styles.flowChartSolidLine}
                stroke="#240405"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="16"
                strokeWidth="3"
                d="M524, 57L 684, 57"
              />
            </g>
            <g className={styles.flowChartEdgeGroup} data-line-group="1" id="flowChart-2_edge-6_7">
              <path
                className={styles.flowChartDottedLine}
                stroke="#141433"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="16"
                d="M684, 57L 844, 57"
              />
              <path
                className={styles.flowChartSolidLine}
                stroke="#240405"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="16"
                strokeWidth="3"
                d="M684, 57L 844, 57"
              />
            </g>
            <g className={styles.flowChartEdgeGroup} data-line-group="1" id="flowChart-2_edge-7_8">
              <path
                className={styles.flowChartDottedLine}
                stroke="#141433"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="16"
                d="M844, 57L 1004, 57"
              />
              <path
                className={styles.flowChartSolidLine}
                stroke="#240405"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="16"
                strokeWidth="3"
                d="M844, 57L 1004, 57"
              />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}
