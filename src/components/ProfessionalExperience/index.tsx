import {
  SiGit,
  SiGraphql,
  SiJavascript,
  SiJest,
  SiReact,
  SiSass,
} from "react-icons/si";
import { ExperienceCard } from "../ExperienceCard";

import styles from "./styles.module.scss";

const iconsList = [
  {
    name: "javascript",
    icon: SiJavascript,
    size: 20,
    color: "#FFBF00",
  },
  {
    name: "react",
    icon: SiReact,
    size: 20,
    color: "#00CBCB",
  },
  {
    name: "sass",
    icon: SiSass,
    size: 20,
    color: "#BF6E97",
  },
  {
    name: "jest",
    icon: SiJest,
    size: 20,
    color: "#99425B",
  },
  {
    name: "graphql",
    icon: SiGraphql,
    size: 20,
    color: "#E535AB",
  },
  {
    name: "git",
    icon: SiGit,
    size: 20,
    color: "#DC5C2D",
  },
];

export function ProfessionalExperience() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <ExperienceCard
          logoUrl="/src/assets/tqi-logo.svg"
          techIconsList={iconsList}
        />
        <ExperienceCard
          logoUrl="/src/assets/tqi-logo.svg"
          techIconsList={iconsList}
        />
        <ExperienceCard
          logoUrl="/src/assets/tqi-logo.svg"
          techIconsList={iconsList}
        />
      </div>
    </div>
  );
}
