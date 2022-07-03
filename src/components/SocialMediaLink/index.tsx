import { ReactElement } from "react";
import { IconType } from "react-icons";

import styles from "./styles.module.scss";

interface SocialMediaLinkProps {
  icon: ReactElement<IconType>;
  url: string;
}

export function SocialMediaLink({ icon, url }: SocialMediaLinkProps) {
  return (
    <a className={styles.container} href={url} target="_blank">
      {icon}
    </a>
  );
}
