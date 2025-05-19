import React from "react";
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = ({ setNavBarOpen }) => {
  return (
    <div className="fixed top-0 left-0 z-30 bg-transparent backdrop-blur-sm">
      <div className="hidden lg:flex justify-between items-center w-screen h-20 px-10">
        <div className="flex justify-between items-center gap-8 h-full">
          <FontAwesomeIcon
            icon={faLinkedin}
            className="hover:scale-110 hover:text-[var(--clr-slate400)] transition-all duration-300 ease-in-out"
            size="2x"
          />
          <FontAwesomeIcon
            icon={faGithub}
            className="hover:scale-110 hover:text-[var(--clr-slate400)] transition-all duration-300 ease-in-out"
            size="2x"
          />
        </div>
        <div className="flex justify-between items-center gap-8 h-full">
          <FontAwesomeIcon
            icon={faFile}
            className="hover:scale-110 hover:text-[var(--clr-slate400)] transition-all duration-300 ease-in-out"
            size="2x"
          />
          <a href="#contact" className="btn">
            Contact
          </a>
        </div>
      </div>
      <div className="h-20 w-full flex items-center pl-7  lg:hidden">
        <Button
          onClick={() => setNavBarOpen((prev) => !prev)}
          className="bg-[var(--clr-dark)]"
        >
          <FontAwesomeIcon icon={faBars} size="xl" />
        </Button>
      </div>
    </div>
  );
};

export default Header;
