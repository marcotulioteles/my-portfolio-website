import { DownloadSimple } from "phosphor-react";

import HomePhotoImg from "../../assets/marcotulio-home-image.png";
import { SOCIAL_MEDIA_LINKS_LIST } from "../../constants";
import { SocialMediaLink } from "../SocialMediaLink";
import { WindowTitlebarPoints } from "../WindowTitlebarPoints";

import styles from "./styles.module.scss";

export function Home() {
  return (
    <div style={{ minHeight: "100vh", display: "flex" }}>
      <div className={styles.container}>
        <WindowTitlebarPoints />
        <div className={styles.socialMediaLinks}>
          {SOCIAL_MEDIA_LINKS_LIST.map((link, index) => (
            <SocialMediaLink
              url={link.url}
              icon={link.icon}
              key={`media-link-${link.name}-${index}`}
            />
          ))}
        </div>
        <div className={styles.textContainer}>
          <h1>
            Hi, <br />
            I'm Marco Túlio,
          </h1>
          <span>Software Engineer Front-End</span>
          <a
            href="/src/assets/CVMarcoTulio-en.docx"
            download="CVMarcoTulio.docx"
          >
            <DownloadSimple size={24} />
            Download CV
          </a>
        </div>
        <div className={styles.photoContainer}>
          <img src={HomePhotoImg} />
        </div>
      </div>
    </div>
  );
}
