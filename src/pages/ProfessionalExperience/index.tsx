import { Briefcase } from "phosphor-react";
import { EXPERIENCE_CARD_LIST } from "../../constants";
import { ExperienceCard } from "../../components/ExperienceCard";
import { SocialMediaGroup } from "../../components/SocialMediaGroup";
import { WindowTitlebarPoints } from "../../components/WindowTitlebarPoints";

import styles from "./styles.module.scss";

export function ProfessionalExperience() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <WindowTitlebarPoints />
        <SocialMediaGroup />
        <div className={styles.title}>
          <Briefcase size={54} weight="light" />
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
