import React from 'react';
import {Button} from "@/components/ui/button.jsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";

const NavBar = ({navBarOpen, setNavBarOpen}) => {

    return (
        navBarOpen && (
            <div className="h-screen w-full z-50 absolute top-0 left-0 bg-black shadow-lg ">
                <div className="h-20 w-full flex items-center pl-7 absolute" >
                    <Button onClick={()=> setNavBarOpen(prev => !prev)} >
                        <FontAwesomeIcon icon={faBars} size="xl" />
                    </Button>
                </div>

                <div className="flex h-full items-center justify-center pb-3">
                    <ul className="flex flex-col gap-4">
                        <li><a href="#about">About</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
            </div>
        )
    );
}

export default NavBar;