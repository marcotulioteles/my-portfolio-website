import { ForwardRefExoticComponent, ReactElement, RefAttributes } from "react";
import { IconProps } from "phosphor-react";
import styles from "./styles.module.scss";

interface SidebarElementProps {
  isActive?: boolean;
  icon: ReactElement<
    ForwardRefExoticComponent<IconProps & RefAttributes<SVGSVGElement>>
  >;
  text: string;
  onClick: () => void;
}

export function SidebarElement({
  isActive,
  icon,
  text,
  onClick,
}: SidebarElementProps) {
  return (
    <a
      href="#"
      className={`${styles["container"]} ${isActive ? styles["active"] : null}`}
      onClick={onClick}
    >
      <div className={styles.content}>
        <div>{icon}</div>
        <span>{text}</span>
      </div>
    </a>
  );
}
