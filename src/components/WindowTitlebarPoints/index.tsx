import styles from "./styles.module.scss";

export function WindowTitlebarPoints() {
  return (
    <div className={styles.container}>
      <div className={styles.red}></div>
      <div className={styles.yellow}></div>
      <div className={styles.green}></div>
    </div>
  );
}
