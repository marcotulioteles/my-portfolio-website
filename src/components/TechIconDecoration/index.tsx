import { IconType } from "react-icons";

import styles from "./styles.module.scss";

interface TechIconDecorationProps {
  size: number;
  top: number;
  left: number;
  icon: IconType;
  iconColor: string;
}

const generateIcon = (Icon: IconType, size: number, color: string) => (
  <Icon size={0.45 * size} color={color} />
);

export function TechIconDecoration({
  size,
  top,
  left,
  icon,
  iconColor,
}: TechIconDecorationProps) {
  return (
    <div
      style={{
        width: `${size}px`,
        height: `${size}px`,
        top: `${top}px`,
        left: `${left}px`,
      }}
      className={styles.container}
    >
      {generateIcon(icon, size, iconColor)}
    </div>
  );
}
