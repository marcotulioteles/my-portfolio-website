import { IconType } from "react-icons";
import { Desktop, Calendar } from "phosphor-react";

import styles from "./styles.module.scss";

interface ExperienceCardProps {
  logoUrl: string;
  companyUrl: string;
  jobTitle: string;
  period: string;
  techIconsList: {
    name: string;
    icon: IconType;
    size: number;
    color: string;
  }[];
}

const generateIcon = (Icon: IconType, color: string, size: number, key: string) => (
  <Icon size={size} color={color} key={key}/>
);

export function ExperienceCard({
  logoUrl,
  companyUrl,
  jobTitle,
  period,
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
        <a href={companyUrl} target="_blank" className={styles.websiteIcon}>
          <Desktop size={18} />
        </a>
      </div>
      <div className={styles.techIconsContainer}>
        {techIconsList.map((icon, index) =>
          generateIcon(icon.icon, icon.color, icon.size, 'icon-' + index)
        )}
      </div>
      <div className={styles.jobTitleAndDate}>
        <h1>{jobTitle}</h1>
        <div>
          <Calendar size={16} color="#07D4E7" />
          <span>{period}</span>
        </div>
      </div>
    </div>
  );
}
