import styles from "./styles.module.scss";
import { CaretDoubleRight, Folders } from "phosphor-react";
import { useWindowSize } from "../../hooks/useWindowSize";
import { SocialMediaGroup } from "../../components/SocialMediaGroup";
import ignewsImg from '../../assets/ignews.png';
import cryptoGrowImg from '../../assets/crypto-grow.png';
import easyWeatherImg from '../../assets/easy-weather.png';
import rickAndMortyImg from '../../assets/rick-and-morty.png';

export const PORTFOLIO_IMAGES_LIST = [
  {
    appName: "ignews",
    imgUrl: ignewsImg,
    webUrl: "https://ignews-ten-pink.vercel.app",
  },
  {
    appName: "cryptoGrow",
    imgUrl: cryptoGrowImg,
    webUrl: "https://crypto-grow.vercel.app",
  },
  {
    appName: "easyWeather",
    imgUrl: easyWeatherImg,
    webUrl: "https://easy-weather-angular.vercel.app",
  },
  {
    appName: "rickAndMorty",
    imgUrl: rickAndMortyImg,
    webUrl: "https://rickandmorty-guideepisodes.vercel.app",
  },
];

const setImgWidth = (width: number | undefined, value: string) =>
  width && width > 620 ? value : "100%";

export function Portfolio() {
  const { width } = useWindowSize();

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.title}>
          <div>
            <Folders size={32} weight="light" />
          </div>
          <h1>Portfolio</h1>
        </div>
        <SocialMediaGroup />
        <div className={styles.appColumn}>
          <a
            href={PORTFOLIO_IMAGES_LIST[0].webUrl}
            target="_blank"
            className={styles.appLinkImage}
          >
            <img
              src={PORTFOLIO_IMAGES_LIST[0].imgUrl}
              alt={PORTFOLIO_IMAGES_LIST[0].appName}
              width={setImgWidth(width, "50%")}
            />
          </a>
          <a
            href={PORTFOLIO_IMAGES_LIST[1].webUrl}
            target="_blank"
            className={styles.appLinkImage}
          >
            <img
              src={PORTFOLIO_IMAGES_LIST[1].imgUrl}
              alt={PORTFOLIO_IMAGES_LIST[1].appName}
              width={setImgWidth(width, "75%")}
            />
          </a>
        </div>
        <div className={styles.appColumn}>
          <a
            href={PORTFOLIO_IMAGES_LIST[2].webUrl}
            target="_blank"
            className={styles.appLinkImage}
          >
            <img
              src={PORTFOLIO_IMAGES_LIST[2].imgUrl}
              alt={PORTFOLIO_IMAGES_LIST[2].appName}
              width={setImgWidth(width, "100%")}
            />
          </a>
          <a
            href={PORTFOLIO_IMAGES_LIST[3].webUrl}
            target="_blank"
            className={styles.appLinkImage}
          >
            <img
              src={PORTFOLIO_IMAGES_LIST[3].imgUrl}
              alt={PORTFOLIO_IMAGES_LIST[3].appName}
              width={setImgWidth(width, "60%")}
            />
          </a>
        </div>
        <a
          className={styles.moreProjects}
          href="https://github.com/marcotulioteles"
          target="_blank"
        >
          More projects <CaretDoubleRight size={32} />{" "}
        </a>
      </div>
    </div>
  );
}
