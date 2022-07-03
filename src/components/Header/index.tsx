import { XCircle } from "phosphor-react";
import { HeaderElement } from "./HeaderElement";
import styles from "./styles.module.scss";

export function Header() {
  return (
    <aside className={styles.headerContainer}>
      <nav className={styles.headerNavigation}>
        <HeaderElement isActive />
        <HeaderElement />
        <HeaderElement />
        <HeaderElement />
      </nav>
      <XCircle
        size={28}
        color="#07D4E7"
        style={{ position: "absolute", top: "8", right: "8px" }}
        onClick={() => console.log("clicked on close sidebar!")}
      />
    </aside>
  );
}
