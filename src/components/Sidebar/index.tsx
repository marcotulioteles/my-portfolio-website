import {
  ForwardRefExoticComponent,
  ReactElement,
  RefAttributes,
  useState,
} from "react";
import {
  Briefcase,
  EnvelopeSimple,
  Folders,
  IconProps,
  XCircle,
} from "phosphor-react";
import { SidebarElement } from "./SidebarElement";
import { House } from "phosphor-react";
import styles from "./styles.module.scss";

interface sidebarElementsProps {
  text: string;
  icon: ReactElement<
    ForwardRefExoticComponent<IconProps & RefAttributes<SVGSVGElement>>
  >;
  isActive: boolean;
}

const sidebarElementsPropsList = [
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

export function Sidebar() {
  const [sidebarElements, setSidebarElements] = useState<
    sidebarElementsProps[]
  >(sidebarElementsPropsList);

  const handleSidebarElementOnClick = (
    list: sidebarElementsProps[],
    index: number
  ) => {
    const newList = list.map((element) => {
      return {
        ...element,
        isActive: false,
      };
    });

    newList[index].isActive = true;
    setSidebarElements(newList);
  };

  return (
    <aside className={styles.sidebarContainer}>
      <nav className={styles.sidebarNavigation}>
        {sidebarElements.map((sidebarElement, index) => (
          <SidebarElement
            key={`sidebar-element-${index}`}
            icon={sidebarElement.icon}
            text={sidebarElement.text}
            isActive={sidebarElement.isActive}
            onClick={() => {
              handleSidebarElementOnClick(sidebarElements, index);
            }}
          />
        ))}
      </nav>
      <XCircle
        size={28}
        color="#07D4E7"
        style={{
          position: "absolute",
          top: "1rem",
          right: "1rem",
          cursor: "pointer",
        }}
        onClick={() => console.log("clicked on close sidebar!")}
      />
    </aside>
  );
}
