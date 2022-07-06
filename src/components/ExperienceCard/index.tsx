import { IconType } from "react-icons";
import { Desktop, Calendar } from "phosphor-react";

import styles from "./styles.module.scss";

interface ExperienceCardProps {
  logoUrl: string;
  techIconsList: {
    name: string;
    icon: IconType;
    size: number;
    color: string;
  }[];
}

const generateIcon = (Icon: IconType, color: string, size: number) => (
  <Icon size={size} color={color} />
);

export function ExperienceCard({
  logoUrl,
  techIconsList,
}: ExperienceCardProps) {
  return (
    <div className={styles.container}>
      <div className={styles.circleGranFather}>
        <div className={styles.circleFather}>
          <div className={styles.circle}>
            <img src={logoUrl} alt="" />
          </div>
        </div>
        <div className={styles.websiteIcon}>
          <Desktop size={12} />
        </div>
      </div>
      <div className={styles.techIconsContainer}>
        {techIconsList.map((icon) =>
          generateIcon(icon.icon, icon.color, icon.size)
        )}
      </div>
      <div className={styles.jobTitleAndDate}>
        <h1>Software Engineer Front-End</h1>
        <div>
          <Calendar size={16} color="#07D4E7" />
          <span>August 2021 to April 2022</span>
        </div>
      </div>
    </div>
  );
}
