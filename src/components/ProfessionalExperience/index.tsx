import { Briefcase } from "phosphor-react";
import {
  SiGit,
  SiGraphql,
  SiJavascript,
  SiJest,
  SiReact,
  SiSass,
} from "react-icons/si";
import { EXPERIENCE_CARD_LIST } from "../../constants";
import { ExperienceCard } from "../ExperienceCard";
import { SocialMediaGroup } from "../SocialMediaGroup";
import { WindowTitlebarPoints } from "../WindowTitlebarPoints";

import styles from "./styles.module.scss";

export function ProfessionalExperience() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <WindowTitlebarPoints />
        <SocialMediaGroup />
        <div className={styles.title}>
          <Briefcase size={54} />
          <h1>Professional Experience</h1>
        </div>
        <div className={styles.cards}>
          {EXPERIENCE_CARD_LIST.map((card) => (
            <ExperienceCard
              key={card.companyUrl}
              logoUrl={card.logoUrl}
              techIconsList={card.techIconsList}
              companyUrl={card.companyUrl}
              jobTitle={card.jobTitle}
              period={card.period}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
