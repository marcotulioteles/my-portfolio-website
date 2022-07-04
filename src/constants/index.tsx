import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
import { House, Briefcase, Folders, EnvelopeSimple } from "phosphor-react";
import {
  SiAngular,
  SiCss3,
  SiHtml5,
  SiJavascript,
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
