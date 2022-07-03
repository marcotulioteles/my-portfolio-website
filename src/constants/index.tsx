import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
import { House, Briefcase, Folders, EnvelopeSimple } from "phosphor-react";

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
