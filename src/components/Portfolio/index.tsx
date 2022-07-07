import styles from "./styles.module.scss";
import { PORTFOLIO_IMAGES_LIST } from "../../constants";
import { Folders } from "phosphor-react";
import { useWindowSize } from "../../hooks/useWindowSize";

const setImgWidth = (width: number | undefined, value: string) =>
  width && width > 620 ? value : "100%";

export function Portfolio() {
  const { width } = useWindowSize();

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.title}>
          <div>
            <Folders size={48} />
          </div>
          <h1>Portfolio</h1>
        </div>
        <div className={styles.appColumn}>
          <a href={PORTFOLIO_IMAGES_LIST[0].webUrl} target="_blank">
            <img
              src={PORTFOLIO_IMAGES_LIST[0].imgUrl}
              alt={PORTFOLIO_IMAGES_LIST[0].appName}
              width={setImgWidth(width, "50%")}
            />
          </a>
          <a href={PORTFOLIO_IMAGES_LIST[1].webUrl} target="_blank">
            <img
              src={PORTFOLIO_IMAGES_LIST[1].imgUrl}
              alt={PORTFOLIO_IMAGES_LIST[1].appName}
              width={setImgWidth(width, "75%")}
            />
          </a>
        </div>
        <div className={styles.appColumn}>
          <a href={PORTFOLIO_IMAGES_LIST[2].webUrl} target="_blank">
            <img
              src={PORTFOLIO_IMAGES_LIST[2].imgUrl}
              alt={PORTFOLIO_IMAGES_LIST[2].appName}
              width={setImgWidth(width, "100%")}
            />
          </a>
          <a href={PORTFOLIO_IMAGES_LIST[3].webUrl} target="_blank">
            <img
              src={PORTFOLIO_IMAGES_LIST[3].imgUrl}
              alt={PORTFOLIO_IMAGES_LIST[3].appName}
              width={setImgWidth(width, "60%")}
            />
          </a>
        </div>
      </div>
    </div>
  );
}
