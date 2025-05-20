import React from "react";
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import MenuIcon from "./MenuIcon";

const Header = ({ setNavBarOpen, navBarOpen }) => {
  return (
    <div className="fixed top-0 left-0 z-30 ">
      <div className="hidden  justify-between items-center w-screen h-20 px-10 bg-transparent backdrop-blur-sm xl:h-28 lg:flex xl:px-20">
        <div className="flex justify-between items-center gap-8 h-full xl:gap-12">
          <a
            href="https://www.linkedin.com/in/henrique-baggio/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className="hover:scale-110 hover:text-[var(--clr-slate400)] transition-all duration-300 ease-in-out xl:scale-130 "
              size="2x"
              color={"var(--clr-slate600)"}
            />
          </a>
          <a
            href="https://github.com/IqueBaggio28"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              className="hover:scale-110 hover:text-[var(--clr-slate400)] transition-all duration-300 ease-in-out xl:scale-130 "
              size="2x"
              color={"var(--clr-slate600)"}
            />
          </a>
        </div>
        <div className="flex justify-between items-center gap-8 h-full xl:gap-12">
          <FontAwesomeIcon
            icon={faFile}
            className="hover:scale-110 hover:text-[var(--clr-slate400)] transition-all duration-300 ease-in-out xl:scale-130 "
            size="2x"
            color={"var(--clr-slate600)"}
          />
          <a href="#contact" className="btn">
            Contact
          </a>
        </div>
      </div>
      <div className="h-20 w-full flex items-center pl-7  lg:hidden">
        <Button
          onClick={() => setNavBarOpen((prev) => !prev)}
          className="bg-[var(--clr-dark)] relative w-10 h-10 flex items-center justify-center"
        >
          <MenuIcon isOpen={navBarOpen} />
        </Button>
      </div>
    </div>
  );
};

export default Header;
