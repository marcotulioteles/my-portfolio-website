import { ForwardRefExoticComponent, ReactElement, RefAttributes } from "react";
import { IconProps } from "phosphor-react";
import styles from "./styles.module.scss";
import { NavLink } from "react-router-dom";

interface SidebarElementProps {
  icon: ReactElement<
    ForwardRefExoticComponent<IconProps & RefAttributes<SVGSVGElement>>
  >;
  text: string;
  url: string;
  urlIsActive: boolean
}

export function SidebarElement({
  icon,
  text,
  url,
  urlIsActive
}: SidebarElementProps) {
  return (
    <NavLink
      to={url}
      className={urlIsActive ? `${styles.container} ${styles.active}` : `${styles.container}`}
    >
      <div className={styles.content}>
        <div>{icon}</div>
        <span>{text}</span>
      </div>
    </NavLink>
  );
}
