import React from "react";
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = ({ setNavBarOpen }) => {
  return (
    <div className="fixed top-0 left-0 z-30">
      <div className="hidden h-10 lg:bg-gray-400 lg:block ">hello</div>
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
