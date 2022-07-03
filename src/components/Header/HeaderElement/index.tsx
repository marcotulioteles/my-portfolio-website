import { House } from "phosphor-react";
import styles from "./styles.module.scss";

interface HeaderElementProps {
  isActive?: boolean;
}

export function HeaderElement({ isActive }: HeaderElementProps) {
  return (
    <div
      className={`${styles["container"]} ${isActive ? styles["active"] : null}`}
    >
      <div className={styles.content}>
        <House size={40} />
        <span>Home</span>
      </div>
    </div>
  );
}
