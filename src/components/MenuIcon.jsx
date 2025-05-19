import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";

const MenuIcon = ({ isOpen }) => {
  return (
    <>
      <FontAwesomeIcon
        icon={faBars}
        size="xl"
        className="absolute transform transition-all duration-300 ease-in-out"
        style={{
          opacity: isOpen ? 0 : 1,
          transform: `rotate(${isOpen ? "180deg" : "0deg"}) scale(${
            isOpen ? 0.5 : 1
          })`,
        }}
      />
      <FontAwesomeIcon
        icon={faClose}
        size="xl"
        className="absolute transform transition-all duration-300 ease-in-out"
        style={{
          opacity: isOpen ? 1 : 0,
          transform: `rotate(${isOpen ? "0deg" : "-180deg"}) scale(${
            isOpen ? 1 : 0.5
          })`,
        }}
      />
    </>
  );
};

export default MenuIcon;
