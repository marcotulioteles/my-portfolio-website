import { DownloadSimple } from "phosphor-react";
import { SiJavascript } from "react-icons/si";

import HomePhotoImg from "../../assets/marcotulio-home-image.png";
import {
  SOCIAL_MEDIA_LINKS_LIST,
  TECH_ICONS_DECORATION_LIST,
} from "../../constants";
import { useWindowSize } from "../../hooks/useWindowSize";
import { SocialMediaGroup } from "../../components/SocialMediaGroup";
import { SocialMediaLink } from "../../components/SocialMediaLink";
import { TechIconDecoration } from "../../components/TechIconDecoration";
import { WindowTitlebarPoints } from "../../components/WindowTitlebarPoints";

import styles from "./styles.module.scss";
import { INTLDiallingCodesSelect } from "../../components/INTLDiallingCodesSelect";

export function Home() {
  const { width } = useWindowSize();

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <WindowTitlebarPoints />
        <SocialMediaGroup />
        <div className={styles.textContainer}>
          <h1>
            Hi, <br />
            I'm Marco Túlio,
          </h1>
          <span>Software Engineer Front-End</span>
          <a
            href="/src/assets/CVMarcoTulio-en.pdf"
            download="CVMarcoTulio.pdf"
          >
            <DownloadSimple size={24} />
            Download CV
          </a>
        </div>
        <div className={styles.photoContainer}>
          {TECH_ICONS_DECORATION_LIST.map((icon) => (
            <TechIconDecoration
              size={width && width > 1384 ? (icon.size / 190) * 265 : icon.size}
              icon={icon.icon}
              iconColor={icon.iconColor}
              left={width && width > 1384 ? (icon.left / 190) * 265 : icon.left}
              top={width && width > 1384 ? (icon.top / 190) * 265 : icon.top}
              key={`tech-icons-decoration-${icon.name}`}
            />
          ))}
          <img src={HomePhotoImg} />
        </div>
      </div>
    </div>
  );
}
