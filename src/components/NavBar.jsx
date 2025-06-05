import React from "react";
import { useEffect } from "react";
import { Button } from "@/components/ui/button.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faClose, faFile } from "@fortawesome/free-solid-svg-icons";
import resume from "./images/henrique_baggio_resume_JUL.pdf";

const NavBar = ({ navBarOpen, setNavBarOpen }) => {
  useEffect(() => {
    if (navBarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [navBarOpen]);

  return (
    <div
      className={`h-screen z-50 fixed top-0 left-0 bg-[var(--clr-slate800)] overflow-x-hidden transition-all duration-300 ease-in-out lg:hidden ${
        navBarOpen ? "w-full" : "w-0"
      }`}
    >
      <div className="h-20 w-full flex items-center pl-7 absolute">
        <Button
          onClick={() => setNavBarOpen((prev) => !prev)}
          className="bg-[var(--clr-slate800)] hover:bg-[var(--clr-slate700)] relative"
        >
          <FontAwesomeIcon
            icon={faClose}
            size="xl"
            className={`transform transition-all duration-300 ${
              navBarOpen ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"
            }`}
          />
        </Button>
      </div>

      <div className="flex flex-col h-full items-center justify-center pb-3 ">
        <ul className="flex flex-col gap-4 items-center">
          <li>
            <a href={resume} title="Download Resume" download={resume}>
              <FontAwesomeIcon
                className="hover:scale-110 hover:text-[var(--clr-slate400)] transition-all duration-300 ease-in-out"
                icon={faFile}
                size="3x"
                color={"var(--clr-light)"}
              />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/henrique-baggio/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setNavBarOpen(false)}
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                className="hover:scale-110 hover:text-[var(--clr-slate400)] transition-all duration-300 ease-in-out"
                size="3x"
                color={"var(--clr-light)"}
              />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/IqueBaggio28"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setNavBarOpen(false)}
            >
              <FontAwesomeIcon
                icon={faGithub}
                className="hover:scale-110 hover:text-[var(--clr-slate400)] transition-all duration-300 ease-in-out"
                size="3x"
                color={"var(--clr-light)"}
              />
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="btn w-fit mt-4 border-t-white scroll-pt-0"
              onClick={() => setNavBarOpen(false)}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
