import {
  ForwardRefExoticComponent,
  ReactElement,
  RefAttributes,
  useState,
} from "react";
import { IconProps, List, XCircle } from "phosphor-react";
import { SidebarElement } from "./SidebarElement";
import { SIDEBAR_ELEMENTS_PROPS_LIST } from "../../constants";

import styles from "./styles.module.scss";

interface sidebarElementsProps {
  text: string;
  icon: ReactElement<
    ForwardRefExoticComponent<IconProps & RefAttributes<SVGSVGElement>>
  >;
  isActive: boolean;
}

export function Sidebar() {
  const [sidebarElements, setSidebarElements] = useState<
    sidebarElementsProps[]
  >(SIDEBAR_ELEMENTS_PROPS_LIST);
  const [sidebarIsVisible, setSidebarIsVisible] = useState(false);

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
    <>
      <aside
        className={`${styles.sidebarContainer} ${
          sidebarIsVisible ? styles.visible : null
        }`}
      >
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
          onClick={() => setSidebarIsVisible(false)}
        />
      </aside>

      <button
        className={styles.menuButton}
        onClick={() => setSidebarIsVisible(true)}
      >
        {" "}
        <List size={20} />{" "}
      </button>
    </>
  );
}
