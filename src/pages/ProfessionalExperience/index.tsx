import { Briefcase } from "phosphor-react";
import { ExperienceCard } from "../../components/ExperienceCard";
import { SocialMediaGroup } from "../../components/SocialMediaGroup";
import { WindowTitlebarPoints } from "../../components/WindowTitlebarPoints";
import tqiLogo from '../../assets/tqi-logo.svg';
import pimentaLogo from '../../assets/pimentaGROUP-logo.svg';
import eyLogo from '../../assets/ey-logo.svg';

export const EXPERIENCE_CARD_LIST = [
  {
    logoUrl: tqiLogo,
    companyUrl: "https://www.tqi.com.br/",
    jobTitle: "Software Engineer FrontEnd",
    period: "August 2021 to April 2022",
    techIconsList: [
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
    ],
  },
  {
    logoUrl: pimentaLogo,
    companyUrl: "https://pimenta.group/#/landing",
    jobTitle: "Software Engineer FrontEnd",
    period: "April 2022 until Now",
    techIconsList: [
      {
        name: "javascript",
        icon: SiJavascript,
        size: 20,
        color: "#FFBF00",
      },
      {
        name: "angular",
        icon: SiAngular,
        size: 20,
        color: "#DD0031",
      },
      {
        name: "typescript",
        icon: SiTypescript,
        size: 20,
        color: "#007ACC",
      },
      {
        name: "sass",
        icon: SiSass,
        size: 20,
        color: "#BF6E97",
      },
      {
        name: "git",
        icon: SiGit,
        size: 20,
        color: "#DC5C2D",
      },
    ],
  },
  {
    logoUrl: eyLogo,
    companyUrl: "https://www.ey.com/en_br",
    jobTitle: "Software Engineer FrontEnd",
    period: "May 2022 until Now",
    techIconsList: [
      {
        name: "javascript",
        icon: SiJavascript,
        size: 20,
        color: "#FFBF00",
      },
      {
        name: "html5",
        icon: SiHtml5,
        size: 20,
        color: "#DD0031",
      },
      {
        name: "css3",
        icon: SiCss3,
        size: 20,
        color: "#1C88C7",
      },
      {
        name: "react",
        icon: SiReact,
        size: 20,
        color: "#00CBCB",
      },
      {
        name: "git",
        icon: SiGit,
        size: 20,
        color: "#DC5C2D",
      },
    ],
  },
];

import styles from "./styles.module.scss";
import { SiAngular, SiCss3, SiGit, SiGraphql, SiHtml5, SiJavascript, SiJest, SiReact, SiSass, SiTypescript } from "react-icons/si";

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
          {EXPERIENCE_CARD_LIST.map((card, index) => (
            <ExperienceCard
              key={`company}-${index}`}
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
