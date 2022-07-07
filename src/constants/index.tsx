import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
import { House, Briefcase, Folders, EnvelopeSimple } from "phosphor-react";
import {
  SiAngular,
  SiCss3,
  SiGit,
  SiGraphql,
  SiHtml5,
  SiJavascript,
  SiJest,
  SiReact,
  SiSass,
  SiTypescript,
} from "react-icons/si";

export const SIDEBAR_ELEMENTS_PROPS_LIST = [
  {
    text: "Home",
    icon: <House size={40} />,
    isActive: false,
  },
  {
    text: "Professional Experience",
    icon: <Briefcase size={40} />,
    isActive: false,
  },
  {
    text: "Portfolio",
    icon: <Folders size={40} />,
    isActive: false,
  },
  {
    text: "Contact me",
    icon: <EnvelopeSimple size={40} />,
    isActive: false,
  },
];

export const SOCIAL_MEDIA_LINKS_LIST = [
  {
    url: "https://github.com/marcotulioteles",
    name: "github",
    icon: <FaGithub size={18} />,
  },
  {
    url: "https://www.linkedin.com/in/marcotulioteles/",
    name: "linkedin",
    icon: <FaLinkedin size={18} />,
  },
  {
    url: "https://api.whatsapp.com/send?phone=5534991388938&text=Thank%20you%20for%20contacting%20me!%20I'll%20respond%20your%20message%20very%20soon!",
    name: "whatsapp",
    icon: <FaWhatsapp size={18} />,
  },
];

export const TECH_ICONS_DECORATION_LIST = [
  {
    name: "html5",
    size: 30,
    icon: SiHtml5,
    iconColor: "#E34F26",
    left: 32,
    top: -5,
  },
  {
    name: "sass",
    size: 42,
    icon: SiSass,
    iconColor: "#CC6699",
    left: 169,
    top: 66,
  },
  {
    name: "angular",
    size: 30,
    icon: SiAngular,
    iconColor: "#DD0031",
    left: 186,
    top: 172,
  },
  {
    name: "react",
    size: 68,
    icon: SiReact,
    iconColor: "#00CBCB",
    left: 98,
    top: 156,
  },
  {
    name: "typescript",
    size: 30,
    icon: SiTypescript,
    iconColor: "#007ACC",
    left: 8,
    top: 124,
  },
  {
    name: "javascript",
    size: 44,
    icon: SiJavascript,
    iconColor: "#FFBF00",
    left: -24,
    top: 70,
  },
  {
    name: "css3",
    size: 23,
    icon: SiCss3,
    iconColor: "#007ACC",
    left: 26,
    top: 42,
  },
];

export const EXPERIENCE_CARD_LIST = [
  {
    logoUrl: "src/assets/tqi-logo.svg",
    companyUrl: "https://www.tqi.com.br/",
    jobTitle: "Software Engineer FrontEnd",
    period: "August 2021 to April 2022",
    techIconsList: [
      {
        name: "javascript",
        icon: SiJavascript,
        size: 20,
        color: "#FFBF00",
      },
      {
        name: "react",
        icon: SiReact,
        size: 20,
        color: "#00CBCB",
      },
      {
        name: "sass",
        icon: SiSass,
        size: 20,
        color: "#BF6E97",
      },
      {
        name: "jest",
        icon: SiJest,
        size: 20,
        color: "#99425B",
      },
      {
        name: "graphql",
        icon: SiGraphql,
        size: 20,
        color: "#E535AB",
      },
      {
        name: "git",
        icon: SiGit,
        size: 20,
        color: "#DC5C2D",
      },
    ],
  },
  {
    logoUrl: "src/assets/pimentaGROUP-logo.svg",
    companyUrl: "https://pimenta.group/#/landing",
    jobTitle: "Software Engineer FrontEnd",
    period: "April 2022 until Now",
    techIconsList: [
      {
        name: "javascript",
        icon: SiJavascript,
        size: 20,
        color: "#FFBF00",
      },
      {
        name: "angular",
        icon: SiAngular,
        size: 20,
        color: "#DD0031",
      },
      {
        name: "typescript",
        icon: SiTypescript,
        size: 20,
        color: "#007ACC",
      },
      {
        name: "sass",
        icon: SiSass,
        size: 20,
        color: "#BF6E97",
      },
      {
        name: "git",
        icon: SiGit,
        size: 20,
        color: "#DC5C2D",
      },
    ],
  },
  {
    logoUrl: "src/assets/ey-logo.svg",
    companyUrl: "https://www.ey.com/en_br",
    jobTitle: "Software Engineer FrontEnd",
    period: "May 2022 until Now",
    techIconsList: [
      {
        name: "javascript",
        icon: SiJavascript,
        size: 20,
        color: "#FFBF00",
      },
      {
        name: "html5",
        icon: SiHtml5,
        size: 20,
        color: "#DD0031",
      },
      {
        name: "css3",
        icon: SiCss3,
        size: 20,
        color: "#1C88C7",
      },
      {
        name: "react",
        icon: SiReact,
        size: 20,
        color: "#00CBCB",
      },
      {
        name: "git",
        icon: SiGit,
        size: 20,
        color: "#DC5C2D",
      },
    ],
  },
];

export const PORTFOLIO_IMAGES_LIST = [
  {
    appName: "ignews",
    imgUrl: "/src/assets/ignews.png",
    webUrl: "https://ignews-ten-pink.vercel.app",
  },
  {
    appName: "cryptoGrow",
    imgUrl: "/src/assets/crypto-grow.png",
    webUrl: "https://crypto-grow.vercel.app",
  },
  {
    appName: "easyWeather",
    imgUrl: "/src/assets/easy-weather.png",
    webUrl: "https://easy-weather-angular.vercel.app",
  },
  {
    appName: "rickAndMorty",
    imgUrl: "/src/assets/rick-and-morty.png",
    webUrl: "https://rickandmorty-guideepisodes.vercel.app",
  },
];
