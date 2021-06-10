import TechnologyBox from "./TechnologyBox";

import { useStyles } from "../styles/TechStackStyle";

export default function TechStack(props) {
  const techClasses = useStyles();
  // props -> list of img srcs
  return (
    <div className={techClasses.iconContainer}>
      {props.techStackItems.map((techStackItem) => (
        <div key={techStackItem.imgSrc} className={techClasses.iconBox}>
          <TechnologyBox imgSrc={techStackItem.imgSrc} />
        </div>
      ))}
    </div>
  );
}
