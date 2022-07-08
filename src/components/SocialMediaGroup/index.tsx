import { SocialMediaLink } from "../SocialMediaLink";

import { SOCIAL_MEDIA_LINKS_LIST } from "../../constants";

import styles from "./styles.module.scss";

export function SocialMediaGroup() {
  return (
    <div className={styles.socialMediaGroupContainer}>
      {SOCIAL_MEDIA_LINKS_LIST.map((link) => (
        <SocialMediaLink
          key={`social-media-link-${link.name}`}
          icon={link.icon}
          url={link.url}
        />
      ))}
    </div>
  );
}
